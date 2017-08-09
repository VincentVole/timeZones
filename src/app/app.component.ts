import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  now = Date.now();
  diff = 0;
  active = '';

  timeTick(){
  	setTimeout(() => {
  		this.now = Date.now();
  		this.now+=this.diff;
  		this.timeTick();
  	}, 100);
  }

  showTime(zone){
  	if(zone == 'pst'){
  		this.diff = 0;
  	}
  	else if(zone == 'mst'){
  		this.diff = 3600000;
  	}
  	else if(zone == 'cst'){
  		this.diff = 7200000;
  	}
  	else if(zone == 'est'){
  		this.diff = 10800000;
  	}
  		this.active = zone;
  }

  hideTime(){
  	this.active = '';
  }

  constructor(){
  	this.timeTick();
  }

}
