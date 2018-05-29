import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import { PublicService } from '../../../services/public.service';
import * as $ from "jquery";

@Component({
	selector: 'app-setting',
	templateUrl: './setting.component.html',
	styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

	constructor(private router: Router) {
		    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((e) => {
        let url = e['url'];
        let list = document.querySelectorAll('li');
        if (url == '/home/setting/station') {
          this.ech(list,list[0]);
        }
        else if (url == '/home/setting/station') {
          this.ech(list,list[1]);
        }
        else if (url == '/home/setting/station') {
          this.ech(list,list[2]);
        }
        else if (url == '/home/setting/station') {
          this.ech(list,list[3]);
        }
        else if (url == '/home/setting/station') {
          this.ech(list,list[4]);
        }
        
        console.log(list)
      });
		
		
	}
	ech(list, item) {
		$.each(list,function(i,v){
			console.log($(this).addClass('active'))
		})
//		(var i = 0; i < list.length; i++) {
//			if(list[i] == item) {
//				vthis.addClass(list[i], 'active');
//			} else {
//				vthis.removeClass(list[i], 'active');
//			}
//		}
	}
	ngOnInit() {
		
		
	}

}