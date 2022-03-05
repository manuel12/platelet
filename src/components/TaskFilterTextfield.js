import { TextFieldControlled } from "./TextFields";
import {
    clearDashboardFilter,
    debounceDashboardFilter,
} from "../redux/dashboardFilter/DashboardFilterActions";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import makeStyles from "@mui/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => {
    return {
        root: {
            [theme.breakpoints.down("md")]: {
                width: "100%",
            },
        },
        searchIcon: {
            [theme.breakpoints.down("md")]: {
                display: "none",
            },
        },
    };
});

function TaskFilterTextField(props) {
    const dispatch = useDispatch();
    const dashboardFilterValue = useSelector((state) => state.dashboardFilter);
    const classes = useStyles();

    function onChangeFilterText(e) {
        dispatch(debounceDashboardFilter(e.target.value));
    }

    return (
        <div className={props.className}>
            <TextFieldControlled
                id="tasks-filter-input"
                variant={"standard"}
                placeholder={"Filter tasks"}
                value={dashboardFilterValue}
                onChange={onChangeFilterText}
                onPressEscape={() => dispatch(clearDashboardFilter())}
                color={"secondary"}
                className={classes.root}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon className={classes.searchIcon} />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
}

TaskFilterTextField.propTypes = {
    className: PropTypes.string,
};

export default TaskFilterTextField;
