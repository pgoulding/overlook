class Customer {
  constructor(data, id) {
    this.data = data;
    this.id = id;
    this.name = (this.findName())
  }
  findName() {
    let person = this.data.find(person => this.id === person.id).name
    return person
  }
}

export default Customer;