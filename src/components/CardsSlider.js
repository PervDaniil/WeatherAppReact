import { ArrowBack as ArrowBackIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Cloud as CloudIcon } from '@mui/icons-material';
import { Box, Card, IconButton } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';


export default function CardsSlider({ cards }) {
    return (
        <Box sx={{ display: 'flex', height: '100%', background: 'rgba(0, 0, 0, 0.1)', alignItems: 'center' }}>
            <IconButton className='backArrowButton' color='primary' sx={{ ml: 1}}>
                <ArrowBackIcon />
            </IconButton>
            <Swiper slidesPerView="3" style={{ maxWidth: '460px' }} modules={[Navigation]}
                navigation={{ prevEl: '.backArrowButton', nextEl: '.nextArrowButton' }}>
                {Array.from(new Array(5)).map(card => (
                    <SwiperSlide>
                        <Card sx={{
                            p: 2,
                            ml: 1.5,
                            width: '120px',
                            height: '140px',
                            display: 'grid',
                            borderRadius: '16px',
                            boxSizing: 'border-box',
                            border: '1px solid rgba(0, 0, 0, 0.25)',
                        }}>
                            <CloudIcon />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
            <IconButton className='nextArrowButton' color='primary' sx={{ mr: 1}}>
                <ArrowForwardIcon />
            </IconButton>
        </Box>
    )
}

