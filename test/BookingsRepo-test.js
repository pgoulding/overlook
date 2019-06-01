import BookingRepo from '../src/BookingsRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings } from '../data'
const expect = chai.expect;
chai.use(spies)

describe('Booking Repo', function () {
  
  let bookingRepo;

  beforeEach(function () {
    bookingRepo = new BookingRepo(bookings)
  })

  it('should be a function', function () {
    expect(BookingRepo).to.be.a('function')
  })

  it('should be an instance of bookingRepo', function () {
    expect(bookingRepo).to.be.an.instanceOf(BookingRepo)
  })

  it('should take in data', function () {
    expect(bookingRepo.data).to.be.equal(bookings)
  })

  it('should find the most booked date', function () {
    bookingRepo.mostBookedDate()
    console.log(bookingRepo.mostBookedDate())
  })

})