import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement);


export default function Chart({ data }) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const [chartTemperatureValues, setChartTemperatureValues] = useState(null);
    const [chartLabels, setChartLabels] = useState(daysOfWeek);
    
    const fillChart = (data) => {
        if (data) {
            const currentDay = new Date(data[0].dt_txt);
            const chartLabels = [];
            const chartData = [];
        
            for (let i = 0; i < 5; i++) {
                const dayIndex = (currentDay.getDay() + i) % 7;
                chartLabels.push(daysOfWeek[dayIndex]);
                chartData.push(data[i].main.temp);
            }

            setChartTemperatureValues(chartData);
            setChartLabels(chartLabels);
            console.log(chartLabels);
        }
    }

    useState(() => {
        fillChart(data);
    }, [data])


    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                label: 'Temperature',
                data: chartTemperatureValues || [-12, -7, -14, -11, -10],
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