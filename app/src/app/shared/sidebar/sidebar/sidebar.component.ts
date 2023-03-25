import { Router } from '@angular/router';
import { UserService } from './../../../core/services/user-service/user.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  public adminRoute: boolean = false;
  public name!: unknown;

  constructor(
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.adminRoute = this.userService.returnRole();
    this.name = localStorage.getItem('user');
    // Codigo abaixo foi usado no desenvolvimento para atender as espectativas de trabalhar com admin true or false
    // const urlAtual = window.location.href;
    // const urlValidado = urlAtual.split('/')[3];
    // console.log(urlAtual.split('/')[3]);
    // this.adminRoute = urlValidado.includes('admin')
    // console.log(this.adminRoute)
  }

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }


  public handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
