
const chartData = {
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    datasets: [
        {
            label: 'Manga anime',
            data: [12, 19, 3, 5, 3],
            backgroundColor: 'rgba(172, 13, 47, 0.5)',
            borderColor: 'rgba(198, 99, 255, 0.56)',
            tension: 0.4
        },
        {
            label: 'Romance',
            data: [30, 25, 78, 10, 50],
            backgroundColor: 'rgba(13, 172, 93, 0.68)',
            borderColor: 'rgba(213, 24, 99, 0.58)',
            tension: 0.4
        },
        {
            label: 'Horror and Thriller',
            data: [12, 20, 3, 10, 30],
            backgroundColor: 'rgba(19, 1, 5, 0.81)',
            borderColor: 'rgba(99, 109, 255, 0.56)',
            tension: 0.4

        }

    ]
};
const config = {
    type: 'line',
    data: chartData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Activity of the week'
            }
        }
    }
};

