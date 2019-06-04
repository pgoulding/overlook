import Booking from '../src/Booking'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'noBookings', () => true)
chai.spy.on(domUpdates, 'allCustomerBookings', () => true)

describe('Booking', function () {
  
  let booking;
  beforeEach(function () {
    booking = new Booking(bookings, 7, '21/08/2019')
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
    expect(booking.date).to.be.equal('21/08/2019')
  } ) 

  it('should return all bookings that a customer has made', function () {
    expect(booking.findBookings()).to.be.a('array')
    expect(booking.findBookings()).to.be.eql([{ userID: 7, date: '24/08/2019', roomNumber: 7 }])

    const booking2 = new Booking(bookings, 223424, 'squirrels')
    expect(booking2.findBookings()).to.equal('No Bookings Found')
  })

  // it('should')
})