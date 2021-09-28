import { DataStore } from "@aws-amplify/datastore";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TextFieldUncontrolled } from "../../../components/TextFields";
import {
    displayErrorNotification,
    displayInfoNotification,
} from "../../../redux/notifications/NotificationsActions";
import { PaddedPaper } from "../../../styles/common";
import { encodeUUID } from "../../../utilities";
import * as models from "../../../models/index";

const initialLocationState = {
    name: null,
    contact: null,
    telephoneNumber: null,
    emailAddress: null,
    ward: null,
    line1: null,
    line2: null,
    line3: null,
    town: null,
    county: null,
    country: null,
    state: null,
    postcode: null,
    what3words: null,
};

const useStyles = makeStyles({
    root: {
        width: "100%",
        maxWidth: 460,
    },
    message: {
        height: 80,
    },
});

const fields = {
    name: "Name",
    ward: "Ward",
    line1: "Line 1",
    line2: "Line 2",
    line3: "Line 3",
    town: "Town",
    county: "County",
    country: "Country",
    state: "State",
    postcode: "Postcode",
    what3words: "What 3 Words",
    contact: "Contact name",
    emailAddress: "Contact email",
    telephoneNumber: "Contact telephone",
};

function AdminAddLocation() {
    const [state, setState] = useState(initialLocationState);
    const [isPosting, setIsPosting] = useState(false);
    const [inputVerified, setInputVerified] = useState(false);
    const dispatch = useDispatch();
    const classes = useStyles();

    function verifyInput() {
        setInputVerified(!!state.name);
    }
    useEffect(verifyInput, [state]);

    async function addNewVehicle() {
        try {
            setIsPosting(true);
            const newLocation = await DataStore.save(
                new models.Location(state)
            );
            setState(initialLocationState);
            setIsPosting(false);
            dispatch(
                displayInfoNotification(
                    "Location added",
                    undefined,
                    `/location/${encodeUUID(newLocation.id)}`
                )
            );
        } catch (error) {
            console.log("error adding location:", error);
            setIsPosting(false);
            dispatch(displayErrorNotification(error.message));
        }
    }

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
                    <Typography variant={"h5"}>Add a new location</Typography>
                </Grid>
                {Object.keys(fields).map((key) => {
                    return (
                        <Grid key={key} item>
                            <TextFieldUncontrolled
                                value={state[key]}
                                fullWidth
                                label={fields[key]}
                                id={key}
                                onChange={(e) => {
                                    setState({
                                        ...state,
                                        [key]: e.target.value,
                                    });
                                }}
                            />
                        </Grid>
                    );
                })}
                <Grid item>
                    <Button
                        disabled={!inputVerified || isPosting}
                        onClick={addNewVehicle}
                    >
                        Add location
                    </Button>
                </Grid>
            </Grid>
        </PaddedPaper>
    );
}

export default AdminAddLocation;
