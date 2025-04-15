import React from "react";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

export function MainNavigation() {
    const navigate = useNavigate();
    const location = useLocation();

    const tabNameToIndex: Record<string, number> = {
        '/': 0,
        '/volunteers': 1,
        '/tic-tac': 2,
        '/profile': 3
    };

    const indexToTabName: Record<number, string> = {
        0: '/',
        1: '/volunteers',
        2: '/tic-tac',
        3: '/profile'
    };

    const currentTab = tabNameToIndex[location.pathname] ?? false;

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        navigate(indexToTabName[newValue]);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs
                    value={currentTab}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="standard"
                    centered
                >
                    <Tab label="Home" />
                    <Tab label="Volunteers" />
                    <Tab label="Tic-Tac" />
                    <Tab label="Profile" />
                </Tabs>
            </AppBar>
        </Box>
    );
}