import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProductDashboard = () => {
  const line = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [
      {
        name: "One",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name: "Two",
        data: [10, 20, 10, 40, 30, 60]
      },
    ],
    tooltip: {
      pointFormat: '{series.name} is {point.x}'
    },  
    credits: {
      enabled: false
    },
  };

  const area = {
    chart: {
      type: 'spline'
    },
    title: {
      text: 'My chart'
    },
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [
      {
        name: "One",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name: "Two",
        data: [10, 20, 10, 40, 30, 60]
      },
    ],
    tooltip: {
      pointFormat: '{series.name} is {point.x}'
    },  
    credits: {
      enabled: false
    },
  };

  const bar = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'My chart'
    },
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [
      {
        name: "One",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name: "Two",
        data: [10, 20, 10, 40, 30, 60]
      },
    ],
    tooltip: {
      pointFormat: '{series.name} is {point.x}'
    },  
    credits: {
      enabled: false
    },
  };

  const column = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'My chart'
    },
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [
      {
        name: "One",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name: "Two",
        data: [10, 20, 10, 40, 30, 60]
      },
    ],
    tooltip: {
      pointFormat: '{series.name} is {point.x}'
    },  
    credits: {
      enabled: false
    },
  };

  const pie = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'My chart'
    },
    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>'
    },
    yAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    xAxis: {
      title: {
        text: 'Number of Employees'
      }
    },
    series: [
      {
        name: "One",
        data: [1, 2, 1, 4, 3, 6]
      },
      {
        name: "Two",
        data: [10, 20, 10, 40, 30, 60]
      },
    ],
    tooltip: {
      pointFormat: '{series.name} is {point.x}'
    },  
    credits: {
      enabled: false
    },
  };

  
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={line} />
      <HighchartsReact highcharts={Highcharts} options={area} />
      <HighchartsReact highcharts={Highcharts} options={bar} />
      <HighchartsReact highcharts={Highcharts} options={column} />
      <HighchartsReact highcharts={Highcharts} options={pie} />
    </div>
  )
}

export default ProductDashboard