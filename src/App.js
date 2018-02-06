import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './App.css';

const config = {
  colors: [
    '#F2545B', 
    '#51D3D9', 
    '#457EC1', 
    '#DBECF8'
  ],
  chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    credits: {
      enabled: false
    },
    title: false,
    legend: {
      labelFormat: '<span>{name}</span>',
      itemMarginTop: 8,
      itemMarginBottom: 8,
      itemStyle: {
        color: '#000000',
        fontSize: '16px',
        fontWeight: 'normal'
      },
      symbolHeight: 15,
      enabled: true,
      align: 'right',
      layout: 'vertical',
      verticalAlign: 'middle',
      x: -120,
      y: 0,
      reversed: false
    },
    
    tooltip: {
        pointFormat: '<span style="display: inline-flex; border-radius: 50%; width: 10px; height: 10px; background-color: {point.color}"></span> <span style="padding-right: 15px;">{point.name}</span><span><strong>{point.percentage:.0f}%</strong></span>',
        backgroundColor: 'rgba(0,0,0,.85)',
        color: '#fff',
        borderColor: 'rgba(0,0,0,.85)',
        borderRadius: 3,
        shadow: false,
        style : {
          color: '#fff',
          fontSize: '16px',
          whiteSpace: 'no-wrap'
        },
        useHTML: true,
        hideDelay: 100
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        borderWith: 0,
        dataLabels: {
            enabled: true,
            distance: -45,
            format: '<b>{point.percentage:.0f} %',
            style: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '20px'
            }
        },
        center: ['50%', '50%'],
      },
      series : {
        states: {
          hover: {
            brightness: 0,
            halo: {
              opacity:1
            }           
          }  
        }  
      }
    },
    series: [{
      type: 'pie',
      innerSize: '50%',
      data: [
          ['Brand',       20],
          ['Competitor2', 15],
          ['Competitor3', 60],
          ['Competitor4', 5],
          {
            dataLabels: {
                enabled: true,
                format: '{point.percentage:.0f} %',
            }
          }
      ],
      showInLegend: true
    }]
};

class App extends React.Component {
  componentDidMount() {
    let chart = this.refs.chart.getChart();
  }
 
  render() {
    return <div className='chart-wrapper'>
       <ReactHighcharts config={config} ref="chart"></ReactHighcharts>
    </div>
  }
}


export default App;
