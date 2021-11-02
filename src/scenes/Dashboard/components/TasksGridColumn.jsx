import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import Grid from "@mui/material/Grid";
import TaskItem from "./TaskItem";
import {
    createNotFoundSelector,
    createSimpleLoadingSelector,
} from "../../../redux/LoadingSelectors";
import { useDispatch, useSelector } from "react-redux";
import { TasksKanbanColumn } from "../styles/TaskColumns";
import Button from "@mui/material/Button";
import { Waypoint } from "react-waypoint";
import Tooltip from "@mui/material/Tooltip";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { CircularProgress, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import PropTypes from "prop-types";
import { showHide } from "../../../styles/common";
import {
    appendTasksCancelledRequest,
    appendTasksDeliveredRequest,
    appendTasksRejectedRequest,
} from "../../../redux/tasks/TasksWaypointActions";
import { clearDashboardFilter } from "../../../redux/dashboardFilter/DashboardFilterActions";
import clsx from "clsx";
import makeStyles from "@mui/styles/makeStyles";
import { getWhoami } from "../../../redux/Selectors";
import { sortByCreatedTime } from "../../../utilities";

const loaderStyles = makeStyles((theme) => ({
    linear: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
    circular: {
        display: "flex",
        "& > * + *": {
            marginLeft: theme.spacing(2),
        },
    },
}));

const useStyles = makeStyles((theme) => ({
    header: {
        fontWeight: "bold",
        padding: "6px",
    },
    divider: {
        width: "95%",
    },
    spacer: {
        height: 35,
    },
    taskItem: {
        width: "100%",
    },
    gridItem: {
        width: "100%",
    },
}));

function TasksGridColumn(props) {
    const classes = useStyles();
    const [state, setState] = useState([]);
    const loaderClass = loaderStyles();
    const { show, hide } = showHide();
    const dispatch = useDispatch();
    //const tasks = useSelector(getTasksSelector)[props.taskKey];
    const whoami = useSelector(getWhoami);
    let selectorsString = "";
    if (props.taskKey === "tasksDroppedOff")
        selectorsString = "APPEND_TASKS_DELIVERED";
    else if (props.taskKey === "tasksCancelled")
        selectorsString = "APPEND_TASKS_CANCELLED";
    else if (props.taskKey === "tasksRejected")
        selectorsString = "APPEND_TASKS_REJECTED";
    const notFoundSelector = createNotFoundSelector([selectorsString]);
    const endlessLoadEnd = useSelector((state) => notFoundSelector(state));
    const isFetchingSelector = createSimpleLoadingSelector([selectorsString]);
    const endlessLoadIsFetching = useSelector((state) =>
        isFetchingSelector(state)
    );
    const roleView = useSelector((state) => state.roleView);

    function updateStateFromTaskProp() {
        const listReversed = Object.values(props.tasks).reverse();
        const listSorted = sortByCreatedTime(listReversed, "newest");
        setState(listSorted);
    }
    useEffect(updateStateFromTaskProp, [props.tasks]);

    const dispatchAppendFunctions = {
        tasksCancelled:
            endlessLoadEnd || endlessLoadIsFetching
                ? () => ({ type: "IGNORE" })
                : appendTasksCancelledRequest,
        tasksDroppedOff:
            endlessLoadEnd || endlessLoadIsFetching
                ? () => ({ type: "IGNORE" })
                : appendTasksDeliveredRequest,
        tasksRejected:
            endlessLoadEnd || endlessLoadIsFetching
                ? () => ({ type: "IGNORE" })
                : appendTasksRejectedRequest,
    };
    let appendFunction = () => {};
    appendFunction = dispatchAppendFunctions[props.taskKey];

    const header = (
        <Typography className={classes.header}>{props.title}</Typography>
    );

    const animate = useRef(false);
    useEffect(() => {
        if (state.length === 0) {
            setTimeout(() => (animate.current = true), 1000);
            return;
        }
        animate.current = true;
    }, [state]);

    return (
        <TasksKanbanColumn>
            {header}
            <Divider className={classes.divider} />
            <Stack
                direction={"column"}
                spacing={4}
                alignItems={"center"}
                justifyContent={"flex-start"}
            >
                {state.map((task) => {
                    return (
                        <div
                            className={clsx(
                                classes.taskItem,
                                props.showTasks === null ||
                                    props.showTasks.includes(task.id)
                                    ? show
                                    : hide
                            )}
                            key={task.id}
                        >
                            <TaskItem
                                animate={animate.current}
                                task={task}
                                taskUUID={task.id}
                                view={props.modalView}
                                deleteDisabled={props.deleteDisabled}
                            />
                            <div
                                className={
                                    !!task.relayNext &&
                                    props.showTasks === null &&
                                    !props.hideRelayIcons &&
                                    roleView !== "rider"
                                        ? show
                                        : hide
                                }
                            >
                                <Tooltip title="Relay">
                                    <ArrowDownwardIcon
                                        style={{
                                            height: "35px",
                                        }}
                                    />
                                </Tooltip>
                            </div>
                        </div>
                    );
                })}
            </Stack>
            {["tasksDroppedOff", "tasksRejected", "tasksCancelled"].includes(
                props.taskKey
            ) ? (
                <React.Fragment>
                    <Waypoint
                        onEnter={() => {
                            if (props.showTasks) return;
                            if (false) {
                                dispatch(
                                    appendFunction(
                                        whoami.id,
                                        1,
                                        roleView,
                                        props.taskKey,
                                        null
                                    )
                                );
                            }
                        }}
                    />
                    {endlessLoadIsFetching ? (
                        <div className={loaderClass.root}>
                            <CircularProgress color="secondary" />
                        </div>
                    ) : (
                        <></>
                    )}
                </React.Fragment>
            ) : (
                <></>
            )}
        </TasksKanbanColumn>
    );
}

TasksGridColumn.propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object,
    onAddTaskClick: PropTypes.func,
    onAddRelayClick: PropTypes.bool,
    disableAddButton: PropTypes.bool,
    taskKey: PropTypes.string,
    showTasks: PropTypes.arrayOf(PropTypes.string),
    tasks: PropTypes.array,
};

TasksGridColumn.defaultProps = {
    tasks: [],
};

export default TasksGridColumn;