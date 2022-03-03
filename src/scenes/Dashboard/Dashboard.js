import React, { useEffect, useState } from "react";
import "../../App.css";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import {
    setDashboardFilteredUser,
    setGuidedSetupOpen,
    setRoleView,
} from "../../redux/Actions";
import TasksGrid from "./components/TasksGrid";
import { useDispatch, useSelector } from "react-redux";
import { DashboardDetailTabs } from "./components/DashboardDetailTabs";
import { getDashboardRoleMode, saveDashboardRoleMode } from "../../utilities";
import {
    dashboardFilteredUserSelector,
    dashboardTabIndexSelector,
    dataStoreReadyStatusSelector,
    getRoleView,
    getWhoami,
} from "../../redux/Selectors";
import { tasksStatus, userRoles } from "../../apiConsts";
import { clearDashboardFilter } from "../../redux/dashboardFilter/DashboardFilterActions";
import { Fab, Hidden } from "@mui/material";
import ActiveRidersChips from "./components/ActiveRidersChips";
import GuidedSetupDrawer from "./components/GuidedSetupDrawer";

function AddClearFab() {
    const dispatch = useDispatch();
    const dashboardFilteredUser = useSelector(dashboardFilteredUserSelector);
    const dashboardFilter = useSelector((state) => state.dashboardFilter);
    const dataStoreReadyStatus = useSelector(dataStoreReadyStatusSelector);
    const addClearFab =
        !dashboardFilter && !dashboardFilteredUser ? (
            <Fab
                sx={{ position: "fixed", zIndex: 100, bottom: 30, right: 30 }}
                variant="contained"
                disabled={!dataStoreReadyStatus}
                color="primary"
                onClick={async () => {
                    dispatch(setGuidedSetupOpen(true));
                }}
            >
                <AddIcon />
            </Fab>
        ) : (
            <Fab
                sx={{ position: "fixed", zIndex: 100, bottom: 30, right: 30 }}
                color="primary"
                variant="extended"
                onClick={() => {
                    dispatch(clearDashboardFilter());
                    dispatch(setDashboardFilteredUser(null));
                }}
            >
                Clear Search
            </Fab>
        );
    return addClearFab;
}

function Dashboard() {
    const dispatch = useDispatch();
    const whoami = useSelector(getWhoami);
    const [postPermission, setPostPermission] = useState(true);
    const roleView = useSelector(getRoleView);
    const dashboardTabIndex = useSelector(dashboardTabIndexSelector);

    function setInitialRoleView() {
        if (whoami.id) {
            const savedRoleMode = getDashboardRoleMode();
            if (
                whoami.roles.includes(savedRoleMode) ||
                (savedRoleMode === "ALL" &&
                    whoami.roles.includes(userRoles.coordinator))
            ) {
                dispatch(setRoleView(savedRoleMode));
            } else if (whoami.roles.includes(userRoles.coordinator)) {
                dispatch(setRoleView(userRoles.coordinator));
                saveDashboardRoleMode(userRoles.coordinator);
            } else if (whoami.roles.includes(userRoles.rider)) {
                dispatch(setRoleView(userRoles.rider));
                dispatch(setDashboardFilteredUser(null));
                saveDashboardRoleMode(userRoles.rider);
            }
        }
    }
    useEffect(setInitialRoleView, [whoami]);

    return (
        <>
            <Paper sx={{ maxWidth: 1480 }}>
                <Hidden mdUp>
                    <DashboardDetailTabs />
                </Hidden>
                {[userRoles.coordinator, "ALL"].includes(roleView) && (
                    <ActiveRidersChips />
                )}
                <TasksGrid
                    modalView={"edit"}
                    hideRelayIcons={roleView === userRoles.rider}
                    hideAddButton={!postPermission}
                    excludeColumnList={
                        dashboardTabIndex === 1
                            ? [
                                  tasksStatus.new,
                                  tasksStatus.active,
                                  tasksStatus.pickedUp,
                                  tasksStatus.droppedOff,
                              ]
                            : [
                                  roleView === userRoles.rider
                                      ? tasksStatus.new
                                      : "",
                                  tasksStatus.completed,
                                  tasksStatus.cancelled,
                                  tasksStatus.abandoned,
                                  tasksStatus.rejected,
                              ]
                    }
                />
            </Paper>
            <Hidden smUp>
                {roleView && roleView === userRoles.rider ? (
                    <></>
                ) : (
                    <AddClearFab />
                )}
            </Hidden>
            <GuidedSetupDrawer />
        </>
    );
}

export default Dashboard;
