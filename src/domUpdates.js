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
    $('#customer__name-current').text(`Customer: ${displayUser}`)
    $('#cutomer__orders-name').text(`${displayUser}'s Food Orders`)
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

  // allCustomersBookings(bookings) {
  //   bookings.forEach(booking => {
  //     $('#orders__customers-room-service').append(`<tr>
  //         <td>${order.food}</td><td>$${parseFloat(order.totalCost).toFixed(2)}</td><td>${order.date}</td>
  //         </tr>`)
  //   })
  // },

  roomTypes(rooms) {
    $('#rooms__book-room').text('')

    rooms.forEach(room => {
      $('#rooms__book-room').append(`<tr>
          <td>${room.number}</td><td>${room.bedSize}</td><<td>${room.numBeds}</td><td>${room.bidet}</td><td>$${room.costPerNight}</td>
          </tr>`)
    })
  },


}

export default domUpdates