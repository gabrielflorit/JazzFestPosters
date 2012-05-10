var chart;
$(document).ready(function() {

	var postersData = _.map(posters, function(poster) { return poster.Appreciation; });

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
		series: [{
			data: postersData,
			point: {
				events: {
					mouseOver: function() {
						var test = posters[this.x];
						$('#poster').attr('src', 'img/posters/' + test.YEAR + '.jpg');
					}
				}
			}
		}],
		subtitle: {
			text: ''
		},
		title: {
			text: null
		},
		xAxis: {
			title: {
				text: null
			},
		},
		yAxis: {
			title: {
				text: null
			}
		}
	});







});

