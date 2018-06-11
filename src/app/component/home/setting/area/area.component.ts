import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../../../../services/index.service';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PublicService } from '../../../../services/public.service';
import * as $ from "jquery";
import set = Reflect.set;

@Component({
	selector: 'app-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
	showcompile: any; // 控制编辑框的显示隐藏
	msglist: any;
	alertshow: any;
	page: number = 1;
	maxPage: number = 1;
	pageArr: any;
	prov: any = -1; // 新增区域
	city: any = -1;
	area: any;
	prov_s: any; // 搜索区域
	city_s: any;
	area_s: any;
	prov_v: any = -1; // 搜索区域
	city_v: any = -1;
	area_v: any = -1;
	prov_com: any = -1; // 编辑
	city_com: any = -1;
	area_com: any = '';
	id_com: any;

	constructor(private route: Router, private serve: IndexService, private http: HttpClient, private service: PublicService) {}
	headers = new HttpHeaders().set("Accept", "*/*");
	options = {
		headers: this.headers,
		contentType: 'application/x-www-form-urlencoded'
	};
	ngOnInit() {
		this.showcompile = false;
		this.alertshow = false;

		this.msglist = [];
		this.getdata()
		this.maxPage = Math.ceil((this.msglist.length) / 10);
		this.pageArr = [];
		for(let i = 1; i <= this.maxPage; i++) {
			this.pageArr.push(i)
		}
	}

	// 编辑回显
	compile(prov_com, city_com, area_com, id_com) {
		this.prov_com = prov_com;
		this.city_com = city_com;
		this.area_com = area_com;
		this.id_com = id_com;
		this.showcompile = true;

	}
	hiddencompile() {
		this.showcompile = false;
	}
	savecompile() {
		if(this.prov_com == -1) {
			swal("请选择省！");
			return;
		}
		if(this.city_com == -1) {
			swal("请选择市！");
			return;
		}
		if(!this.area_com) {
			swal("请输入区域！");
			return;
		}
		let info = new HttpParams().set('PROVINCE', this.prov_com).set('CITY', this.city_com).set('AREA', this.area_com).set('ID', this.id_com);
		this.http.post(`${this.service.path}/fbs/system/updateArea `, info, this.options).toPromise().then(function() {
			this.msglist = [];
			this.getdata();
		}.bind(this));
		this.showcompile = false;
	}

	shows() {
		this.alertshow = true;
		console.log(this.alertshow)
	}
	hiddens() {
		this.alertshow = false;
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

	getdata() {
		var msg = this.msglist;
		this.http.get(`${this.service.path}/fbs/system/findArea`)
			.subscribe(function(data) {
				this.prov_s = data['provinceAll'];
				this.city_s = data['cityAll'];
				this.area_s = data['areaAll'];
				console.log(data)
				for(var m = 0; m < data['result'].length; m++) {
					var arr = [data['result'][m]['PROVINCE'], data['result'][m]['CITY'], data['result'][m]['AREA'], data['result'][m]['ID']]
					msg.push(arr)
				}
				console.log(msg)
				this.pageArr = [];
				this.maxPage = Math.ceil((msg.length) / 10);
				for(let i = 1; i <= this.maxPage; i++) {
					this.pageArr.push(i)
				}

			}.bind(this))
	}

	save() {
		if(this.prov == -1) {
			swal("请选择省！");
			return;
		}
		if(this.city == -1) {
			swal("请选择市！");
			return;
		}
		if(!this.area) {
			swal("请输入区域！");
			return;
		}
		let info = new HttpParams().set('PROVINCE', this.prov).set('CITY', this.city).set('AREA', this.area);
		this.http.post(`${this.service.path}/fbs/system/saveArea`, info, this.options).toPromise().then(function() {
			console.log(666)
			this.msglist = [];
			this.getdata();
		}.bind(this));

		this.alertshow = false;
	}

	del(id) {
		layer.confirm('您确定要删除该条记录吗？', {
			btn: ['删除', '取消']
		}, function() {
			let info = new HttpParams().set('ID', id);
			this.http.post(`${this.service.path}/fbs/system/deleteArea`, info, this.options).toPromise().then(function() {
				console.log(666)
				this.msglist = [];
				this.getdata();
			}.bind(this));
			layer.msg('已经删除该条记录', {
				icon: 1
			});
		}.bind(this), function() {});

	}

	seach(prov, city, area) {
		var prov_a = (prov == -1 ? '' : prov);
		var city_a = (city == -1 ? '' : city);
		var area_a = (area == -1 ? '' : area);
		console.log(prov_a)
		this.msglist = [];
		var msg = this.msglist;
		let info = new HttpParams().set('PROVINCE', prov_a).set('CITY', city_a).set('AREA', area_a);
		this.http.post(`${this.service.path}/fbs/system/findArea`, info, this.options)
			.subscribe(function(data) {
				for(var m = 0; m < data['result'].length; m++) {
					var arr = [data['result'][m]['PROVINCE'], data['result'][m]['CITY'], data['result'][m]['AREA'], data['result'][m]['ID']]
					msg.push(arr)
				}
				this.pageArr = [];
				this.maxPage = Math.ceil((msg.length) / 10);
				for(let i = 1; i <= this.maxPage; i++) {
					this.pageArr.push(i)
				}

			}.bind(this))

	}

}