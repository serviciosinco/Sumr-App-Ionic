import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WsProvider } from '../../services/ws/ws';
import { FncProvider } from '../../services/fnc/fnc';
import { PshProvider } from '../../services/psh/psh';
import { Plugins, StatusBarStyle } from '@capacitor/core';

import {chart} from 'highcharts';
import * as Highcharts from 'highcharts';
//import * as HighchartsSolidgGauge from 'highcharts/modules/solid-gauge';

//HighchartsSolidgGauge(Highcharts);

const { StatusBar } = Plugins;

@Component({
  selector: 'app-dsh',
  templateUrl: 'dsh.page.html',
  styleUrls: ['dsh.page.scss'],
  providers: [ PshProvider ]
})

export class DshPage {

  _cl_clr = '';
  _cl_img = '';
  
  constructor(

    private _ws: WsProvider,
    public _fnc: FncProvider,
    public _psh: PshProvider,
    public _Rte: Router) {

  }

  plotSimpleBarChart() {
    
    let myChart_1 = Highcharts.chart('graph_1', {
      credits:{ enabled:false },
      legend: { enabled: false },
      chart: { type: 'column' },
      title: { text: ''},
      xAxis: { 
        categories: ['Apples', 'Bananas', 'Oranges'] 
      },
      yAxis: {
        title: { text: '' },
        gridLineWidth: 0,
      },
      plotOptions: {
        series: {}
      },
      series: [
        {
          name: 'Jane',
          type: undefined,
          data: [1, 0, 4],
          borderRadius:5,
          pointWidth: 5,
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [
              [0, '#f79685'],
              [1, '#f45c42']
            ]
          }
        },
        {
          name: 'John',
          type: undefined,
          data: [5, 7, 3],
          color: {
            linearGradient: {
              x1: 0,
              x2: 0,
              y1: 0,
              y2: 1
            },
            stops: [
              [0, '#e6947c'],
              [1, '#f9e883']
            ]
          }
        }]
    });

    /*
    let myChart_2 = Highcharts.chart('graph_2', {
      credits:{ enabled:false },
      chart: { type: 'solidgauge', height: '110%' },
      title: { text: ''}, 
      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Move
              outerRadius: '100%',
              innerRadius: '80%',
              borderWidth: 0
          }]
      },
      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: true,
                  y: -20,
                  borderWidth: 0,
                  backgroundColor: 'none',
                  useHTML: true,
                  shadow: false,
                  style: {
                    fontSize: '17px'
                  },
                  formatter: function() {
                    return '<div style="width:100%;text-align:center;"><span style="color:#e6947c;font-weight:bold;">' + this.y + '<span style="font-size:13px;">%</span></span>';
                  }
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },
      series: [
        {
          name: 'Move',
          type: undefined,
          data: [{
            radius: '100%',
            innerRadius: '80%',
            y: 42,
            color: {
              linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
              },
              stops: [
                [0, '#e6947c'],
                [1, '#f9e883']
              ]
            }
          }]
        }
      ]
    
    });


    let myChart_3 = Highcharts.chart('graph_3', {
      credits:{ enabled:false },
      chart: { type: 'solidgauge', height: '110%' },
      title: { text: ''}, 
      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Move
              outerRadius: '100%',
              innerRadius: '80%',
              borderWidth: 0
          }]
      },
      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: true,
                  y: -20,
                  borderWidth: 0,
                  backgroundColor: 'none',
                  useHTML: true,
                  shadow: false,
                  style: {
                    fontSize: '17px'
                  },
                  formatter: function() {
                    return '<div style="width:100%;text-align:center;"><span style="color:#e6947c;font-weight:bold;">' + this.y + '<span style="font-size:13px;">%</span></span>';
                  }
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },
      series: [
        {
          name: 'Move',
          type: undefined,
          data: [{
            radius: '100%',
            innerRadius: '80%',
            y: 53,
            color: {
              linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
              },
              stops: [
                [0, '#e6947c'],
                [1, '#f9e883']
              ]
            }
          }]
        }
      ]
      
    });
    
    let myChart_4 = Highcharts.chart('graph_4', {
      credits:{ enabled:false },
      chart: { type: 'solidgauge', height: '110%' },
      title: { text: ''}, 
      pane: {
          startAngle: 0,
          endAngle: 360,
          background: [{ // Track for Move
              outerRadius: '100%',
              innerRadius: '80%',
              borderWidth: 0
          }]
      },
      yAxis: {
          min: 0,
          max: 100,
          lineWidth: 0,
          tickPositions: []
      },
      plotOptions: {
          solidgauge: {
              dataLabels: {
                  enabled: true,
                  y: -20,
                  borderWidth: 0,
                  backgroundColor: 'none',
                  useHTML: true,
                  shadow: false,
                  style: {
                    fontSize: '17px'
                  },
                  formatter: function() {
                    return '<div style="width:100%;text-align:center;"><span style="color:#e6947c;font-weight:bold;">' + this.y + '<span style="font-size:13px;">%</span></span>';
                  }
              },
              linecap: 'round',
              stickyTracking: false,
              rounded: true
          }
      },
      series: [
        {
          name: 'Move',
          type: undefined,
          data: [{
            radius: '100%',
            innerRadius: '80%',
            y: 78,
            color: {
              linearGradient: {
                x1: 0,
                x2: 0,
                y1: 0,
                y2: 1
              },
              stops: [
                [0, '#e6947c'],
                [1, '#f9e883']
              ]
            }
          }]
        }
      ]
    
    });
    */
  }

  ionViewWillEnter() {

    if(!this._fnc.isN( this._fnc.getSess("_cl").clr )){ //Cambiar color de cliente
      this._cl_clr = this._fnc.getSess("_cl").clr;
    }

    if(!this._fnc.isN( this._fnc.getSess("_cl").lgo )){ //Cambiar color de cliente
      this._cl_img = this._fnc.getSess("_cl").lgo.big;
    } 

  }

  ionViewDidEnter() {

    this._fnc._stBar({ e:'drk' });
    this._psh.initPushNotification();
    this.plotSimpleBarChart();
    
  }

  ionViewWillLeave(){
 
  }

}
