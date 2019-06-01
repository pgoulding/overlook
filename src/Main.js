import domUpdates from "./domUpdates";

class Main {
  constructor(bookings, service, rooms, date) {
    this.bookingsData = bookings;
    this.servicesData = service;
    this.roomData = rooms;
    this.date = date;
    this.roomsAvailable = this.roomsAva()
    this.debts = this.debtsToday()
    this.occupationRate = this.occupationPercentage()
  }

  roomsAva() {
    let rooms = ([...this.roomData].length - this.bookingsData.filter(room => this.date === room.date).length)
    if (rooms) {
      domUpdates.availableRoomsNum(rooms)
      return rooms;
    } else {
      domUpdates.availableRoomsNum('an error has occured, please contact you web administrator.')
      return 'an error has occured, please contact you web administrator.'
    }
  }

  debtsToday() {
    let services = this.servicesMoney()
    let bookings = this.bookingsMoney()
    let total = Math.floor(bookings += services);
    if (isNaN(services) === true && isNaN(bookings) === false) {
      domUpdates.todaysDebt(bookings)
      return bookings
    } else if (isNaN(bookings) === true && isNaN(services) === false) {
      domUpdates.todaysDebt(services)
      return services
    } else if (isNaN(total) === false) {
      domUpdates.todaysDebt(total)
      return total
    } else {
      domUpdates.todaysDebt('an error has occured, please contact you web administrator.')
      return 'an error has occured, please contact you web administrator.'
    }

  }

  servicesMoney() {
    let todaysInvoices = [...this.servicesData].filter(service => service.date === this.date)
    let money = todaysInvoices.reduce((acc, service) => {
      acc += service.totalCost
      return acc
    }, 0)
    if (todaysInvoices.length !== 0) {
      domUpdates.todaysServiceCharges(money)
      return money
    } else {
      domUpdates.todaysServiceCharges('Nothing Today')
      return 'Nothing Today'
    }
  }

  bookingsMoney() {
    let todaysInvoices = [...this.bookingsData].filter(booking => booking.date === this.date)
    let costPerRoom = todaysInvoices.map(room => {
      return { 
        roomNum: room.roomNumber, 
        roomCost: [...this.roomData].find(item => item.number === room.roomNumber).costPerNight
      }
    })

    let money = costPerRoom.reduce((acc, booking) => {
      acc += booking.roomCost
      return acc
    }, 0);
    if (money) {
      return money
    } else {
      return 'Nothing Today'
    }
  }

  occupationPercentage() {
    let percent = Math.floor((this.roomsAvailable / this.roomData.length) * 100);
    return percent;
  }

}

// - Total Rooms Available for today's date
// - Total of debt's owed/earned for today's date
// - Percentage of rooms occupied for today's date
// If there are no valid results found, I will implement error handling for this case and all tab will continue to display generalized information.

// I must allow a visitor(hotel manager) to see all daily room service charges and booking information. This information should be available regardless of whether a valid customer has been selected.
export default Main;