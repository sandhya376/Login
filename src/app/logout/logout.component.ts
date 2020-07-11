import { Component, OnInit } from '@angular/core';
import { UserService} from '../service/user.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private user: UserService, private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
    this.user.logout().subscribe(data => {
      if(data.success) {
        this.router.navigate([''])
        this.authService.setLoggedIn(false)
      } else {
        window.alert('some problem')
      }

    })
  }

}
