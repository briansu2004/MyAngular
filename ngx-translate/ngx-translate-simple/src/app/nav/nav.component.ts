import { Component, OnInit } from '@angular/core';
import { Constants } from '../common/constant';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  lang: string = Constants.DEFAULT_LANG;

  constructor() {}

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || Constants.DEFAULT_LANG;

    console.log('Current lang: ', this.lang);
  }

  changeLang(lang: any) {
    console.log('Change lang to: ', lang);
    localStorage.setItem('lang', lang);
    window.location.reload();
    //this.translate.use(lang);
  }

  changeLangEvent(event: any) {
    if (event.target.value) {
      this.changeLang(event.target.value);
    }
  }
}
