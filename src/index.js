/* eslint-disable max-len */
import $ from 'jquery';
import './css/base.scss';
import './images/background-img.png'

import Main from '../src/Main';
import UserRepo from '../src/UserRepo'
import Customer from './Customer';
import Room from '../src/Room';
import RoomServiceRepo from './RoomServiceRepo';
import RoomService from '../src/RoomService';
import BookingRepo from './BookingsRepo';
import Booking from './Booking'
import domUpdates from './domUpdates';
import data from './fetchData'

$('.container').hide()

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
    $('#welcome-screen').hide()
    $('.container').fadeIn(700)
    $('#booking-output').hide()
    $('#customer__rooms-available').hide()
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
        roomService = new RoomService(data.services, data.menu, parsedID)
        customerBooking = new Booking(data.bookings, parsedID)
        customerBooking.findBookings()
        roomService.updateInfo(todaysDate())
        domUpdates.displayMenu(data.menu)
        $('#room__service-menu button').click(function () {
          let sammich = $(this).data('food')
          roomService.orderFood(todaysDate(), sammich)
          roomService.updateInfo(todaysDate())
        })
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
    let selectedDate = $('#orders__date-select').val()
    if (user) {
      orderRepo.totalServicesDate(reorder(selectedDate))
    } else {
      alert('select a customer first')
    }
  })
  $('#book-room').on('click', function (e) {
    e.preventDefault()
    if (user) {
      let roomType = $('#booking-form input[type=radio][name=room-type]:checked').val()
      let dateSelected = $('#room-book-date').val()
      $('#booking-output').slideDown()
      $('#customer__rooms-available').show()
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
    }
  })
})
