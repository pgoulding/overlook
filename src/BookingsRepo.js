import domUpdates from "./domUpdates";

class BookingRepo {
  constructor(data) {
    this.data = data;
    this.mostBooked = this.mostBookedDate()
    this.leastBooked = this.leastBookedDate()
  }

  bookingDateCount() {
    let dates = this.data.map(book => book.date)
    let popularDate = dates.reduce((acc, date) => {
      acc[date] = ++acc[date] || 1
      return acc
    }, {})
    let datesCount = Object.entries(popularDate).sort((a, b) => a[1] - b[1])
    return datesCount
  }

  leastBookedDate() {
    let leastBooked = this.bookingDateCount().shift()
    domUpdates.showLeastBooked(leastBooked[0])
    return leastBooked[0]
  }

  mostBookedDate() {
    let mostBooked = this.bookingDateCount().pop()
    domUpdates.showMostBooked(mostBooked[0])
    return mostBooked[0]
  }

}


export default BookingRepo