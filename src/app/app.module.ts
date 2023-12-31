import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuardService } from './guard/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslationModule } from './components/translation/translation.module';
import { TestModule } from './test/test.module';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { SelectLanguageModule } from './components/select-language/select-language.module';
import { HomePageModule } from './home/home.module';
import { AvatarModule } from "primeng/avatar";
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AddCandidateTeamModule } from './teams/add-candidate-team.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ProfileModule } from './profile/profile.module';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslationModule,
    TestModule,
    AddCandidateTeamModule,
    AppointmentsModule,
    RouterModule,
    ProfileModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(),
    AppRoutingModule,
    SelectLanguageModule,
    HomePageModule,
    AvatarModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  exports: [MenuComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
