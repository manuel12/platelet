import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from "@material-ui/core/Grid";
import {useHistory, useLocation} from "react-router-dom";
import AddressDetailsCollapsible from "../AddressDetail";
import UsersSelect from "../UsersSelect";
import ToggleTimeStamp from "../ToggleTimeStamp";
import moment from 'moment/min/moment-with-locales';
import Moment from "react-moment";
import PrioritySelect from "../PrioritySelect";
import DeliverableGridSelect from "../DeliverableGridSelect";
import DeliverableInformation from "../DeliverableInformation";
import {
    getAllTasks,
    updateTaskPickupTime,
    updateTaskPriority,
    updateTaskAssignedRider,
    updateTaskContactName,
    updateTaskContactNumber,
    updateTaskDropoffAddress,
    updateTaskDropoffTime,
    updateTaskPickupAddress, updateTaskCancelledTime
} from "../../redux/tasks/TasksActions";
import {useDispatch, useSelector} from "react-redux"
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {decodeUUID, encodeUUID} from "../../utilities";
import {createLoadingSelector, createPostingSelector} from "../../redux/selectors";
import FormSkeleton from "../../loadingComponents/FormSkeleton";
import TaskModalTimePicker from "./TaskModalTimePicker";
import TaskModalNameAndContactNumber from "./TaskModalNameAndContactNumber";
import CommentsSection from "../../containers/CommentsSection";

export default function TaskModal(props) {
    const dispatch = useDispatch();
    // Leave this here in case app.js dispatchers haven't finished before the modal is opened
    const loadingSelector = createLoadingSelector([
        "GET_TASK",
        "GET_TASKS",
        "GET_AVAILABLE_LOCATIONS",
        "GET_AVAILABLE_PRIORITIES",
        "GET_USERS",
        "GET_AVAILABLE_LOCATIONS",
        "GET_SESSION",
        "GET_WHOAMI"]);
    const isPostingPickupSelector = createPostingSelector([
        "UPDATE_TASK_PICKUP_TIME"
        ]);
    const isPostingDropoffSelector = createPostingSelector([
        "UPDATE_TASK_DROPOFF_TIME"
        ]);
    const isFetching = useSelector(state => loadingSelector(state));
    const isPostingDropoffTime = useSelector(state => isPostingDropoffSelector(state));
    const isPostingPickupTime = useSelector(state => isPostingPickupSelector(state));
    const availablePatches = useSelector(state => state.availablePatches.patches);
    const mobileView = useSelector(state => state.mobileView);
    const session = useSelector(state => state.session.session);
    const whoami = useSelector(state => state.whoami.user);
    const currentLocation = useLocation();
    let useStyles;
    // TODO: Do this properly (withStyles)
    if (!mobileView) {
        useStyles = makeStyles(({
            box: {
                border: 0,
                boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
                borderColor: "cornflowerblue",
                borderRadius: 0,
                height: "100%",
                minWidth: "400px",
                background: "rgba(235, 235, 235, 0.7)",
                padding: "20px"
            },
        }));
    } else {
        useStyles = makeStyles(({
            box: {
                border: 0,
                boxShadow: '0 3px 5px 2px rgba(100, 100, 100, .3)',
                borderColor: "cornflowerblue",
                borderRadius: 0,
                height: "100%",
                minWidth: "400px",
                maxWidth: "400px",
                background: "rgba(235, 235, 235, 0.7)",
                padding: "20px"
            },
        }));
    }
    const classes = useStyles();

    const tasks = useSelector(state => state.tasks.tasks);

    let history = useHistory();

    const taskUUID = decodeUUID(props.match.params.task_uuid_b62);

    const taskResult = tasks.filter(task => task.uuid === taskUUID);
    let newTask = {};
    if (taskResult.length === 1) {
        newTask = taskResult[0];
    }
    const task = props.task || newTask;

    const [editMode, setEditMode] = useState(false);

    function componentDidMount() {
        setEditMode(session.user_uuid === whoami.uuid || whoami.roles.includes("admin"));
        if (!tasks.length) {
            props.apiControl.tasks.getTask(taskUUID).then((data) => {
                dispatch(getAllTasks(data.session_uuid));
            });
        }
    }
    useEffect(componentDidMount, []);
    function updateEditMode() {
        setEditMode(session.user_uuid === whoami.uuid || whoami.roles.includes("admin"));
    }
    useEffect(updateEditMode, [whoami, session])

    function onSelectContactNumber(event) {
        const payload = { contact_number: event.target.value };
        dispatch(updateTaskContactNumber({taskUUID, payload}));
    }

    function onSelectName(event) {
        const payload = { contact_name: event.target.value };
        dispatch(updateTaskContactName({taskUUID, payload}));
    }

    function onSelectPickup(pickupAddress) {
        if (pickupAddress) {
            const payload = {pickup_address: pickupAddress};
            dispatch(updateTaskPickupAddress({taskUUID, payload}));
        }
    }

    function onSelectDropoff(dropoffAddress) {
        if (dropoffAddress) {
            const payload = {dropoff_address: dropoffAddress};
            dispatch(updateTaskDropoffAddress({taskUUID, payload}));
        }
    }

    function onSelectRider(rider) {
        if (rider) {
            const patchFilter = availablePatches.filter(patch => patch.id === rider.patch_id);
            const patchLabel = patchFilter.length === 1 ? patchFilter[0].label : "";
            const payload = {patch_id: rider.patch_id, patch: patchLabel, assigned_rider: rider.uuid, rider};
            dispatch(updateTaskAssignedRider({taskUUID, payload}))
        }
    }

    function onSelectPriority(priority_id, priority) {
        const payload = {priority_id, priority};
        dispatch(updateTaskPriority({ taskUUID, payload }));
    }

    function onSelectPickedUp(status) {
        const payload = {time_picked_up: status ? moment.utc().toISOString() : null};
        dispatch(updateTaskPickupTime({ taskUUID, payload }));
    }

    function onSelectDroppedOff(status) {
        const payload = {time_dropped_off: status ? moment.utc().toISOString() : null};
        dispatch(updateTaskDropoffTime({ taskUUID, payload }));
    }

    let handleClose = e => {
        e.stopPropagation();
        //TODO: might be a better way of doing this
        if (currentLocation.pathname.includes("session"))
            history.push("/session/" + encodeUUID(task.session_uuid));
        else  if (currentLocation.pathname.includes("mytasks"))
            history.push("/mytasks");
        else
            history.push("/");
    };

    let usersSelect = <></>;
    if (editMode) {
        usersSelect =
            <>
                <UsersSelect id="userSelect"
                             vehicleAssignedUsersFirst={true}
                             onSelect={onSelectRider}/>
                <DialogContentText>
                    {task.rider ? "Currently assigned to " + task.rider.display_name + "." : ""}
                </DialogContentText>
            </>;
    }
    let prioritySelect;
    if (!editMode) {
        prioritySelect = task.priority ? <>
            <DialogContentText>Priority {task.priority}</DialogContentText></> : ""

    } else {
        prioritySelect = <PrioritySelect priority={task.priority_id}
                                         onSelect={onSelectPriority}/>;
    }
    let pickupTimeNotice = <></>;
    if (task.time_picked_up) {
        pickupTimeNotice = <>Picked up at <Moment format={"llll"}>{task.time_picked_up}</Moment></>
    }
    let dropoffTimeNotice = <></>;
    if (task.time_dropped_off) {
        dropoffTimeNotice = <>Dropped off at <Moment format={"llll"}>{task.time_dropped_off}</Moment></>
    }
    let cancelledStatus = <></>
    if (task.time_cancelled) {
        cancelledStatus =
            <Box className={classes.box}>
                <DialogContentText>
                    Cancelled at <Moment format={"llll"}>{task.time_cancelled}</Moment>
                </DialogContentText>
                <ToggleTimeStamp label={"UNDO"} status={!!task.time_cancelled}
                                 onSelect={() => {
                                     const payload = {time_cancelled: null};
                                     dispatch(updateTaskCancelledTime({ taskUUID, payload }));
                                 }
                }/>
            </Box>
    }
    let rejectedStatus = <></>
    if (task.time_rejected) {
        rejectedStatus =
            <Box className={classes.box}>
                <DialogContentText>
                    Rejected at <Moment format={"llll"}>{task.time_rejected}</Moment>
                </DialogContentText>
                <ToggleTimeStamp label={"UNDO"} status={!!task.time_rejected}
                                 onSelect={() => {
                                     const payload = {time_rejected: null};
                                     dispatch(updateTaskCancelledTime({ taskUUID, payload }));
                                 }
                                 }/>
            </Box>
    }
    let deliverableSelect = <DeliverableInformation apiControl={props.apiControl} taskUUID={taskUUID}/>;
    if (editMode) {
        deliverableSelect = <><DialogContentText>
            Deliverables:
        </DialogContentText>
            <DeliverableGridSelect apiControl={props.apiControl}
                                   taskUUID={taskUUID}
                                   deliverables={task.deliverables ? task.deliverables : []}/>
        </>;
    }

    if (props.modal) {
        const modalContents = isFetching ?
            <div style={{width: "600px"}}>
                <DialogContent>
                    <FormSkeleton/>
                </DialogContent>
            </div> :

            <>
                <DialogContent>
                    <Grid container
                          spacing={3}
                          direction={"column"}
                          justify={"flex-start"}
                          alignItems={"flex-start"}>
                        <Grid item>
                            {rejectedStatus}
                        </Grid>
                        <Grid item>
                            {cancelledStatus}
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                <TaskModalNameAndContactNumber
                                    contactName={task.contact_name}
                                    contactNumber={task.contact_number}
                                    onSelectName={onSelectName}
                                    onSelectContactNumber={onSelectContactNumber}
                                />
                            </Box>
                        </Grid>

                        <Grid item>
                            <Box className={classes.box}>
                                <DialogContentText>From:</DialogContentText>
                                <AddressDetailsCollapsible label={"Pickup Address"}
                                                           onSelect={onSelectPickup}
                                                           address={task.pickup_address}
                                                           disabled={!editMode}
                                />
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                <DialogContentText>To:</DialogContentText>
                                <AddressDetailsCollapsible label={"Dropoff Address"}
                                                           onSelect={onSelectDropoff}
                                                           address={task.dropoff_address}
                                                           disabled={!editMode}/>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                <DialogContentText>Assigned rider:</DialogContentText>
                                {usersSelect}
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                {prioritySelect}
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                {deliverableSelect}
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                            <TaskModalTimePicker disabled={isPostingPickupTime} label={"Picked Up"} time={task.time_picked_up} onToggle={onSelectPickedUp} onChange={(time_picked_up) => {
                                const payload = {time_picked_up};
                                dispatch(updateTaskPickupTime({taskUUID, payload}))
                            }}/>
                                <DialogContentText>
                                    {pickupTimeNotice}
                                </DialogContentText>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box className={classes.box}>
                                <TaskModalTimePicker disabled={isPostingDropoffTime} label={"Dropped Off"} time={task.time_dropped_off} onToggle={onSelectDroppedOff} onChange={(time_dropped_off) => {
                                    const payload = {time_dropped_off};
                                    dispatch(updateTaskDropoffTime({taskUUID, payload}))
                                }}/>
                                <DialogContentText>
                                    {dropoffTimeNotice}
                                </DialogContentText>
                            </Box>
                        </Grid>
                        <Grid item>
                            <CommentsSection parentUUID={taskUUID}/>
                        </Grid>
                    </Grid>
                </DialogContent>
            </>;

        return (
            <>
                <Dialog fullScreen={mobileView} open={true} onClose={handleClose}
                        aria-labelledby="form-dialog-title">
                    <DialogActions>
                        <Button onClick={handleClose}
                                color="primary">
                            Close
                        </Button>
                    </DialogActions>
                    {modalContents}
                </Dialog>
            </>
        );
    } else {
        if (isFetching) {
            return (
                <FormSkeleton/>
            )
        }
        else {
            return (
                <div style={{
                    background: "white",
                    paddingLeft: 30,
                    paddingTop: 100,
                    paddingRight: 30,
                    paddingBottom: 100
                }}>
                    <Grid container
                          spacing={2}
                          direction={"column"}
                          justify={"flex-start"}
                          alignItems={"flex-start"}>
                        <Grid item>
                            {task.pickup_address ? "FROM: " + task.pickup_address.line1 + "." : ""}
                        </Grid>
                        <Grid item>
                            {task.dropoff_address ? "TO: " + task.dropoff_address.line1 + "." : ""}
                        </Grid>
                        <Grid item>
                            {task.rider ? "Assigned to: " + task.rider.display_name + "." : ""}
                        </Grid>
                    </Grid>
                    <Grid container
                          spacing={3}
                          direction={"column"}
                          justify={"flex-start"}
                          alignItems={"flex-start"}>
                        <Grid item>
                            <AddressDetailsCollapsible label={"Pickup Address"}
                                                       onSelect={onSelectPickup}
                                                       address={task.pickup_address}
                                                       disabled={!editMode}
                            />
                        </Grid>
                        <Grid item>
                            <AddressDetailsCollapsible label={"Dropoff Address"}
                                                       onSelect={onSelectDropoff}
                                                       address={task.dropoff_address}
                                                       disabled={!editMode}/>
                        </Grid>
                        <Grid item>
                            {usersSelect}
                        </Grid>
                        <Grid item>
                            {prioritySelect}
                        </Grid>
                        <Grid item>
                            {deliverableSelect}
                        </Grid>
                        <Grid item>
                            <ToggleTimeStamp label={"Picked Up"} status={!!task.time_picked_up}
                                             onSelect={onSelectPickedUp}/>
                            {pickupTimeNotice}
                        </Grid>
                        <Grid item>
                            <ToggleTimeStamp label={"Delivered"} status={!!task.time_dropped_off}
                                             onSelect={onSelectDroppedOff}/>
                            {dropoffTimeNotice}
                        </Grid>
                        <Grid item>
                            <CommentsSection parentUUID={taskUUID}/>
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}
