import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register the necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
    const data = {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [
            {
                label: 'Weekly Comparison',
                data: [30, 70, 40, 60, 90, 20, 80], // Replace with actual data
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {
                        return `${context.dataset.label}: ${context.raw}`;
                    },
                },
            },
            legend: {
                display: true,
                position: 'top',
            },
        },
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
            <h3 className="text-xl font-semibold">Statistics</h3>
            <div className="mt-4">
                <p className="text-sm text-gray-400 mb-2">Weekly Comparison</p>
                <Bar data={data} options={options} />
            </div>
        </div>
    );
};

export default Statistics;
