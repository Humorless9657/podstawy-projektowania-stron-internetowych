/* Hamburger nav */
// noinspection JSUnresolvedFunction

const hamburger = document.getElementById('header-hamburger');
const closeButton = document.getElementById('close');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.style.width = '65%';
})

closeButton.addEventListener('click', () => {
    nav.style.width = '0%';
})

nav.addEventListener('click', () => {
    nav.style.width = '0%';
})

const revenueChartOptions = {
    series: [{
        name: 'Net Profit',
        data: [12.948, 13.590, 13.879, 12.580, 13.302, 15.548, 15.904, 15.892, 14.402]
    }, {
        name: 'Revenue',
        data: [14.948, 15.590, 16.879, 16.580, 17.302, 18.548, 18.904, 18.892, 19.402]
    }, {
        name: 'Free Cash Flow',
        data: [13.105, 14.604, 12.209, 14.985, 13.508, 17.308, 14.385, 16.594, 13.402]
    }],
    chart: {
        type: 'bar',
        height: 350,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Revenue by Month',
        align: 'center'
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val + " thousands"
            }
        }
    }
};

const revenueChart = new ApexCharts(document.querySelector("#revenue-chart"), revenueChartOptions);
revenueChart.render();

const customerOptions = {
    series: [{
        name: "Customers",
        data: [5.542, 6.018, 6.518, 6.403, 6.819, 7.804, 8.310, 8.752, 8.531],
    }],
    chart: {
        height: 350,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: true
    },
    stroke: {
        curve: 'straight'
    },
    title: {
        text: 'Number of customers by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};

const customerChart = new ApexCharts(document.querySelector("#customerChart"), customerOptions);
customerChart.render();


const seoChartOptions = {
    series: [45, 35, 18, 2],
    chart: {
        width: '100%',
        type: 'pie',
    },
    labels: ['SEO', 'Other', 'Paid', 'Organic Social'],
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
    },
    title: {
        text: 'Major traffic channels',
        align: 'left'
    },
};

const seoChart = new ApexCharts(document.querySelector("#seo-chart"), seoChartOptions);
seoChart.render();

const tasksOptions = {
    series: [4, 1, 4, 0],
    chart: {
        width: '100%',
        type: 'donut',
    },
    labels: ['Planned', 'Completed', 'In Progress', 'Blocked'],
    title: {
        text: 'Tasks by status',
        align: 'left'
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
    }
};

const taskChart = new ApexCharts(document.querySelector("#task-chart"), tasksOptions);
taskChart.render();


const taskBarChartOptions = {
    series: [{
        name: 'Planned',
        data: [12, 15, 18, 10, 13, 15, 15, 15, 14]
    }, {
        name: 'Completed',
        data: [15, 20, 23, 19, 18, 17, 10, 21, 17]
    }, {
        name: 'In Progress',
        data: [14, 19, 21, 18, 15, 11, 16, 17, 16]
    }, {
        name: 'Blocked',
        data: [2, 3, 5, 6, 1, 5, 8, 1, 0]
    }],
    chart: {
        type: 'bar',
        width: '100%',
        height: 350,
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    title: {
        text: 'Tasks by Month',
        align: 'center'
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    fill: {
        opacity: 1
    },
};

const taskBarChart = new ApexCharts(document.querySelector("#task-bar-chart"), taskBarChartOptions);
taskBarChart.render();