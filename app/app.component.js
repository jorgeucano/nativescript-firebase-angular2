"use strict";
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var AppComponent = (function () {
    function AppComponent() {
        this.counter = 16;
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
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        this.facebookLogin();
    };
    AppComponent.prototype.facebookLogin = function () {
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            scope: ['public_profile', 'email'] // optional: defaults to ['public_profile', 'email']
        }).then(function (result) {
            console.log(JSON.stringify(result));
        }, function (errorMessage) {
            console.log(errorMessage);
        });
    };
    AppComponent.prototype.createUser = function () {
        firebase.createUser({
            email: "jorgeucano@gmail.com",
            password: "micanal"
        }).then(function (user) {
            console.dir(user);
        }, function (error) {
            console.log("ocurrio un error al crear un usuario " + error);
        });
    };
    AppComponent.prototype.resetPassword = function () {
        firebase.resetPassword({
            email: 'jorgeucano@gmail.com'
        }).then(function (user) {
            console.dir(user);
        }, function (error) {
            console.log("no envio el reset" + error);
        });
    };
    AppComponent.prototype.changePassword = function () {
        firebase.changePassword({
            email: 'jorgeucano@gmail.com',
            oldPassword: 'test1234',
            newPassword: 'jorge1234'
        }).then(function (user) {
            console.dir(user);
        }, function (error) {
            console.log("ocurrio un error al cambiarlo" + error);
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map