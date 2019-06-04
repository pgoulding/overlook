import domUpdates from "./domUpdates";

class Booking {
  constructor(data, userID, date) {
    this.data = data;
    this.userID = userID;
    this.date = date;
  }

  findBookings() {
    let customerBookings = this.data.filter(bookingData => bookingData.userID === this.userID)
    if(customerBookings.length === 0) {
      domUpdates.noBookings()
      return 'No Bookings Found'
    } else {
      domUpdates.allCustomerBookings(customerBookings)
      return customerBookings
    }
  }
}


export default Booking