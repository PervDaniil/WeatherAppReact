import { IoSunny as SunnyIcon } from 'react-icons/io5';
import { MdModeNight as ClearNightIcon } from 'react-icons/md';
import { BsCloudSnowFill as SnowyIcon } from 'react-icons/bs';
import { IoMdCloud as CloudyIcon, IoMdRainy as RainyIcon, IoMdCloudyNight as CloudyNightIcon } from 'react-icons/io';


export default function WeatherStateIcon({ weatherState }) {
    switch (weatherState) {
        case 'Clouds': {
            return <CloudyIcon />;
        }
        case 'Clear': {
            return <SunnyIcon />;
        }
        case 'Rain': {
            return <RainyIcon />;
        }
        case 'Snow': {
            return <SnowyIcon />
        }
        default: {
            return <CloudyIcon />;
        }
    }
}