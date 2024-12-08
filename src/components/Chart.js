import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement);


export default function Chart({ data }) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const [chartTemperatureValues, setChartTemperatureValues] = useState([]);
    const [chartLabels, setChartLabels] = useState(daysOfWeek);
    

    const fillChart = (data) => {
        if (data) {
            const currentDay = new Date(data[0].dt_txt);
            const chartLabels = [];
        
            for (let i = 0; i < 5; i++) {
                const dayIndex = (currentDay.getDay() + i) % 7;
                chartLabels.push(daysOfWeek[dayIndex]);
            }

            const dayTemperatureValues = [];
            const nightTemperatureValues = [];

            data.forEach(day => {
                const currentDayTemperature = day.dt_txt.slice(11, 16);

                if (currentDayTemperature === "15:00") {
                    dayTemperatureValues.push(Math.round(day.main.temp));
                } 
                else if (currentDayTemperature === "00:00") {
                    nightTemperatureValues.push(Math.round(day.main.temp));
                }
            });

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