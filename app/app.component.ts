import {Component} from "@angular/core";
import firebase = require("nativescript-plugin-firebase");
@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
        this.googleLogin();
    }

    constructor(){
       /*
       firebase.login({
           type: firebase.LoginType.PASSWORD,
           email: "jorgeucano@gmail.com",
           password: "jorge1234"
       }).then((user)=>{
           console.dir(user);
       }, (error)=>{
           console.log("error con login por email " + error);
       });
       */
    }

    public facebookLogin(){
         firebase.login({
            type: firebase.LoginType.FACEBOOK,
            scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
        }).then((result) =>{
                console.log(JSON.stringify(result));
            },
            (errorMessage)=>{
                console.log(errorMessage);
            }
        )
    }

    public googleLogin(){
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(
            (result) => {
                console.log(JSON.stringify(result));
            },
            (errorMessage) =>{
                console.log(errorMessage);
            }
        );
        
    }

     




    public createUser():void{
        firebase.createUser({
            email: "jorgeucano@gmail.com",
            password: "micanal"
        }).then((user)=>{
            console.dir(user);
        }, (error) =>{
            console.log("ocurrio un error al crear un usuario " + error);
        });
    }

    public resetPassword():void{
        firebase.resetPassword({
            email: 'jorgeucano@gmail.com'
        }).then((user) =>{
            console.dir(user);
        }, (error)=>{
            console.log("no envio el reset" + error);
        });
    }

    public changePassword():void{
        firebase.changePassword({
            email: 'jorgeucano@gmail.com',
            oldPassword: 'test1234',
            newPassword : 'jorge1234'
        }).then((user)=>{
            console.dir (user);
        }, (error)=>{
            console.log("ocurrio un error al cambiarlo" + error);
        });
    }

}
