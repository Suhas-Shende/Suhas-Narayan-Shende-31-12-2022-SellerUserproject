import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 admin:boolean=false;
 user:boolean=false;
loginHeads:boolean=true;
graphShow:boolean=false;
  sellerName:string="";
  userName:string="";
 

  image=".assets/brandimmages.jpg"
  constructor(private route: Router) {}

  ngOnInit(): void {
   
      this.route.events.subscribe((val: any) => {
        if (val.url) {
          if (localStorage.getItem('seller')) {
           let sellerStore=localStorage.getItem('seller');
           let sellerData =sellerStore && JSON.parse(sellerStore);
           this.sellerName=sellerData.name;
           this.admin=true;
           this.loginHeads=false;
           this.graphShow=true;
          
          }
          else if(localStorage.getItem('user')){
            let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore);
            this.userName= userData.name;
            this.user=true;
            this.loginHeads=false;
          }
           
        }
      });
  }
   
   
  
  logout(){
   this.admin=false;
 
   
    localStorage.removeItem('seller');
    this.route.navigate(['/'])
    this.loginHeads=true;
    this.graphShow=false;
  }

  userLogout(){
    this.user=false;
    // this.loginHeads=false;
    
    localStorage.removeItem('user');
     this.route.navigate(['/'])
     this.loginHeads=true;
   
  }

}

