import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
// import { HomePage } from '../pages/home/home';
import { UserListPage } from '../pages/user-list/user-list';
import { UserDetailPage } from '../pages/user-detail/user-detail';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp,
    UserListPage,
    UserDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UserListPage,
    UserDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
