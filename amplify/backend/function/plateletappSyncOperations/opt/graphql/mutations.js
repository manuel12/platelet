"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVehicleAssignment = exports.updateVehicle = exports.updateUserRoles = exports.updateUserEmail = exports.updateUser = exports.updateTenant = exports.updateTaskAssignee = exports.updateTask = exports.updateScheduledTask = exports.updateRiderResponsibility = exports.updatePossibleRiderResponsibilities = exports.updateLocation = exports.updateDeliverableType = exports.updateDeliverable = exports.updateComment = exports.resetUserPassword = exports.registerUser = exports.registerTenant = exports.enableUser = exports.disableUser = exports.deleteVehicleAssignment = exports.deleteVehicle = exports.deleteUser = exports.deleteTenant = exports.deleteTaskAssignee = exports.deleteTask = exports.deleteScheduledTask = exports.deleteRiderResponsibility = exports.deletePossibleRiderResponsibilities = exports.deleteLocation = exports.deleteDeliverableType = exports.deleteDeliverable = exports.deleteComment = exports.createVehicleAssignment = exports.createVehicle = exports.createUser = exports.createTenant = exports.createTaskAssignee = exports.createTask = exports.createScheduledTask = exports.createRiderResponsibility = exports.createPossibleRiderResponsibilities = exports.createLocation = exports.createDeliverableType = exports.createDeliverable = exports.createComment = void 0;
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

const createTenant = /* GraphQL */`
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
      id
      name
      referenceIdentifier
      admin {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tenantAdminId
    }
  }
`;
exports.createTenant = createTenant;
const updateTenant = /* GraphQL */`
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
      id
      name
      referenceIdentifier
      admin {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tenantAdminId
    }
  }
`;
exports.updateTenant = updateTenant;
const deleteTenant = /* GraphQL */`
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
      id
      name
      referenceIdentifier
      admin {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tenantAdminId
    }
  }
`;
exports.deleteTenant = deleteTenant;
const createUser = /* GraphQL */`
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.createUser = createUser;
const updateUser = /* GraphQL */`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.updateUser = updateUser;
const deleteUser = /* GraphQL */`
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.deleteUser = deleteUser;
const createPossibleRiderResponsibilities = /* GraphQL */`
  mutation CreatePossibleRiderResponsibilities(
    $input: CreatePossibleRiderResponsibilitiesInput!
    $condition: ModelPossibleRiderResponsibilitiesConditionInput
  ) {
    createPossibleRiderResponsibilities(input: $input, condition: $condition) {
      id
      tenantId
      user {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      riderResponsibility {
        id
        tenantId
        label
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPossibleRiderResponsibilitiesId
      riderResponsibilityPossibleUsersId
    }
  }
`;
exports.createPossibleRiderResponsibilities = createPossibleRiderResponsibilities;
const updatePossibleRiderResponsibilities = /* GraphQL */`
  mutation UpdatePossibleRiderResponsibilities(
    $input: UpdatePossibleRiderResponsibilitiesInput!
    $condition: ModelPossibleRiderResponsibilitiesConditionInput
  ) {
    updatePossibleRiderResponsibilities(input: $input, condition: $condition) {
      id
      tenantId
      user {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      riderResponsibility {
        id
        tenantId
        label
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPossibleRiderResponsibilitiesId
      riderResponsibilityPossibleUsersId
    }
  }
`;
exports.updatePossibleRiderResponsibilities = updatePossibleRiderResponsibilities;
const deletePossibleRiderResponsibilities = /* GraphQL */`
  mutation DeletePossibleRiderResponsibilities(
    $input: DeletePossibleRiderResponsibilitiesInput!
    $condition: ModelPossibleRiderResponsibilitiesConditionInput
  ) {
    deletePossibleRiderResponsibilities(input: $input, condition: $condition) {
      id
      tenantId
      user {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      riderResponsibility {
        id
        tenantId
        label
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userPossibleRiderResponsibilitiesId
      riderResponsibilityPossibleUsersId
    }
  }
`;
exports.deletePossibleRiderResponsibilities = deletePossibleRiderResponsibilities;
const createVehicle = /* GraphQL */`
  mutation CreateVehicle(
    $input: CreateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    createVehicle(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignments {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedVehiclesId
    }
  }
`;
exports.createVehicle = createVehicle;
const updateVehicle = /* GraphQL */`
  mutation UpdateVehicle(
    $input: UpdateVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    updateVehicle(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignments {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedVehiclesId
    }
  }
`;
exports.updateVehicle = updateVehicle;
const deleteVehicle = /* GraphQL */`
  mutation DeleteVehicle(
    $input: DeleteVehicleInput!
    $condition: ModelVehicleConditionInput
  ) {
    deleteVehicle(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      manufacturer
      model
      dateOfManufacture
      dateOfRegistration
      assignments {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedVehiclesId
    }
  }
`;
exports.deleteVehicle = deleteVehicle;
const createVehicleAssignment = /* GraphQL */`
  mutation CreateVehicleAssignment(
    $input: CreateVehicleAssignmentInput!
    $condition: ModelVehicleAssignmentConditionInput
  ) {
    createVehicleAssignment(input: $input, condition: $condition) {
      id
      tenantId
      vehicle {
        id
        tenantId
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedVehiclesId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userVehicleAssignmentsId
      vehicleAssignmentsId
    }
  }
`;
exports.createVehicleAssignment = createVehicleAssignment;
const updateVehicleAssignment = /* GraphQL */`
  mutation UpdateVehicleAssignment(
    $input: UpdateVehicleAssignmentInput!
    $condition: ModelVehicleAssignmentConditionInput
  ) {
    updateVehicleAssignment(input: $input, condition: $condition) {
      id
      tenantId
      vehicle {
        id
        tenantId
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedVehiclesId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userVehicleAssignmentsId
      vehicleAssignmentsId
    }
  }
`;
exports.updateVehicleAssignment = updateVehicleAssignment;
const deleteVehicleAssignment = /* GraphQL */`
  mutation DeleteVehicleAssignment(
    $input: DeleteVehicleAssignmentInput!
    $condition: ModelVehicleAssignmentConditionInput
  ) {
    deleteVehicleAssignment(input: $input, condition: $condition) {
      id
      tenantId
      vehicle {
        id
        tenantId
        name
        manufacturer
        model
        dateOfManufacture
        dateOfRegistration
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedVehiclesId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userVehicleAssignmentsId
      vehicleAssignmentsId
    }
  }
`;
exports.deleteVehicleAssignment = deleteVehicleAssignment;
const createLocation = /* GraphQL */`
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      listed
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      what3words
      tasksAsPickUp {
        nextToken
        startedAt
      }
      tasksAsDropOff {
        nextToken
        startedAt
      }
      taskAsEstablishment {
        nextToken
        startedAt
      }
      scheduledTasksAsPickUp {
        nextToken
        startedAt
      }
      scheduledTasksAsDropOff {
        nextToken
        startedAt
      }
      scheduledTasksAsEstablishment {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      googleMapsPlaceId
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedLocationsId
    }
  }
`;
exports.createLocation = createLocation;
const updateLocation = /* GraphQL */`
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      listed
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      what3words
      tasksAsPickUp {
        nextToken
        startedAt
      }
      tasksAsDropOff {
        nextToken
        startedAt
      }
      taskAsEstablishment {
        nextToken
        startedAt
      }
      scheduledTasksAsPickUp {
        nextToken
        startedAt
      }
      scheduledTasksAsDropOff {
        nextToken
        startedAt
      }
      scheduledTasksAsEstablishment {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      googleMapsPlaceId
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedLocationsId
    }
  }
`;
exports.updateLocation = updateLocation;
const deleteLocation = /* GraphQL */`
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      name
      listed
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      ward
      line1
      line2
      line3
      town
      county
      state
      country
      postcode
      what3words
      tasksAsPickUp {
        nextToken
        startedAt
      }
      tasksAsDropOff {
        nextToken
        startedAt
      }
      taskAsEstablishment {
        nextToken
        startedAt
      }
      scheduledTasksAsPickUp {
        nextToken
        startedAt
      }
      scheduledTasksAsDropOff {
        nextToken
        startedAt
      }
      scheduledTasksAsEstablishment {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      disabled
      googleMapsPlaceId
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedLocationsId
    }
  }
`;
exports.deleteLocation = deleteLocation;
const createTask = /* GraphQL */`
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      tenantId
      createdAt
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      dateCreated
      timeOfCall
      timePickedUp
      timePickedUpSenderName
      timeDroppedOff
      timeDroppedOffRecipientName
      timeCancelled
      timeRejected
      timeRiderHome
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      riderResponsibility
      assignees {
        nextToken
        startedAt
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      status
      isRiderUsingOwnVehicle
      archived
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedTasksId
    }
  }
`;
exports.createTask = createTask;
const updateTask = /* GraphQL */`
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      tenantId
      createdAt
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      dateCreated
      timeOfCall
      timePickedUp
      timePickedUpSenderName
      timeDroppedOff
      timeDroppedOffRecipientName
      timeCancelled
      timeRejected
      timeRiderHome
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      riderResponsibility
      assignees {
        nextToken
        startedAt
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      status
      isRiderUsingOwnVehicle
      archived
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedTasksId
    }
  }
`;
exports.updateTask = updateTask;
const deleteTask = /* GraphQL */`
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      tenantId
      createdAt
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      dateCreated
      timeOfCall
      timePickedUp
      timePickedUpSenderName
      timeDroppedOff
      timeDroppedOffRecipientName
      timeCancelled
      timeRejected
      timeRiderHome
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      riderResponsibility
      assignees {
        nextToken
        startedAt
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      comments {
        nextToken
        startedAt
      }
      status
      isRiderUsingOwnVehicle
      archived
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedTasksId
    }
  }
`;
exports.deleteTask = deleteTask;
const createTaskAssignee = /* GraphQL */`
  mutation CreateTaskAssignee(
    $input: CreateTaskAssigneeInput!
    $condition: ModelTaskAssigneeConditionInput
  ) {
    createTaskAssignee(input: $input, condition: $condition) {
      id
      tenantId
      role
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAssignmentsId
      taskAssigneesId
    }
  }
`;
exports.createTaskAssignee = createTaskAssignee;
const updateTaskAssignee = /* GraphQL */`
  mutation UpdateTaskAssignee(
    $input: UpdateTaskAssigneeInput!
    $condition: ModelTaskAssigneeConditionInput
  ) {
    updateTaskAssignee(input: $input, condition: $condition) {
      id
      tenantId
      role
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAssignmentsId
      taskAssigneesId
    }
  }
`;
exports.updateTaskAssignee = updateTaskAssignee;
const deleteTaskAssignee = /* GraphQL */`
  mutation DeleteTaskAssignee(
    $input: DeleteTaskAssigneeInput!
    $condition: ModelTaskAssigneeConditionInput
  ) {
    deleteTaskAssignee(input: $input, condition: $condition) {
      id
      tenantId
      role
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      assignee {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userAssignmentsId
      taskAssigneesId
    }
  }
`;
exports.deleteTaskAssignee = deleteTaskAssignee;
const createScheduledTask = /* GraphQL */`
  mutation CreateScheduledTask(
    $input: CreateScheduledTaskInput!
    $condition: ModelScheduledTaskConditionInput
  ) {
    createScheduledTask(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      cronExpression
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedScheduledTasksId
    }
  }
`;
exports.createScheduledTask = createScheduledTask;
const updateScheduledTask = /* GraphQL */`
  mutation UpdateScheduledTask(
    $input: UpdateScheduledTaskInput!
    $condition: ModelScheduledTaskConditionInput
  ) {
    updateScheduledTask(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      cronExpression
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedScheduledTasksId
    }
  }
`;
exports.updateScheduledTask = updateScheduledTask;
const deleteScheduledTask = /* GraphQL */`
  mutation DeleteScheduledTask(
    $input: DeleteScheduledTaskInput!
    $condition: ModelScheduledTaskConditionInput
  ) {
    deleteScheduledTask(input: $input, condition: $condition) {
      id
      tenantId
      createdBy {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      requesterContact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      cronExpression
      pickUpLocationId
      dropOffLocationId
      establishmentLocationId
      pickUpLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      dropOffLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      establishmentLocation {
        id
        tenantId
        name
        listed
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
        disabled
        googleMapsPlaceId
        archived
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedLocationsId
      }
      priority
      deliverables {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCreatedScheduledTasksId
    }
  }
`;
exports.deleteScheduledTask = deleteScheduledTask;
const createComment = /* GraphQL */`
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      parentId
      owner
      tenantId
      body
      author {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      visibility
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
    }
  }
`;
exports.createComment = createComment;
const updateComment = /* GraphQL */`
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      parentId
      owner
      tenantId
      body
      author {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      visibility
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
    }
  }
`;
exports.updateComment = updateComment;
const deleteComment = /* GraphQL */`
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      parentId
      owner
      tenantId
      body
      author {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      visibility
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userCommentsId
    }
  }
`;
exports.deleteComment = deleteComment;
const createDeliverableType = /* GraphQL */`
  mutation CreateDeliverableType(
    $input: CreateDeliverableTypeInput!
    $condition: ModelDeliverableTypeConditionInput
  ) {
    createDeliverableType(input: $input, condition: $condition) {
      id
      label
      tenantId
      icon
      defaultUnit
      deliverables {
        nextToken
        startedAt
      }
      tags
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.createDeliverableType = createDeliverableType;
const updateDeliverableType = /* GraphQL */`
  mutation UpdateDeliverableType(
    $input: UpdateDeliverableTypeInput!
    $condition: ModelDeliverableTypeConditionInput
  ) {
    updateDeliverableType(input: $input, condition: $condition) {
      id
      label
      tenantId
      icon
      defaultUnit
      deliverables {
        nextToken
        startedAt
      }
      tags
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.updateDeliverableType = updateDeliverableType;
const deleteDeliverableType = /* GraphQL */`
  mutation DeleteDeliverableType(
    $input: DeleteDeliverableTypeInput!
    $condition: ModelDeliverableTypeConditionInput
  ) {
    deleteDeliverableType(input: $input, condition: $condition) {
      id
      label
      tenantId
      icon
      defaultUnit
      deliverables {
        nextToken
        startedAt
      }
      tags
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.deleteDeliverableType = deleteDeliverableType;
const createDeliverable = /* GraphQL */`
  mutation CreateDeliverable(
    $input: CreateDeliverableInput!
    $condition: ModelDeliverableConditionInput
  ) {
    createDeliverable(input: $input, condition: $condition) {
      id
      tenantId
      deliverableType {
        id
        label
        tenantId
        icon
        defaultUnit
        tags
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      scheduledTask {
        id
        tenantId
        cronExpression
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        priority
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedScheduledTasksId
      }
      count
      unit
      orderInGrid
      comments {
        nextToken
        startedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDeliverablesId
      scheduledTaskDeliverablesId
      deliverableTypeDeliverablesId
    }
  }
`;
exports.createDeliverable = createDeliverable;
const updateDeliverable = /* GraphQL */`
  mutation UpdateDeliverable(
    $input: UpdateDeliverableInput!
    $condition: ModelDeliverableConditionInput
  ) {
    updateDeliverable(input: $input, condition: $condition) {
      id
      tenantId
      deliverableType {
        id
        label
        tenantId
        icon
        defaultUnit
        tags
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      scheduledTask {
        id
        tenantId
        cronExpression
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        priority
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedScheduledTasksId
      }
      count
      unit
      orderInGrid
      comments {
        nextToken
        startedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDeliverablesId
      scheduledTaskDeliverablesId
      deliverableTypeDeliverablesId
    }
  }
`;
exports.updateDeliverable = updateDeliverable;
const deleteDeliverable = /* GraphQL */`
  mutation DeleteDeliverable(
    $input: DeleteDeliverableInput!
    $condition: ModelDeliverableConditionInput
  ) {
    deleteDeliverable(input: $input, condition: $condition) {
      id
      tenantId
      deliverableType {
        id
        label
        tenantId
        icon
        defaultUnit
        tags
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      task {
        id
        tenantId
        createdAt
        dateCreated
        timeOfCall
        timePickedUp
        timePickedUpSenderName
        timeDroppedOff
        timeDroppedOffRecipientName
        timeCancelled
        timeRejected
        timeRiderHome
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        riderResponsibility
        priority
        status
        isRiderUsingOwnVehicle
        archived
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedTasksId
      }
      scheduledTask {
        id
        tenantId
        cronExpression
        pickUpLocationId
        dropOffLocationId
        establishmentLocationId
        priority
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userCreatedScheduledTasksId
      }
      count
      unit
      orderInGrid
      comments {
        nextToken
        startedAt
      }
      archived
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      taskDeliverablesId
      scheduledTaskDeliverablesId
      deliverableTypeDeliverablesId
    }
  }
`;
exports.deleteDeliverable = deleteDeliverable;
const createRiderResponsibility = /* GraphQL */`
  mutation CreateRiderResponsibility(
    $input: CreateRiderResponsibilityInput!
    $condition: ModelRiderResponsibilityConditionInput
  ) {
    createRiderResponsibility(input: $input, condition: $condition) {
      id
      tenantId
      label
      disabled
      possibleUsers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.createRiderResponsibility = createRiderResponsibility;
const updateRiderResponsibility = /* GraphQL */`
  mutation UpdateRiderResponsibility(
    $input: UpdateRiderResponsibilityInput!
    $condition: ModelRiderResponsibilityConditionInput
  ) {
    updateRiderResponsibility(input: $input, condition: $condition) {
      id
      tenantId
      label
      disabled
      possibleUsers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.updateRiderResponsibility = updateRiderResponsibility;
const deleteRiderResponsibility = /* GraphQL */`
  mutation DeleteRiderResponsibility(
    $input: DeleteRiderResponsibilityInput!
    $condition: ModelRiderResponsibilityConditionInput
  ) {
    deleteRiderResponsibility(input: $input, condition: $condition) {
      id
      tenantId
      label
      disabled
      possibleUsers {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.deleteRiderResponsibility = deleteRiderResponsibility;
const registerUser = /* GraphQL */`
  mutation RegisterUser(
    $name: String
    $email: String
    $tenantId: ID
    $roles: [Role]
  ) {
    registerUser(
      name: $name
      email: $email
      tenantId: $tenantId
      roles: $roles
    ) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.registerUser = registerUser;
const registerTenant = /* GraphQL */`
  mutation RegisterTenant(
    $name: String
    $emailAddress: String
    $tenantName: String
  ) {
    registerTenant(
      name: $name
      emailAddress: $emailAddress
      tenantName: $tenantName
    ) {
      id
      name
      referenceIdentifier
      admin {
        id
        username
        cognitoId
        tenantId
        isPrimaryAdmin
        displayName
        name
        roles
        dateOfBirth
        riderResponsibility
        disabled
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      tenantAdminId
    }
  }
`;
exports.registerTenant = registerTenant;
const updateUserRoles = /* GraphQL */`
  mutation UpdateUserRoles($userId: ID, $roles: [Role]) {
    updateUserRoles(userId: $userId, roles: $roles) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.updateUserRoles = updateUserRoles;
const disableUser = /* GraphQL */`
  mutation DisableUser($userId: ID) {
    disableUser(userId: $userId) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.disableUser = disableUser;
const enableUser = /* GraphQL */`
  mutation EnableUser($userId: ID) {
    enableUser(userId: $userId) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.enableUser = enableUser;
const updateUserEmail = /* GraphQL */`
  mutation UpdateUserEmail($userId: ID, $emailAddress: AWSEmail) {
    updateUserEmail(userId: $userId, emailAddress: $emailAddress) {
      id
      username
      cognitoId
      tenantId
      isPrimaryAdmin
      contact {
        name
        telephoneNumber
        mobileNumber
        emailAddress
        ward
        line1
        line2
        line3
        town
        county
        state
        country
        postcode
        what3words
      }
      displayName
      name
      roles
      dateOfBirth
      riderResponsibility
      possibleRiderResponsibilities {
        nextToken
        startedAt
      }
      profilePicture {
        bucket
        key
        region
      }
      comments {
        nextToken
        startedAt
      }
      assignments {
        nextToken
        startedAt
      }
      vehicleAssignments {
        nextToken
        startedAt
      }
      createdTasks {
        nextToken
        startedAt
      }
      createdLocations {
        nextToken
        startedAt
      }
      createdVehicles {
        nextToken
        startedAt
      }
      createdScheduledTasks {
        nextToken
        startedAt
      }
      disabled
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.updateUserEmail = updateUserEmail;
const resetUserPassword = /* GraphQL */`
  mutation ResetUserPassword($userId: ID) {
    resetUserPassword(userId: $userId) {
      successState
    }
  }
`;
exports.resetUserPassword = resetUserPassword;