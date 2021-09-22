import React, { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import {
    Grid,
    Button,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { DataStore } from "aws-amplify";
import * as models from "../../../models/index";
import {
    TextFieldUncontrolled,
    TextFieldControlled,
} from "../../../components/TextFields";
import { PaddedPaper, showHide } from "../../../styles/common";
import { useDispatch } from "react-redux";
import {
    displayErrorNotification,
    displayInfoNotification,
} from "../../../redux/notifications/NotificationsActions";

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 460,
    },
    message: {
        height: 80,
    },
});
const initialState = {
    username: "",
    password: "",
    passwordCheck: "",
    attributes: { name: "", email: "" },
};

function AdminAddUser() {
    const [state, setState] = useState(initialState);
    //TODO: eventually want to make signup only with email address unless chosen otherwise
    const [usernameMode, setUsernameMode] = useState(true);
    const [passwordVerified, setPasswordVerified] = useState(true);
    const [inputVerified, setInputVerified] = useState(false);
    const [isPosting, setIsPosting] = useState(false);
    const [message, setMessage] = useState("");
    const dispatch = useDispatch();
    const classes = useStyles();

    function verifyInput() {
        setInputVerified(
            state.username &&
                state.password &&
                state.attributes.name &&
                state.attributes.email &&
                passwordVerified
        );
    }
    useEffect(verifyInput, [state, passwordVerified]);

    function verifyPassword() {
        setPasswordVerified(state.password === state.passwordCheck);
    }

    useEffect(verifyPassword, [state.passwordCheck, state.password]);
    useEffect(() => {
        if (message) setMessage("");
    }, [state]);
    async function signUp() {
        try {
            setIsPosting(true);
            const { userSub } = await Auth.signUp({
                ...state,
            });
            debugger;
            //TODO: remove this after DataStore sync is fixed up because we want the user to only be syncd after postconfirmation trigger
            DataStore.save(
                new models.User({
                    name: state.attributes.name,
                    id: userSub,
                    displayName: state.attributes.name,
                    active: 1,
                    username: state.username,
                    emailAddress: state.attributes.email,
                })
            );
            setState(initialState);
            setIsPosting(false);
            setMessage(
                "User was signed up. They will be made available after email confirmation."
            );
        } catch (error) {
            console.log("error signing up:", error);
            setIsPosting(false);
            dispatch(displayErrorNotification(error.message));
        }
    }
    const { show, hide } = showHide();
    return (
        <PaddedPaper>
            <Grid
                container
                className={classes.root}
                direction={"column"}
                justify={"flex-start"}
                alignItems={"top"}
                spacing={3}
            >
                <Grid item>
                    <Typography variant={"h5"}>Add a new user</Typography>
                </Grid>
                <Grid item>
                    <TextFieldUncontrolled
                        className={usernameMode ? show : hide}
                        value={state.username}
                        fullWidth
                        label={"Username"}
                        id={"username"}
                        onChange={(e) => {
                            setState({ ...state, username: e.target.value });
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextFieldUncontrolled
                        fullWidth
                        label={"Email address"}
                        id={"email"}
                        onChange={(e) =>
                            setState({
                                ...state,
                                username: usernameMode
                                    ? state.username
                                    : e.target.value,
                                attributes: {
                                    ...state.attributes,
                                    email: e.target.value,
                                },
                            })
                        }
                        value={state.attributes.email}
                    />
                </Grid>
                <Grid item>
                    <TextFieldUncontrolled
                        fullWidth
                        label={"Name"}
                        id={"name"}
                        onChange={(e) =>
                            setState({
                                ...state,
                                attributes: {
                                    ...state.attributes,
                                    name: e.target.value,
                                },
                            })
                        }
                        value={state.attributes.name}
                    />
                </Grid>
                <Grid item>
                    <TextFieldUncontrolled
                        value={state.password}
                        inputProps={{
                            type: "password",
                        }}
                        fullWidth
                        label={"Password"}
                        id={"password"}
                        autoComplete="new-password"
                        onChange={(e) => {
                            setState({ ...state, password: e.target.value });
                        }}
                    />
                </Grid>
                <Grid item>
                    <TextField
                        margin="dense"
                        id={"password-confirm"}
                        error={!passwordVerified}
                        helperText={
                            !passwordVerified ? "Passwords do not match" : ""
                        }
                        label={"Password confirm"}
                        value={state.passwordCheck}
                        inputProps={{
                            type: "password",
                        }}
                        fullWidth
                        autoComplete="new-password"
                        onChange={(e) => {
                            setState({
                                ...state,
                                passwordCheck: e.target.value,
                            });
                        }}
                    />
                </Grid>
                <Grid item>
                    <Button
                        disabled={!inputVerified || isPosting}
                        onClick={signUp}
                    >
                        Add user
                    </Button>
                </Grid>
                <Grid className={classes.message} item>
                    <Typography>{message}</Typography>
                </Grid>
            </Grid>
        </PaddedPaper>
    );
}

export default AdminAddUser;
