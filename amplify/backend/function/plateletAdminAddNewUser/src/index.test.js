const handler = require("./index").handler;
const cognitoServiceProvider =
    require("aws-sdk").CognitoIdentityServiceProvider;
const appSyncClient = require("aws-appsync");
const awssdk = require("aws-sdk");
const createUser = require("./createUser").createUser;
const listUsers = require("./listUsers").listUsers;

jest.mock("aws-sdk");

const mockCognitoResponse = {
    User: {
        Attributes: [
            {
                Name: "sub",
                Value: "testSubId",
            },
        ],
    },
};

const mockUsers = {
    data: {
        listUsers: {
            items: [
                { displayName: "Someone Person" },
                { displayName: "Another Individual" },
                { displayName: "Another Individual-1" },
            ],
        },
    },
};

const mockNewUserResult = {
    data: {
        createUser: {
            id: "testUserId",
            displayName: "New User",
            name: "New User",
            tenantId: "testTenantId",
            cognitoId: "testCognitoId",
            contact: {
                emailAddress: "testEmailAddress@test.com",
            },
        },
    },
};

jest.mock("aws-sdk", () => {
    return {
        CognitoIdentityServiceProvider: class {
            adminCreateUser() {
                return this;
            }
            promise() {
                return Promise.resolve(mockCognitoResponse);
            }
        },
    };
});

jest.mock("aws-appsync", () => {
    return {
        ...jest.requireActual("aws-appsync"),
        default: class {
            mutate() {
                return Promise.resolve(mockNewUserResult);
            }
            query() {
                return Promise.resolve(mockUsers);
            }
        },
    };
});

describe("plateletAdminAddNewUser", () => {
    const OLD_ENV = process.env;
    beforeEach(() => {
        jest.resetModules();
        process.env = { ...OLD_ENV }; // Make a copy
    });

    it("should return a function", () => {
        expect(typeof handler).toBe("function");
    });

    test("add a new user", async () => {
        process.env.NODE_ENV = "dev";
        process.env.AUTH_PLATELET61A0AC07_USERPOOLID = "testPoolId";
        process.env.API_PLATELET_GRAPHQLAPIENDPOINTOUTPUT = "testEndpoint";
        const cognitoSpy = jest.spyOn(
            awssdk.CognitoIdentityServiceProvider.prototype,
            "adminCreateUser"
        );
        const appSyncMutateSpy = jest.spyOn(
            appSyncClient.default.prototype,
            "mutate"
        );
        const appSyncQuerySpy = jest.spyOn(
            appSyncClient.default.prototype,
            "query"
        );
        const mockEvent = {
            arguments: {
                name: "test user",
                email: "test@test.com",
                roles: ["USER"],
                tenantId: "testTenantId",
            },
        };
        await handler(mockEvent);
        expect(cognitoSpy).toHaveBeenCalledWith({
            DesiredDeliveryMediums: ["EMAIL"],
            ForceAliasCreation: false,
            UserAttributes: [
                {
                    Name: "email",
                    Value: mockEvent.arguments.email,
                },
                {
                    Name: "email_verified",
                    Value: "true",
                },
                {
                    Name: "custom:tenantId",
                    Value: mockEvent.arguments.tenantId,
                },
            ],
            UserPoolId: "testPoolId",
            Username: expect.any(String),
        });
        const createUserInput = {
            tenantId: mockEvent.arguments.tenantId,
            active: 1,
            cognitoId: "testSubId",
            name: mockEvent.arguments.name,
            displayName: mockEvent.arguments.name,
            roles: ["USER"],
            contact: { emailAddress: mockEvent.arguments.email },
        };
        expect(appSyncMutateSpy).toHaveBeenCalledWith({
            mutation: createUser,
            variables: { input: createUserInput },
        });
        expect(appSyncQuerySpy).toHaveBeenCalledWith({
            query: listUsers,
            variables: { tenantId: mockEvent.arguments.tenantId },
        });
    });
    test("add a new user with non-unique name", async () => {
        process.env.NODE_ENV = "dev";
        process.env.AUTH_PLATELET61A0AC07_USERPOOLID = "testPoolId";
        process.env.API_PLATELET_GRAPHQLAPIENDPOINTOUTPUT = "testEndpoint";
        const cognitoSpy = jest.spyOn(
            awssdk.CognitoIdentityServiceProvider.prototype,
            "adminCreateUser"
        );
        const appSyncMutateSpy = jest.spyOn(
            appSyncClient.default.prototype,
            "mutate"
        );
        const appSyncQuerySpy = jest.spyOn(
            appSyncClient.default.prototype,
            "query"
        );
        const mockEvent = {
            arguments: {
                name: "Another Individual",
                email: "test@test.com",
                roles: ["USER"],
                tenantId: "testTenantId",
            },
        };
        await handler(mockEvent);
        expect(cognitoSpy).toHaveBeenCalledWith({
            DesiredDeliveryMediums: ["EMAIL"],
            ForceAliasCreation: false,
            UserAttributes: [
                {
                    Name: "email",
                    Value: mockEvent.arguments.email,
                },
                {
                    Name: "email_verified",
                    Value: "true",
                },
                {
                    Name: "custom:tenantId",
                    Value: mockEvent.arguments.tenantId,
                },
            ],
            UserPoolId: "testPoolId",
            Username: expect.any(String),
        });
        const createUserInput = {
            tenantId: mockEvent.arguments.tenantId,
            active: 1,
            cognitoId: "testSubId",
            name: mockEvent.arguments.name,
            displayName: `${mockEvent.arguments.name}-2`,
            roles: ["USER"],
            contact: { emailAddress: mockEvent.arguments.email },
        };
        expect(appSyncMutateSpy).toHaveBeenCalledWith({
            mutation: createUser,
            variables: { input: createUserInput },
        });
        expect(appSyncQuerySpy).toHaveBeenCalledWith({
            query: listUsers,
            variables: { tenantId: mockEvent.arguments.tenantId },
        });
    });
});