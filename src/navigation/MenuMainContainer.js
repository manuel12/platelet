import React, {useState} from 'react';
import 'typeface-roboto'
import {Link, useHistory} from "react-router-dom";
import '../index.css'
import {makeStyles} from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import MainWindow from "./MainWindow";
import {createLoadingSelector} from "../redux/selectors";
import {useDispatch, useSelector} from "react-redux";
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {encodeUUID} from "../utilities";
import {logoutUser} from "../redux/login/LoginActions";
import UserAvatar from "../components/UserAvatar";
import {setDarkMode} from "../redux/Actions";
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import {Hidden, TextField, Tooltip} from "@material-ui/core";
import MobileNavigationDrawer from "./MobileNavigationDrawer";
import TaskFilterTextField from "../components/TaskFilterTextfield";
import ExpandableTaskFilter from "./Components/ExpandableTaskFilter";
import NavMenuSearch from "./Components/NavMenuSearch";
import LightToggleProfileMenu from "./Components/LightToggleProfileMenu";
import SearchIcon from "@material-ui/icons/Search";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {showHide} from "../styles/common";
import {clearDashboardFilter} from "../redux/dashboardFilter/DashboardFilterActions";

const useStyles = makeStyles(theme => {
    const appBarBack = theme.palette.type === "dark" ? theme.palette.background.paper : theme.palette.primary.main;
    return ({
        appBarComponents: {
            margin: "auto",
            width: "100%",
            maxWidth: "1280px"
        },
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: "100%",
            },
            background: appBarBack
        },
    })
})

export function MenuMainContainer() {
    const classes = useStyles();
    const [searchMode, setSearchMode] = useState(false);
    const navMenuSearch = searchMode ? <></> : <NavMenuSearch/>;
    const lightToggleProfileMenu = searchMode ? <></> : <LightToggleProfileMenu/>;
    const toggleIcon = searchMode ? <ArrowBackIcon/> : <SearchIcon/>;
    const dispatch = useDispatch();

    const toggleSearchMode = () => {
        if (searchMode)
            dispatch(clearDashboardFilter())
        setSearchMode(!searchMode);
    }

    return (
        <React.Fragment>
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar className={classes.appBarComponents}>
                    <Grid container justify={"space-between"}>
                        <Grid item>
                            {navMenuSearch}
                        </Grid>
                        <Grid item>
                            <Hidden mdUp>
                                <Grid container item alignItems={"center"} direction={"row"}>
                                    <Grid item>
                                <IconButton onClick={toggleSearchMode}>
                                    {toggleIcon}
                                </IconButton>
                                    </Grid>
                                    <Grid item>
                                {searchMode ? <TaskFilterTextField/> : <></>}
                                    </Grid>
                                </Grid>
                            </Hidden>
                        </Grid>
                        <Grid item>
                            {lightToggleProfileMenu}
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <MainWindow/>
        </React.Fragment>
    );
}
