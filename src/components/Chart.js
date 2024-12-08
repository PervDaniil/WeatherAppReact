import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import { getCurrentWeek, getNightAndDayTemperatureValues, daysOfWeek } from '../utils/date';
import { Chart as ChartJS, Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement);


export default function Chart({ data }) {
    const [chartTemperatureValues, setChartTemperatureValues] = useState([]);
    const [chartLabels, setChartLabels] = useState(daysOfWeek.slice(0, 5));
    

    const fillChart = (data) => {
        if (data) {
            const chartLabels = getCurrentWeek(data);
            const {dayTemperatureValues, nightTemperatureValues} = getNightAndDayTemperatureValues(data);

            console.table(dayTemperatureValues);
            console.table(nightTemperatureValues);

            setChartTemperatureValues(dayTemperatureValues);
            setChartLabels(chartLabels);
        }
    }

    useEffect(() => {
        fillChart(data);
    }, [data]);


    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Temperature',
                data: chartTemperatureValues,
                borderColor: 'rgb(50, 255, 0)',
                backgroundColor: 'rgba(50, 255, 0, 0.25)',
                tension: 0.4,
                fill: false,
            },
        ],
    }

    const chartOptions = {
        responsive: true,
    }

    return (
        <Line data={chartData} options={chartOptions} />
    );
}