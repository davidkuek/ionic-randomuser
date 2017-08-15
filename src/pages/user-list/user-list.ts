import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailPage } from '../user-detail/user-detail';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the UserListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-list',
  templateUrl: 'user-list.html',
})
export class UserListPage {
userArray = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    this.http.get("https://randomuser.me/api?results=10")
    .map(res=>res.json())
    .subscribe(
      data =>{
         this.userArray = data.results;
      },
      err =>console.log("error"),
      () => console.log('user')
      );
    }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserListPage');
  }
  itemTapped(user){
  	this.navCtrl.push(UserDetailPage,{user:user});
  }

}
