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
        this.username = '';
        this.email = '';
        this.id = '';
        this.role = '';
    }
    return Users;
}());
exports.Users = Users;
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role = 'admin';
        return _this;
    }
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
console.log(user.role);
