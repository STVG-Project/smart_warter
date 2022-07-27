import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( 
    private router: Router,
    
  ) { }


  ngOnInit(): void {
    this.menus.forEach(m => {
      
    })
  }
  public model: any = {}
  public menus = [
    {
      link: '/home/report',
      name: 'Báo cáo'
    },
    {
      link: '/home/user',
      name: 'Danh sách nhân viên'
    },
    {
      link: '/home/area',
      name: 'Danh sách khu vực'
    },
    {
      link: 'customer',
      name: 'Danh sách khách hàng'
    },
    {
      link: 'customer-service',
      name: 'Danh sách yêu cầu'
    },
  ];
  // loggedIn: boolean = false

 


  logOut() {
    // this.authService.logOut()
    // this.loggedIn = false
    this.router.navigateByUrl('/')
  }
  getCurrentUser() {
    // return this.authService.getUser();
    return localStorage.getItem('user')

  }
}
