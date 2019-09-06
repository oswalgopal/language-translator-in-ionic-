import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  Language: any;
  constructor(
    private translate: TranslateService
  ) {
  }

  ngOnInit() {
  }
  SetLanguage() {
    console.log(this.Language);
    this.translate.use(this.Language);
  }
}
