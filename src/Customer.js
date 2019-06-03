import domUpdates from "./domUpdates";

class Customer {
  constructor(data, id, name) {
    this.data = data;
    this.id = id;
    this.name = name || this.findName();
  }

  findName() {
    let person = this.data.find(person => this.id === person.id).name
    domUpdates.displayUser(person)
    return person
  }

}

export default Customer;