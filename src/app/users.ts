export class Users {
  info: any = { username: '', email: '', id: '', role: '' };
}

export class SuperUser extends Users {
  constructor() {
    super();
    this.info.role = 'admin';
  }

  createUser(user: any, username: any, email: any, role: any) {
    // create a new Users instance and push it to the users array.
    let usr = new Users();
    if (!username || !email || !role) {
      console.log('error no user data was input');
      return;
    }
    usr.info.username = username;
    usr.info.email = email;
    usr.info.id = username;
    usr.info.role = role;
    if (user.find((e: any) => e.username == usr.info.username)) {
      // if username exists we don't want to create it again.
      console.log(user);
      console.log('Already exists cannot create');
      return;
    }
    user.push(usr.info);
    console.log(
      'creating new user and updating session storage... (users.tsc) '
    );
    sessionStorage.setItem('user_data', JSON.stringify(user)); //
    console.log('UserLIST Data is: ', user);
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
console.log(user.info.role);
