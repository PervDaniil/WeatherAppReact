import { IoSunny, IoCloud, IoSnow, IoRainy } from 'react-icons/io5';


export default function WeatherStateIcon({ weatherState }) {
    switch (weatherState) {
        case 'Clouds': {
            return <IoCloud />;
        }
        case 'Clear': {
            return <IoSunny />;
        }
        case 'Rain': {
            return <IoRainy />;
        }
        case 'Snow': {
            return <IoSnow />;
        }
        default: {
            return <IoCloud />
        }
    }
}