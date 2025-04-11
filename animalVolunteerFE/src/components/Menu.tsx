import React from "react";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function MainNavigation() {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);

        // Navigate to the corresponding route
        switch (newValue) {
            case 0:
                navigate("/");
                break;
            case 1:
                navigate("/volunteers");
                break;
            case 2:
                navigate("/tic-tac");
                break;
            case 3:
                navigate("/profile");
                break;
            default:
                break;
        }
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
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