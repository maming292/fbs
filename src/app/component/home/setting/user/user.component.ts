import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
msglist:any;
alertshow: any;
  constructor() { }

  ngOnInit() {
  	this.alertshow = false;
  	  	this.msglist=[
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	['ysadmin','一一','系统管理员','2018-03-28 12:23:22'],
  	
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
