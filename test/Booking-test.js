import Booking from '../src/Booking'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'noBookings', () => true)
chai.spy.on(domUpdates, 'allCustomersBookings', () => true)
chai.spy.on(domUpdates, 'addRoom', () => true)

describe('Booking', function () {
  
  let booking;
  beforeEach(function () {
    booking = new Booking(bookings, 7)
  })

  it('should be a function', function () {
    expect(Booking).to.be.a('function')
  })

  it('should be an instantance of Booking', function () {
    expect(booking).to.be.an.instanceOf(Booking)
  })

  it('should take in the bookings data, the userID for the info it\'s looking for, and a date', function () {
    expect(booking.data).to.be.equal(bookings)
    expect(booking.userID).to.be.equal(7)
  }) 

  it('should return all bookings that a customer has made', function () {
    expect(booking.findBookings()).to.be.a('array')
    expect(booking.findBookings()).to.be.eql([{ userID: 7, date: '24/08/2019', roomNumber: 7 }])

    const booking2 = new Booking(bookings, 223424, 'squirrels')
    expect(booking2.findBookings()).to.equal('No Bookings Found')
  })

  it('should be able to book a room for a cutomer', function () {
    expect(booking.data).to.have.length(20)
    expect(booking.bookRoom(1, '26/10/2019', 7)).to.eql({
      userID: 7,
      date: '26/10/2019',
      roomNumber: 1
    })
    expect(booking.data).to.have.length(21)

  })

  it('should be able to cancel their booking', function () {
    let booking2 = new Booking([...bookings], 2)
    expect(booking2.data).to.have.length(21)
    expect(booking2.cancelBooking(2, '25/08/2019', 2)).to.be.an('array')
    expect(booking2.data).to.have.length(20)
  })
})