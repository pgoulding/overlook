import $ from 'jquery';

const domUpdates = {
  availableRoomsNum (rooms) {
    $('#main__rooms-available').html(`<h3>Today we have ${rooms} rooms available</h3>`)
  },
  todaysDebt (money) {
    $('#main__todays-income').html(`<h3>We have made $${money} total today</h3>`)
  },
  todaysServiceCharges (money) {
    $('#main__todays-service-charges').html(`<h3>There has been $${money} of services charges today</h3>`)
  },

  occupation(percent) {
    $('#main__occupation-rate').html(`<h3>We have %${percent} unoccupied today`)
  },

  searchCustomers(input) {
    $('#tab__customers-output ul').html(`<h3>`)
  }
}

export default domUpdates