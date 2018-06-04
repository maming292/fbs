import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
	selector: 'app-station',
	templateUrl: './station.component.html',
	styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {
	msglist: any;
	alertshow: any;
	page: number = 1;
	maxPage: number = 1;
	pageArr: any;
	constructor() {}
	ngOnInit() {

		this.alertshow = false;
		this.msglist = [
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '10%', 120.34566, 30.12343],
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '9%', 120.34566, 30.12343],
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '8%', 120.34566, 30.12343],
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '7%', 120.34566, 30.12343],
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '6%', 120.34566, 30.12343],
			['广盈实业有限公司', '光伏电站', '办公园区', '440KW', '梁溪区', '7年', '5%', 120.34566, 30.12343],
		];
		this.maxPage = Math.ceil((this.msglist.length) / 10);
		this.pageArr = [];
		for(let i = 1; i <= this.maxPage; i++) {
			this.pageArr.push(i)
		}
	}
	shows() {
		this.alertshow = true;
		console.log(this.alertshow)
	}
	hiddens() {
		this.alertshow = false;
		console.log(this.alertshow)
	}

	prev() {
		if(this.page > 1) {
			this.page--
		} else {
			return;
		}
	}
	first() {

		this.page = 1;
	}
	last() {
		this.page = this.maxPage;
	}
	next() {
		if(this.page < this.maxPage) {
			this.page++
		} else {
			return;
		}
	}
}