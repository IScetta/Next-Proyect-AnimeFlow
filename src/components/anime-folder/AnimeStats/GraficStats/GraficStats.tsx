"use client";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios para el gráfico de barras
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define la interface para las props del componente MyChart
interface MyChartProps {
  labels: string[];  // Lista de etiquetas
  dataPoints: number[];  // Lista de datos numéricos
}

const MyChart: React.FC<MyChartProps> = ({ labels, dataPoints }) => {
  // Datos que recibe el gráfico
  const data = {
    labels: labels,
    datasets: [{
      label: 'Votes',
      data: dataPoints,
      backgroundColor: [
        'rgba(54, 163, 235, 0.514)',
      ],
      borderColor: [
        'rgb(54, 162, 235)',

      ],
      borderWidth: 1
    }],
  };

  const options = {
    indexAxis: 'y' as const, // Barras horizontales
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: '',
      },
    },
  };

  // Renderiza el gráfico de barras
  return <Bar data={data} options={options} />;
};

export default MyChart;
