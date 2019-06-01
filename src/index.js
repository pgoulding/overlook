// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********
const data = {};

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/users/users')
.then(response => response.json())
.then(users => data.users = users.data)
.catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/rooms/rooms')
.then(response => response.json())
.then(rooms => data.rooms = rooms.data)
.catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/bookings/bookings')
.then(response => response.json())
.then(bookings => data.bookings = bookings.data)
.catch(err => console.error(err))

fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1903/room-services/roomServices')
.then(response => response.json())
.then(services => data.services = services.data)
.catch(err => console.error(err))

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

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

import Main from '../src/Main';
import UserRepo
import Customer from '../src/Customer';
import RoomService from '../src/RoomService';
import Room from '../src/Room';
import BookingsRepo from '../src/BookingsRepo';
// import RoomRepo from '../src/RoomRepo'

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


$(document).ready(function () {
  
  console.log(todaysDate())

  const main = new Main(data.)
  const allUsers = new UserRepo(data.users)
  const allRooms = new RoomRepo(data.rooms)
  const allBookings = new BookingsRepo(data.bookings)
  const allServices = new RoomServiceRepo(data.roomservice)
})

// $('#btn_customer-select').on('click', function () {
//   let user = $('input__user-select').val()
//   const customer = new Customer(usersData, user)
//   const room = new Room(roomsData, user)
//   const roomService = new RoomService(roomServicesData, user)
//   const booking = new Booking(bookingsData, user)
// })
