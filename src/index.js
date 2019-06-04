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

import Main from '../src/Main';
import UserRepo from '../src/UserRepo'
import RoomRepo from '../src/RoomRepo'
// import Customer from '../src/Customer';
// import RoomService from '../src/RoomService';
// import Room from '../src/Room';
// import BookingsRepo from '../src/BookingsRepo';
// import RoomRepo from '../src/RoomRepo'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import domUpdates from './domUpdates';
import RoomServiceRepo from './RoomServiceRepo';
import BookingRepo from './BookingsRepo';
import Customer from './Customer';
import RoomService from './RoomService';

// let roomRepo;
$(document).ready(function () {
  let userRepo;
  let main; 
  let orderRepo;
  let bookingRepo;
  let user;
  let roomService;

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

  console.log(todaysDate())

  setTimeout(() => {
    main = new Main(data.bookings, data.services, data.rooms, '15/07/2019')
    userRepo = new UserRepo(data.users)
    orderRepo = new RoomServiceRepo(data.services, '15/07/2019')
    bookingRepo = new BookingRepo(data.bookings)
  }, 3000);

  $('ul.tabs li').click(function () {
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#" + tab_id).addClass('current');
  })
  

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
        roomService.breakDown()
        roomService.perDate(todaysDate)
        roomService.forAllDays()
      })
    } else {
      domUpdates.promptNewUser()
    }
  })

  $('#orders__date-submit').on('click', function () {
    const reorder = () => {
      let dateSpec = $('#orders__date-select').val()
      let splitDate = dateSpec.split('-')
      let year = splitDate[0]
      let month = splitDate[1]
      let day = splitDate[2]
      return `${day}/${month}/${year}`
    }
    // console.log(reorder())
    orderRepo.totalServicesDate(reorder())
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