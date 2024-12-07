import { useState, useEffect } from "react";
import { Typography, Box, Stack, SvgIcon } from "@mui/material";
import ThemeContexProvider from "../components/ThemeProvider";
import { getWeatherForecast } from "../utils/fetchData";
import ForecastTable from '../components/ForecastTable';
import ResponsiveGridLayout from "../components/Layout";
import ThemeModeFab from "../components/ThemeModeFab";
import PreloaderBar from "../components/PreloaderBar";
import WeatherStateIcon from "../utils/weatherIcons";
import CardsSlider from "../components/CardsSlider";
import SearchBar from "../components/SearchBar";
import SnackBar from '../components/SnackBar';
import styles from '../styles/HomeStyles';
import Chart from "../components/Chart";


export default function HomePage() {
    const [requestFailed, setRequestFailed] = useState(false);
    const [forecastData, setForecastData] = useState(null);
    const [city, setCity] = useState('');


    useEffect(() => {
        if (forecastData) {
            console.log(forecastData);
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
                        <Typography fontSize="7.5vw" component="div" fontWeight={500} ml={2.5}>{forecastData && 
                            Math.round(forecastData[0].main.temp)}C&deg;
                        </Typography>
                        <Box mr={7.5}>
                            <SvgIcon sx={{ height: '100%', width: '120px' }}>
                                <WeatherStateIcon weatherState={forecastData && 
                                    forecastData[0].weather[0].main} style={{ height: '100%', width: '100%'}}/>
                            </SvgIcon>
                        </Box>
                    </Stack>
                    <ForecastTable data={forecastData}/>
                    <CardsSlider data={forecastData}/>
                </Box>
                <Box className="grid-second-section" sx={styles.GridSecondSection}>
                    <SearchBar setCityState={setCity}/>
                    <Chart data={forecastData} />
                </Box>
            </ResponsiveGridLayout>

            <ThemeModeFab />
            {requestFailed && 
                <SnackBar severity="error" text="Request failed" />}
        </ThemeContexProvider>
    );
}

