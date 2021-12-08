import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from './common/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngx-translate-simple';

  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(Constants.DEFAULT_LANG);
    const lang = localStorage.getItem('lang') || Constants.DEFAULT_LANG;
    this.translateService.use(lang);
    document.documentElement.lang = lang;
  }
}
