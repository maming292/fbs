import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../../../services/index.service';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PublicService } from '../../../services/public.service';
import * as $ from "jquery";
declare var echarts:any;
@Component({
	selector: 'app-datadisplay',
	templateUrl: './datadisplay.component.html',
	styleUrls: ['./datadisplay.component.css']
})
export class DatadisplayComponent implements OnInit {
	ecwidth: any;
	ydatas: any;
	ydata1: any;
	ydata2: any;
	constructor(private route: Router, private serve: IndexService, private http: HttpClient) {}
	ngOnInit() {
		this.ydatas = [[5, 20, 36, 10, 10, 20, 5, 20, 36, 10],
					   [50, 12, 38, 5, 7, 22, 15, 90, 63, 100],
					   [1, 2, 4, 8, 16, 32, 64, 128, 256, 512]
					  ]
		var ydatas = this.ydatas;
		this.ydata1 = this.ydatas[0];
		this.ydata2 = this.ydatas[0];
		var ydata1 = this.ydata1;
		var ydata2 = this.ydata2;
		
		var setEc1 = this.setEc1;
		var setEc2 = this.setEc2;
		$('.name1').on('change',function(){
			var val1 = $(this).val();
			ydata1 = ydatas[Number(val1)];
			setEc1('main1',ydata1);
		})
			$('.name2').on('change',function(){
			var val2 = $(this).val();
			ydata2 = ydatas[Number(val2)];
			setEc2('main2',ydata2);
		})
		this.ecwidth = $('.ecList').width();
		$('.ec').height(this.ecwidth * 0.30);
		this.setEc1('main1',this.ydata1);
		this.setEc2('main2',this.ydata2);
	}

	setEc1(id,ydata) {
		$('#box').removeAttr('_echarts_instance_');
		var myChart = echarts.init(document.getElementById(id));
		
		var option = {
			backgroundColor: '#fff',
			title: {
				text: '有功功率图表分析',
				show: true, //标题显示隐藏
				left: 'center',
				top: '20',
				fontSize: '18px',
				textStyle: { //样式
					color: '#333',
					fontWeight: '700',
					fontSize: 16
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {//横轴
				boundaryGap: false,
				splitLine: { // 网格竖线
					show: true,
					lineStyle: {
						color: '#C9C9C9',
						width: 1
					}
				},
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
			},
			yAxis: {
				splitLine: { // 网格竖线
					show: true,
					lineStyle: {
						color: '#C9C9C9',
						width: 1
					}
				}
			},
			series: [{
				name: '销量',
				type: 'line',
				areaStyle: { //折线以下样式
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#5CD2BF'
								},
								{
									offset: 1,
									color: '#fff'
								}
							]
						)
					}
				},
				itemStyle: { //折线样式
					normal: {
						color: '#39C9B2', //圆圈样式
						lineStyle: {
							color: '#39C9B2'
						}
					}
				},
				data: ydata
			}]
		};
		myChart.setOption(option);
	}

	setEc2(id,ydata) {
		var myChart = echarts.init(document.getElementById(id));
		var option = {
			title: {
				text: '有功功率图表分析',
				show: true, //标题显示隐藏
				left: 'center',
				top: '20',
				textStyle: { //样式
					color: '#666',
					fontWeight: '400',
					fontSize: 16
				}
			},
			tooltip: {
				trigger: 'axis'
			},
			xAxis: {
//				boundaryGap: false,
				splitLine: {
					show: true,
					lineStyle: {
						color: '#C9C9C9',
						width: 1
					}
				},
				data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
			},
			yAxis: {
				splitLine: {
					show: true,
					lineStyle: {
						color: '#C9C9C9',
						width: 1
					}
				}
			},
			series: [{
				name: '销量',
				type: 'bar',
				//				areaStyle: {}
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1, [{
									offset: 0,
									color: '#05BFA5'
								},
								{
									offset: 1,
									color: '#fff'
								}
							]
						),
						lineStyle: {
							color: '#009CFF'
						}
					}
				},
				data: ydata
			}]
		};
		myChart.setOption(option);
	}

}