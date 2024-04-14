import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // interpolation
  title = 'demo';
  x:number=1;
  test(){
    return this.x;
  }
  siva:any =["../assets/img2.jpg"];

  D:Date=new Date();
  d:string=new Date().toLocaleDateString();
  dat:string=new Date().toLocaleTimeString();
  timeid=setInterval(()=>{
    this.dat=new Date().toLocaleTimeString();
  },1000)
  
  //property binding

  disability(){
    return false;
  }
  hide:boolean=true;

  //class binding

  isactive :boolean=false;

  applic1:boolean=true;

  another:boolean=true;
  
  //style binding

  cvar:string='blue';
  mystyle:object={
    color:'black',
    background:'grey',
    border:'5px solid blue'
  }

  //Event binding
  count:number=0;
  increment(){
    this.count+=1;
  }
  decrement(){
    this.count-=1;
  }
  name=' ';
  Changename(e:any){
    this.name=e.target.value;
  }

  //two way binding
  city='Hyderabad';
  update(){
    this.city='banglore';
  }

}
