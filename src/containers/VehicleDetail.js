import React, {useEffect, useRef, useState} from 'react';
import {getVehicle, updateVehicle} from "../redux/Actions";
import {decodeUUID} from "../utilities";
import {useDispatch, useSelector} from "react-redux";
import {TextFieldControlled} from "../components/TextFieldControlled";
import {createLoadingSelector} from "../redux/selectors";
import FormSkeleton from "../loadingComponents/FormSkeleton";
import UsersSelect from "../components/UsersSelect";
import {PaddedPaper} from "../css/common";
import EditIcon from '@material-ui/icons/Edit';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";


function VehicleDetail(props) {
    const dispatch = useDispatch();
    const loadingSelector = createLoadingSelector(["GET_VEHICLE"]);
    const isFetching = useSelector(state => loadingSelector(state));
    const [editMode, setEditMode] = useState(false);
    const [assignedUserDisplayName, setAssignedUserDisplayName] = useState(undefined);
    const vehicle = useSelector(state => state.vehicle);
    const assignedUser = useSelector(state => state.vehicle.assigned_user);
    const whoami = useSelector(state => state.whoami);

    function componentDidMount() {
        dispatch(getVehicle(decodeUUID(props.match.params.vehicle_uuid_b62)));
    }

    useEffect(componentDidMount, []);

    function onAssignUser(selectedUser) {
        if (selectedUser)
            dispatch(updateVehicle({vehicleUUID: vehicle.uuid, payload: {assigned_user: selectedUser}}));
    }

    const userAssign = editMode ? <UsersSelect label={"Assign this vehicle to a user."} onSelect={onAssignUser}/> : <></>;
    let editToggle = <></>;
    if (whoami.roles.includes("admin")) {
        editToggle = editMode ?
            <IconButton
                color="inherit"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => {
                    setEditMode(!editMode);
                }}>
                <EditIcon/>
            </IconButton> :
            <IconButton
                color="gray"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => {
                    setEditMode(!editMode);
                }}>
                <EditIcon/>
            </IconButton>;
        }

    let header = assignedUserDisplayName ? <h2>{vehicle.name} assigned to {assignedUserDisplayName}.</h2> :
        <h2>{vehicle.name} assigned to nobody.</h2>;

    useEffect(() => {
        if (assignedUser)
            setAssignedUserDisplayName(assignedUser.uuid === whoami.uuid ? "you" : assignedUser.display_name)
        else
            setAssignedUserDisplayName("")
    }, [assignedUser]);

    if (isFetching) {
        return (
            <FormSkeleton/>
        )
    } else {
        return (
            <PaddedPaper>
                <Grid container direction={"row"} justify={"space-between"} alignItems={"top"} spacing={3}>
                    <Grid item>
                        {header}
                    </Grid>
                    <Grid item>
                        {editToggle}
                    </Grid>
                    <Grid item>
                        <TextFieldControlled
                            value={vehicle.name}
                            label={"Name"}
                            id={"vehicle-name"}
                            disabled={!editMode}
                            onSelect={() => {
                            }}/>
                        <TextFieldControlled
                            value={vehicle.manufacturer}
                            label={"Manufacturer"}
                            id={"vehicle-manufacturer"}
                            disabled={!editMode}
                            onSelect={() => {
                            }}/>
                        <TextFieldControlled
                            value={vehicle.model}
                            label={"Model"}
                            id={"vehicle-model"}
                            disabled={!editMode}
                            onSelect={() => {
                            }}/>
                        <TextFieldControlled
                            value={vehicle.registration_number}
                            label={"Registration"}
                            id={"vehicle-registration"}
                            disabled={!editMode}
                            onSelect={() => {
                            }}/>
                        {userAssign}
                    </Grid>
                </Grid>
            </PaddedPaper>
        )
    }


}


export default VehicleDetail