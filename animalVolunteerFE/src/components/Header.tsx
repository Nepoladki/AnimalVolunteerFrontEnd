import {AppBar, Box, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import paw from "../assets/paw-icon.svg"
import profile from "../assets/profile.svg"
import logout from "../assets/logout.svg"

export function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" sx={{bgcolor: 'primary.main', color: 'primary.contrastText'}}>
                <div className="flex items-center justify-between px-4">
                    <NavLink to="/">
                        <Box component="img" sx={{ height: 31, '&': {filter: 'invert(100%)'}}} alt="Logo" src={paw} />
                    </NavLink>
                        <Typography variant="h6" align="center" className="absolute left-1/2 transform -translate-x-1/2">
                            AnimalVolunteer
                        </Typography>
                    <div className="flex gap-4 items-center">
                    <NavLink to="profile">
                        <Box component="img" sx={{ height: 44, '&': {filter: 'invert(100%)'}}} alt="Profile" src={profile} />
                    </NavLink>
                    <NavLink to="logout">
                        <Box component="img" sx={{ height: 25, '&': {filter: 'invert(100%)'}}} alt="Logout" src={logout} />
                    </NavLink>
                    </div>
                </div>
            </AppBar>
        </Box>
    );
}