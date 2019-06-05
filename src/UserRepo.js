import domUpdates from "./domUpdates";

class UserRepo {
  constructor(data) {
    this.data = data;
  }
  showUsers(input) {
    let lowerCase = input.toLowerCase()
    let filteredUsers = this.data.filter(user => user.name.toLowerCase().includes(lowerCase))
    if (filteredUsers.length > 0) {
      domUpdates.searchCustomers(filteredUsers)
      return filteredUsers;
    } else {
      domUpdates.promptNewUser();
      return 'No Users Found, would you like to add one?';
    }
  }

  createNewUser(userName) {
    let highestID = [...this.data].map(ele => ele.id).sort((a, b) => a > b ? 1 : b > a ? -1 : 0).pop();
    let newUser = {
      id: ++highestID,
      name: userName 
    }
    this.data.push(newUser)
    return newUser
  }

}


// If a valid customer result is returned while searching or a new customer is added,
//   all the tabs besides the`Main` tab will be specific to that customer.

export default UserRepo;