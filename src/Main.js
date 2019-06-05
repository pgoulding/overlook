import domUpdates from "./domUpdates";

class Main {
  constructor(bookings, service, rooms, date) {
    this.bookingsData = bookings;
    this.servicesData = service;
    this.roomData = rooms;
    this.info = this.updateInfo(date)
  }

  roomsAvailable(specDate) {
    let rooms = this.roomData.length - this.bookingsData.filter(room => specDate === room.date).length
    return rooms;
  }

  debtsToday(specDate) {
    let services = this.servicesMoney(specDate) || 0
    let bookings = this.bookingsMoney(specDate) || 0
    let total = Math.floor(bookings += services);
    return total
  }

  servicesMoney(specDate) {
    let todaysInvoices = this.servicesData.filter(service => service.date === specDate)
    let money = todaysInvoices.reduce((acc, service) => {
      acc += service.totalCost
      return acc
    }, 0)
    return money
  }

  bookingsMoney(specDate) {
    let todaysInvoices = this.bookingsData.filter(booking => booking.date === specDate)
    let costPerRoom = todaysInvoices.map(room => {
      return { 
        roomNum: room.roomNumber, 
        roomCost: this.roomData.find(item => item.number === room.roomNumber).costPerNight
      }
    })

    let money = costPerRoom.reduce((acc, booking) => {
      acc += booking.roomCost
      return acc
    }, 0);
    return money
  }

  occupationPercentage(specDate) {
    let percent = this.roomsAvailable(specDate) / this.roomData.length * 100
    let display = 100 - percent;
    return Math.ceil(display);
  }

  updateInfo(day) {
    domUpdates.occupation(this.occupationPercentage(day))
    domUpdates.todaysServiceCharges(this.servicesMoney(day))
    domUpdates.todaysDebt(this.bookingsMoney(day))
    domUpdates.availableRoomsNum(this.roomsAvailable(day))
  }

}

// - Total Rooms Available for today's date
// - Total of debt's owed/earned for today's date
// - Percentage of rooms occupied for today's date
// If there are no valid results found, I will implement error handling for this case and all tab will continue to display generalized information.

// I must allow a visitor(hotel manager) to see all daily room service charges and booking information. This information should be available regardless of whether a valid customer has been selected.
export default Main;