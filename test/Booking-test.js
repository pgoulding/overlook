import Booking from '../src/Booking'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings } from '../data'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'allRoomServiceOnDate', () => true)

describe('Booking', function () {
  

  let booking;
  beforeEach(function () {
    booking = new Booking(bookings, 7, '21/08/2019')
  })

  it('should be a function', function () {
    expect(Booking).to.be.a('function')
  })

  it('should be an instantiation', function () {
    expect(booking).to.be.an.instanceOf(Booking)
  })


})