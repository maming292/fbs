import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-role',
	templateUrl: './role.component.html',
	styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
	msglist: any;
	alertshow: any;
	page: number = 1;
	maxPage: number = 1;
	pageArr: any;
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
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
			['系统管理员', '描述'],
		]
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