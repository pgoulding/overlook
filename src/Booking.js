import domUpdates from "./domUpdates";

class Booking {
  constructor(data, userID) {
    this.data = data;
    this.userID = userID;
  }

  findBookings() {
    let customerBookings = this.data.filter(bookingData => bookingData.userID === this.userID)
    if (customerBookings.length === 0) {
      return 'No Bookings Found'
    } else {
      domUpdates.allCustomersBookings(customerBookings)
      return customerBookings
    }
  }

  bookRoom(room, reservedDate, user) {
    let booking = {
      userID: user,
      date: reservedDate,
      roomNumber: room
    }
    this.data.push(booking)
    domUpdates.addRoom(booking)
    return booking
  }

}


export default Booking