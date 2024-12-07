import { Fab } from "@mui/material";
import { DarkMode as ThemeModeIcon } from '@mui/icons-material';


export default function ThemeModeFab() {
    return (
        <Fab color="primary" sx={{
            position: 'absolute',
            bottom: '1em',
            left: '1em'
        }}>
            <ThemeModeIcon />
        </Fab>
    )
}