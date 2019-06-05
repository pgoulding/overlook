/* eslint-disable max-len */

const data = {};

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
  .then(response => response.json())
  .then(remote => data.users = remote.users)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
  .then(response => response.json())
  .then(remote => data.rooms = remote.rooms)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
  .then(response => response.json())
  .then(remote => data.bookings = remote.bookings)
  .catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
  .then(response => response.json())
  .then(remote => data.services = remote.roomServices)
  .catch(err => console.error(err))


// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/turing-logo.png'

import Main from '../src/Main';
import UserRepo from '../src/UserRepo'
import Customer from './Customer';
import RoomRepo from '../src/RoomRepo'
import Room from '../src/Room';
import RoomServiceRepo from './RoomServiceRepo';
import RoomService from '../src/RoomService';
import BookingRepo from './BookingsRepo';
import Booking from './Booking'
import domUpdates from './domUpdates';

$(document).ready(function () {
  let userRepo;
  let main; 
  let orderRepo;
  let bookingRepo;
  let user;
  let roomService;
  let customerBooking;

  const todaysDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd
    }

    if (mm < 10) {
      mm = '0' + mm
    }

    let thisDay = dd + '/' + mm + '/' + yyyy;
    return thisDay;
  }

  setTimeout(() => {
    main = new Main(data.bookings, data.services, data.rooms, todaysDate())
    userRepo = new UserRepo(data.users)
    orderRepo = new RoomServiceRepo(data.services, todaysDate)
    bookingRepo = new BookingRepo(data.bookings)
  }, 3000);

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');
    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');
    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  
  $('#customer__booked-info').hide()

  const reorder = dateSpec => {
    let splitDate = dateSpec.split('-')
    let year = splitDate[0]
    let month = splitDate[1]
    let day = splitDate[2]
    return `${day}/${month}/${year}`
  }

  $('#tab__customers-search').on('input', function () {
    let typed = $('#tab__customers-search').val()
    if (typed.length > 1) {
      userRepo.showUsers(typed)
      $('.tab__customers-output li').on('click', function () {
        let customerID = $(this).attr('data-id')
        let parsedID = parseInt(customerID)
        console.log(parsedID)
        user = new Customer(data.users, parsedID, undefined)
        roomService = new RoomService(data.services, parsedID)
        customerBooking = new Booking(data.bookings, parsedID)
        customerBooking.findBookings()
        roomService.breakDown()
        // roomService.perDate(todaysDate)
        roomService.forAllDays()
        $('#customer__booked-info').show()
        $('.cancel-booking').on('click', function () {
          console.log('clicked')
          let roomNum = $(this).data('room')
          let dateSelect = $(this).data('date')
          customerBooking.cancelBooking(roomNum, dateSelect, user.id)
          $(this).closest('tr').remove()
        })
      })
    } else {
      domUpdates.promptNewUser()
    }
  })


  $('#orders__date-submit').on('click', function () {
    // console.log(reorder())
    let selectedDate = $('#orders__date-select').val()
    orderRepo.totalServicesDate(reorder(selectedDate))
  })
  $('#book-room').on('click', function () {
    let roomType = $('#booking-form input[type=radio][name=room-type]:checked').val()
    let dateSelected = $('#room-book-date').val()
    bookingRepo.findRoomsByType(roomType, data.rooms, reorder(dateSelected))
    $('.book-this-room').on('click', function () {
      let roomNum = $(this).data('room')
      let dateSelect = $(this).data('date')
      customerBooking.bookRoom(roomNum, dateSelect, user.id)
      $('.cancel-booking').on('click', function () {
        console.log('clicked')
        let roomNum = $(this).data('room')
        let dateSelect = $(this).data('date')
        customerBooking.cancelBooking(roomNum, dateSelect, user.id)
        $(this).closest('tr').remove()
      })
      main.updateInfo(todaysDate())
      bookingRepo.mostBookedDate()
      bookingRepo.leastBookedDate()
      $(this).closest('tr').remove()
    })
  })


})
// const allUsers = new UserRepo(data.users)
// const allRooms = new RoomRepo(data.rooms)
// const allBookings = new BookingsRepo(data.bookings)
// const allServices = new RoomServiceRepo(data.roomservice)

// const showCustomerData = user => {
//   const customer = new Customer(usersData, user)
//   const room = new Room(roomsData, user)
//   const roomService = new RoomService(roomServicesData, user)
//   const booking = new Booking(bookingsData, user)
// }