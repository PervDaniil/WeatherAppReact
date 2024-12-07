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
import SnackBar from '../components/SnackBar';
import Chart from "../components/Chart";


export default function HomePage() {
    const [requestFailed, setRequestFailed] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    const [city, setCity] = useState('');


    useEffect(() => {
        if (forecastData) {
            console.log(forecastData)
        }
    }, [forecastData]);


    useEffect(() => {
        if (city) {
            HandleForecastFetching();
        }
    }, [city]);


    const HandleForecastFetching = () => {
        const FetchForecast = async () => {
            if (city) {
                try {
                    const data = await getWeatherForecast(city);
                    setForecastData(data.list);
                    console.log(data.list);
        
                } catch (error) {
                    setRequestFailed(true);
                    console.log(error);
                }
            } else {
                setRequestFailed(true);
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
                        <Typography fontSize="7.5vw" component="div" fontWeight={500} ml={2.5}>{forecastData && forecastData[0].main.temp}&deg;</Typography>
                        <Box mr={7.5}>
                            <SvgIcon sx={{ height: '100%', fontSize: 140}}>
                                <CloudIcon />
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <ForecastTable data={forecastData}/>
                    <CardsSlider />
                </Box>
                <Box className="grid-second-section" sx={styles.GridSecondSection}>
                    <SearchBar setCityState={setCity}/>
                    <Chart />
                </Box>
            </ResponsiveGridLayout>

            <ThemeModeFab />
            {requestFailed && 
                <SnackBar severity="error" text="Request failed" />}
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
