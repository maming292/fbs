import { Component, OnInit } from '@angular/core';
import {PublicService} from '../../../services/public.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag:boolean=false;
  menu:any;
  sid:any;
  id:any;
  state:any=0;
  constructor(private route:Router,private sev:PublicService) {

  }
  ngOnInit() {
    let st=this.state;
  }
  onIf(id,e){
    this.sid=id;
    // let list= e.target.parentElement.parentElement.parentElement.children;
    // for(let i=0;i<list.length;i++){
    //   if(e.target==list[i].children[0].children[1]||e.target==list[i].children[0].children[0]){
    //     this.addClass(list[i],'acti');
    //   }else{
    //     this.removeClass(list[i],'acti');
    //   }
    // }
  }

}
