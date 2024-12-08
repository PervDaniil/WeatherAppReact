import { Fab } from "@mui/material";
import { DarkMode as ThemeModeIcon } from '@mui/icons-material';


export default function ThemeModeFab({ HandleSideBarOpen }) {
    return (
        <Fab onClick={HandleSideBarOpen} color="primary" sx={{
            position: 'absolute',
            bottom: '1em',
            left: '1em'
        }}>
            <ThemeModeIcon />
        </Fab>
    )
}