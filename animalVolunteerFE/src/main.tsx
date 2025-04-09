import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme.ts";
import {RouterProvider} from "react-router-dom";
import {router} from "./app/router.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
        <RouterProvider router={router}/>
    </ThemeProvider>
  </StrictMode>
)


