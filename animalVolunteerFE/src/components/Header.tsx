import {AppBar, Box, Button} from "@mui/material";
import {NavLink} from "react-router-dom";

export function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <div className="flex flex-row items-center justify-between py-2 px-3">
                    <div className="flex flex-row gap-4 items-center justify-center">
                        <NavLink to="/" className="text-2xl pr-5">AnimalVolunteer</NavLink>
                        <NavLink to="pets">Pets</NavLink>
                        <NavLink to="page2">Страница 2</NavLink>
                        <NavLink to="tic-tac">Tic-Tac</NavLink>
                    </div>
                    <Button color="inherit">Login</Button>
                </div>
            </AppBar>
        </Box>
    );
}