import React, { Component } from 'react'
import CanvasJSReact from './canvasjs.react';
import { data } from './live-anomaly-data.js';
import '../style/LivePlot.scss';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dps = [{x: 0, y: 0}, {x: 1, y: 0}, {x: 2, y: 0}, {x: 3, y: 0}, {x: 4, y: 0}, {x: 5, y: 0}, {x: 6, y: 0}, {x: 7, y: 0}, {x: 8, y: 0}, {x: 9, y: 0}];   //dataPoints.
var xVal = dps.length;
var yVal = 0;
var updateInterval = 1000;

class LivePlot extends Component {
	constructor() {
		super();
        this.updateChart = this.updateChart.bind(this);
        this.state = {counter1: 0, counter2: 0, counter3: 0}
	}
	componentDidMount() {
		setInterval(this.updateChart, updateInterval);
	}
	updateChart() {
        yVal =  data[xVal][0].anomaly + data[xVal][1].anomaly + data[xVal][2].anomaly;
        this.setState({counter1: this.state.counter1 + data[xVal][0].anomaly, counter2: this.state.counter2 + data[xVal][1].anomaly, counter3: this.state.counter3 + data[xVal][2].anomaly,})
		dps.push({x: xVal,y: yVal});
		xVal++;
		if (dps.length >  10 ) {
			dps.shift();
		}
		this.chart.render();
	}
	render() {
		const options = {
			title :{
				text: "Real Time Anomalies"
			},
			data: [{
				type: "line",
				dataPoints : dps
			}]
		}
		return (
		<div className="container">
			<CanvasJSChart options = {options}
				 onRef={ref => this.chart = ref}
			/>
            <div className="mac">
                <h2>MAC Addresses</h2>
                <h4>28:c6:3f:ed:74:16</h4>
                <h3>{this.state.counter1}</h3>
                <h4>16:74:ed:3f:c6:28</h4>
                <h3>{this.state.counter2}</h3>
                <h4>6b:02:77:86:ef:f0</h4>
                <h3>{this.state.counter3}</h3>
            </div>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default LivePlot;  