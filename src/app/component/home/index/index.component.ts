import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from '../../../services/index.service';
import swal from 'sweetalert2';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { PublicService } from '../../../services/public.service';
declare var AMap: any;
@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
	// 向父组件传值
//	@Output fromChild = new EventEmitter()
	
	title: string = 'Angular4 AGM Demo';
	lat: number = 31.575787;
	lng: number = 120.299815;
	url = '/fbs/foreignForC/synthesize'

	stationNumber: any;
	warnNumber: any;
	energy: any;
	map: any;
	list: any;
	secarea: any = '';
	sectype: any = '';
	area: any = '';
	standtype: any = '';
	companyname: any = '';

	constructor(private route: Router, private serve: IndexService, private http: HttpClient) {}
	ngOnInit() {
		this.get();
		let map = new AMap.Map('map', {
			resizeEnable: true,
			zoom: 11,
			center: [120.299815, 31.575787]
		});
	}
	// 首页地图

	get() {
		let info = new HttpParams().set('page', '1').set('total_number', '3').set('area', this.area).set('stand_type', this.standtype).set('company_name', this.companyname)
		console.log(info)
		this.serve.getData(this.url, info).then(data => {
			if(data['code'] == 200) {
				this.secarea = data['areaAll'];
				this.sectype = data['listCompany'];
				this.list = data['company']['list'];
				this.stationNumber = data['companyCount'];
				this.warnNumber = data['warnCount'];
				this.energy = data['energy'];
				this.map = data['start']
			} else {
				swal(`~~~@${data['code']}`);
			}
		}).catch(err => {
			console.log(err);
		})
	}
	isOpen: boolean = false;

	markerClick(e) {
		e.open()
		this.isOpen = true;
	}
	onClick(now,all) {
		this.route.navigate(['home/map_detail'],{queryParams:{'now':now,'all':all}});
	}
	givedata(){
		console.log('提供list')
	}
	backLineMap() {
		this.route.navigateByUrl('/home/newline');
	}
}
class childData {
	public companyName: string; //公司名称
	public constructionScale: string; //规模
	public stationType: string //电站类型
	public state: string; //电桩状态
	public co2: string //节能减排

}