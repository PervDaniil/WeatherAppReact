import { useState, useEffect } from "react";
import { Typography, Box, Stack, SvgIcon } from "@mui/material";
import ThemeContexProvider from "../components/ThemeProvider";
import { Cloud as CloudIcon } from '@mui/icons-material';
import { getWeatherForecast } from "../utils/fetchData";
import ForecastTable from '../components/ForecastTable';
import ResponsiveGridLayout from "../components/Layout";
import ThemeModeFab from "../components/ThemeModeFab";
import PreloaderBar from "../components/PreloaderBar";
import CardsSlider from "../components/CardsSlider";
import SearchBar from "../components/SearchBar";
import Chart from "../components/Chart";


export default function HomePage() {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {

    }, []);

    const HandleForecastFetching = () => {
        const FetchForecast = async () => {
            const data = await getWeatherForecast();

            if (data) {
                setForecastData(data);
            }
        };

        FetchForecast();
    };


    return (
        <ThemeContexProvider>
            <PreloaderBar />

            <ResponsiveGridLayout>
                <Box className="grid-first-section" sx={styles.GridFirstSection}>
                    <Stack direction="row" bgcolor="rgba(0, 0, 0, 0.15)" justifyContent="space-between">
                        <Typography fontSize="7.5vw" component="div" fontWeight={500} ml={2.5}>26&deg;</Typography>
                        <Box mr={7.5}>
                            <SvgIcon sx={{ height: '100%', fontSize: 120}}>
                                <CloudIcon />
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <ForecastTable />
                    <CardsSlider />
                </Box>
                <Box className="grid-second-section" sx={styles.GridSecondSection}>
                    <SearchBar />
                    <Chart />
                </Box>
            </ResponsiveGridLayout>

            <ThemeModeFab />
        </ThemeContexProvider>
    );
}

const styles = {
    GridFirstSection: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr 1fr',
        height: '85vh',
    },
    GridSecondSection: {
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        maxHeight: '85vh'
    },
    ForecastCardsContainer: {
        display: 'grid',
        width: '100%',
        height: '160px',
        placeItems: 'center',
        background: 'rgba(0, 0, 0, 0.1)'
    },
    ForecastCard: {
        p: 2,
        ml: 1.5,
        display: 'grid',
        height: '140px',
        width: '120px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        boxSizing: 'border-box',
    }
};
