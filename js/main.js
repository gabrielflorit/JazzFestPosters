var chart;
$(document).ready(function() {

	var postersData = [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6]];
	postersData = _.map(posters.posters, function(poster){ return poster.Appreciation; });

	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'graph',
			type: 'line'
		},
		credits: {
			enabled: false
		},
		legend: {
			enabled: false,
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: '#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			line: {
				lineWidth: 0
			}
		},

		// plotOptions: {
		// 	scatter: {
		// 		marker: {
		// 			radius: 5,
		// 			states: {
		// 				hover: {
		// 					enabled: true,
		// 					lineColor: 'rgb(100,100,100)'
		// 				}
		// 			}
		// 		},
		// 		states: {
		// 			hover: {
		// 				marker: {
		// 					enabled: false
		// 				}
		// 			}
		// 		}
		// 	}
		// },
		series: [{
			name: 'Appreciation (2012 US dollars)',
			// color: 'rgba(223, 83, 83, .5)',
			data: postersData
		}],
		subtitle: {
			text: ''
		},
		title: {
			text: null
		},
		tooltip: {
			// crosshairs: true
			// crosshairs: {
			// 	width: 2,
			// 	color: '#c3c3c3',
			// 	dashStyle: 'shortdot'
			// }
		},
		xAxis: {
			title: {
				text: null
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: null
			}
		}
	});
});

