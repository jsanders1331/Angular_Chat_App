"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.GroupUser = exports.SuperUser = exports.Users = void 0;
var Users = /** @class */ (function () {
    function Users() {
        this.info = { username: '', email: '', id: '', role: '' };
    }
    return Users;
}());
exports.Users = Users;
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser() {
        var _this = _super.call(this) || this;
        _this.info.role = 'admin';
        return _this;
    }
    SuperUser.prototype.createUser = function (user) {
        // create a new Users instance and push it to the users array.
        var usr = new Users();
        usr.info.username = 'test';
        user.push(usr.info);
        console.log('creating new user and updating session storage... ');
        sessionStorage.setItem('user_data', JSON.stringify(user));
        console.log('UserLIST Data is: ', user);
    };
    //myArray.splice(myArray.findIndex(item => item.field === "cStatus"), 1)
    SuperUser.prototype.removeUser = function (name, data) {
        var user_array = [];
        data.find(function (user, index) {
            //console.log('NAME, IDX ', user, index);
            if (user == undefined || user.username == undefined) {
                // error check
                return;
            }
            if (user.username == name) {
                // name found
                data.splice(index, 1); // delete this index
                user_array = data; // new data
                sessionStorage.setItem('user_data', JSON.stringify(user_array)); // refresh the session storage.
                return user_array;
            }
        });
    };
    return SuperUser;
}(Users));
exports.SuperUser = SuperUser;
var GroupUser = /** @class */ (function () {
    function GroupUser() {
    }
    return GroupUser;
}());
exports.GroupUser = GroupUser;
var user = new SuperUser();
console.log(user.info.role);
