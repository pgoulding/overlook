import $ from 'jquery';

const domUpdates = {
  availableRoomsNum (rooms) {
    console.log('rooms', rooms)
    $('#main__rooms-available').html(`<h3>Today we have ${rooms} rooms available</h3>`)
  },
  todaysDebt (money) {
    console.log('money', money)
    $('#main__todays-income').html(`<h3>We have made $${parseFloat(money).toFixed(2)} total today</h3>`)
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
    if (services.length === 0) {
      $('#orders__todays-room-service').text('No Orders on that date')
    } else {
      services.forEach(service => {
        $('#orders__todays-room-service').text('')
        $('#orders__todays-room-service').append(`<tr>
          <td>${service.food}</td><td>$${service.totalCost}</td>
          </tr>`)
      })
    }
  },

  showLeastBooked(date) {
    $('#rooms__least-booked').html(`<h3>The Most Booked Date is ${date}</h3>`)
  },

  showMostBooked(date) {
    $('#rooms__most-booked').html(`<h3>The date with the most rooms open is ${date}</h3>`)
  },

  displayUser(displayUser) {
    $('#customer__name-current').text('')
    $('#customer__name-current').html(` <li class="tab-link" id="customer__name-current" data-userID="${displayUser.id}" data-tab="tab__current-customer">Customer: ${displayUser.name}</li>`)
    $('#cutomer__orders-name').text(`${displayUser.name}'s Food Orders`)
  },

  ordersBreakDown(orders) {
    $('#orders__customers-room-service').text('')
    orders.forEach(order => {
      $('#orders__customers-room-service').append(`<tr>
          <td>${order.food}</td><td>$${parseFloat(order.totalCost).toFixed(2)}</td><td>${order.date}</td>
          </tr>`)
    })
  },

  totalOrdersCost(cost) {
    $('#customer__orders-total').text(`Total: ${parseFloat(cost).toFixed(2)}`)
  },

  allCustomersBookings(bookings) {
    bookings.forEach(booking => {
      $('#rooms__customer-booked-current').append(`<tr>
          <td>${booking.roomNumber}</td><td>${booking.date}</td><td><button data-id="${booking.userID}" id="cancel-booking">Cancel Booking</button></td>
          </tr>`)
    })
  },

  roomTypes(rooms, dateSelect) {
    $('#rooms__book-room').text('')
    rooms.forEach(room => {
      $('#rooms__book-room').append(`<tr>
          <td>${room.number}</td><td>${room.bedSize}</td><<td>${room.numBeds}</td><td>${room.bidet}</td><td>$${room.costPerNight}</td><td><button class="book-this-room" data-date="${dateSelect}" data-room=${room.number}>Book It</button>
          </tr>`)
    })
  },

  addRoom(room) {
    $('#rooms__customer-booked').append(`<tr>
          <td>${room.roomNumber}</td><td>$${room.date}</td><button data-id="${room.userID}" id="cancel-booking">Cancel Booking</button>
          </tr>`)
  }


}

export default domUpdates