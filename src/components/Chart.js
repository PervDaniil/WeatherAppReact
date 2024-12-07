import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement } from 'chart.js';
ChartJS.register(Tooltip, Legend, LineElement, Title, CategoryScale, LinearScale, PointElement);


export default function Chart({ data }) {
    const chartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        datasets: [
            {
                label: 'Temperature',
                data: [-12, -7, -14, -11, -10],
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