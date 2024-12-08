import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Box, Card, IconButton, SvgIcon, Typography } from '@mui/material';
import WeatherStateIcon from '../utils/weatherIcons';
import AnimatedComponent from './AnimatedComponent';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import styles from '../styles/HomeStyles';
import 'swiper/css';


export default function CardsSlider({ data }) {
    return (
        <Box sx={styles.ForecastCardsSwiperContainer}>
            <IconButton className='backArrowButton' color='primary' sx={{ ml: 1 }}>
                <ArrowBackIcon />
            </IconButton>
            <Swiper 
                slidesPerView="3"
                modules={[Navigation]}
                style={{ maxWidth: '460px' }}
                navigation={{
                    prevEl: '.backArrowButton',
                    nextEl: '.nextArrowButton'
                }}>
                <>
                    {data && data.map((day, index) => (
                        <SwiperSlide key={index}>
                            <AnimatedComponent>
                                <Card sx={styles.ForecastCard} key={index}>
                                    <SvgIcon>
                                        <WeatherStateIcon weatherState={day.weather[0].main} />
                                    </SvgIcon>
                                    <Typography variant="h6" component="div" align="center">{Math.round(day.main.temp)}&deg;</Typography>
                                    <Typography variant="body2" component="div" align="center" color="textSecondary">{day.dt_txt.slice(11, 16)}PM</Typography>
                                </Card>
                            </AnimatedComponent>
                        </SwiperSlide>
                    ))}
                </>
            </Swiper>
            <IconButton className='nextArrowButton' color='primary' sx={{ mr: 1 }}>
                <ArrowForwardIcon />
            </IconButton>
        </Box>
    )
}

