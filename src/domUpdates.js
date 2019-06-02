import $ from 'jquery';

const domUpdates = {
  availableRoomsNum (rooms) {
    $('#main__rooms-available').html(`<h3>Today we have ${rooms} rooms available</h3>`)
  },
  todaysDebt (money) {
    $('#main__todays-income').html(`<h3>We have made $${money} total today</h3>`)
  },
  todaysServiceCharges (money) {
    $('#main__todays-service-charges').html(`<h3>There has been $${parseFloat(money).toFixed(2)} of services charges today</h3>`)
  },

  occupation(percent) {
    $('#main__occupation-rate').html(`<h3>We are ${percent}% unoccupied today`)
  },

  searchCustomers(users) {

    $('#no-users').text('')
    $('.tab__customers-output').text('')
    users.forEach(user => {
      $('.tab__customers-output').append(`<li class="customer__search-data" data-id="${user.id}">${user.name}</li>`)
    })
  },

  promptNewUser() {
    $('#no-users').text('No Users Found')
    $('.tab__customers-output').text('No Users Found')
  },

  allRoomServiceOnDate(services) {
    services.forEach(service => {
      $('#orders__todays-room-service').append(`<tr>
        <td>${service.food}</td><td>$${service.totalCost}</td>
        </tr>`)
    })
  },

  showLeastBooked(date) {
    $('#rooms__least-booked').html(`<h3>The Most Booked Date is ${date}</h3>`)
  },

  showMostBooked(date) {
    $('#rooms__most-booked').html(`<h3>The date with the most rooms open is ${date}</h3>`)
  }
}

export default domUpdates