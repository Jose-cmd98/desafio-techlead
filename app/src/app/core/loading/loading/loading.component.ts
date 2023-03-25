import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  public loading$!: Observable<boolean>;

  constructor(private _loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loading$ = this._loadingService.loading$;
    console.log('teste')
  }

}
