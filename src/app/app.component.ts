import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig,private translate: TranslateService) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.translate.setDefaultLang('es_col');
  }
}
