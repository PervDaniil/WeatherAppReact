import { Snackbar, Alert } from "@mui/material";


export default function SnackBar({ text, severity }) {
    return (
        <Snackbar open={true} autoHideDuration={3000} 
            anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <Alert severity={severity}>
                { text }
            </Alert>
        </Snackbar>
    )
}