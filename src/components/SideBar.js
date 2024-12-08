import { Drawer, Switch, Paper, Typography, TextField, InputAdornment, IconButton, Fab } from "@mui/material";
import { List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import {
    Search as SearchIcon,
    DarkMode as ThemeModeIcon,
    ArrowBack as ArrowBackIcon,
    Animation as AnimationIcon,
    LocationCity as LocationIcon,
    CalendarToday as CalendarIcon,
    Notifications as NotificationIcon,
    Settings as SettingsIcon, Map as MapIcon,
} from "@mui/icons-material";


export default function SideBar({ isOpen, toggleSidebar }) {
    const HandleSidebarOpen = () => {
        toggleSidebar();
    }


    return (
        <Drawer open={isOpen} onClose={HandleSidebarOpen}>
            <Paper style={styles.SideBar}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <ThemeModeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="h5">Weather KG</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem sx={{ mb: 1.5 }}>
                        <TextField focused fullWidth size="small" label="Search" sx={styles.SearchBar} InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SearchIcon color="primary"/>
                                    </IconButton>
                                </InputAdornment>
                            )
                        }}/>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Settings
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <LocationIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                City Bishkek
                            </Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <MapIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Map
                            </Typography>
                        </ListItemText>
                        <Switch />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <CalendarIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Calendar
                            </Typography>
                        </ListItemText>
                        <Switch />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <AnimationIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Animation
                            </Typography>
                        </ListItemText>
                        <Switch />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <NotificationIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Notifications
                            </Typography>
                        </ListItemText>
                        <Switch />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <ThemeModeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography component="div" variant="body1">
                                Enable dark mode
                            </Typography>
                        </ListItemText>
                        <Switch checked />
                    </ListItem>
                    <Divider />
                </List>
                <Fab sx={styles.FAB} size="medium" onClick={HandleSidebarOpen}>
                    <ArrowBackIcon />
                </Fab>
            </Paper>
        </Drawer>
    )
}

const styles = {
    SideBar: {
        width: '320px',
        height: '100vh',
        position: 'relative',
    },
    FAB: {
        position: 'absolute',
        bottom: '1em',
        right: '1em',
    },
    SearchBar: {
        '& .MuiOutlinedInput-root:hover': {
            transition: 'all 0.3s',
            backgroundColor: "rgba(0, 0, 0, 0.25)"
        },
    },
    FlexContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
}
