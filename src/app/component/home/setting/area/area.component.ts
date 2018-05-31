import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-area',
	templateUrl: './area.component.html',
	styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
	msglist: any;
	alertshow: any;
	constructor() {}

	ngOnInit() {
		this.alertshow = false;
		this.msglist = [
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
		]
	}
shows() {
	this.alertshow = true;
	console.log(this.alertshow)
}
hiddens() {
	this.alertshow = false;
	console.log(this.alertshow)
}
}