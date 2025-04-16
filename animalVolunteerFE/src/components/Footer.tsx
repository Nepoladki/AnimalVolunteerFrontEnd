import {Box} from "@mui/material";
import {NavLink} from "react-router-dom";
import telegram from "../assets/telegram_logo.svg";
import github from "../assets/github.svg";

export default function Footer() {
    return (
            <Box className="flex flex-row w-full h-9 items-center justify-between" sx={{ bgcolor: 'primary.main', color: 'primary.contrastText'}}>
                <div className="flex items-center px-4 space-x-4 ">
                    <NavLink to="https://telegram.org">
                        <Box component="img" sx={{ height: 20}} alt="Profile" src={telegram} />
                    </NavLink>
                    <NavLink to="https://github.com/Nepoladki">
                        <Box component="img" sx={{ height: 20 }} alt="Profile" src={github} />
                    </NavLink>
                    <a href="https://github.com/Nepoladki"></a>
                </div>
                <div className="flex items-center px-4 space-x-4 ">
                    Ilya Balandinskiy
                </div>
            </Box>
    );
}