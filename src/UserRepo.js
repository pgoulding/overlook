import domUpdates from "./domUpdates";

class UserRepo {
  constructor(data) {
    this.data = data;
  }
  showUsers(input) {
    let filteredUsers = this.data.filter(user => user.name.toLowerCase().includes(input.toLowerCase()))
    if (filteredUsers.length === 1) {
      let foundUser = this.data.find(user => user.id === filteredUsers[0].id)
      domUpdates.foundUser(foundUser)
      return foundUser
    } else if (filteredUsers.length > 1) {
      domUpdates.showUsers(filteredUsers)
      return filteredUsers;
    } else {
      domUpdates.promptNewUser();
      return 'No Users Found, would you like to add one?';
    }
  }
}


// If a valid customer result is returned while searching or a new customer is added,
//   all the tabs besides the`Main` tab will be specific to that customer.

export default UserRepo;