export class Users {
  username: string = '';
  email: string = '';
  id: string = '';
  role = '';
}

export class SuperUser extends Users {
  override role = 'admin';

  createUser() {
    let usr = new Users();
    usr.username = 'test';
    return usr;
  }
  //myArray.splice(myArray.findIndex(item => item.field === "cStatus"), 1)
  removeUser(name: string, data: any[]) {
    let user_array: any = [];
    data.find((user, index) => {
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
  }
}

export class GroupUser {}

let user = new SuperUser();
console.log(user.role);
