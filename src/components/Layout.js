import { Container, Paper } from "@mui/material"


export default function ResponsiveGridLayout({ children }) {
    return (
        <Container sx={styles.Container}>
            <Paper sx={styles.GridContainer}>
                {children}
            </Paper>
        </Container>
    )
}

const styles = {
    Container: {
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'
    },

    GridContainer: {
        width: '100%', height: '85vh', maxHeight: '85vh', boxShadow: '0px 0px 24px rgba(0, 0, 0, 0.5)',
        display: 'grid', gridTemplateColumns: '1fr 1fr', overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.1)',
    },
}