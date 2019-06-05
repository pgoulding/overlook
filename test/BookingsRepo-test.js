import BookingRepo from '../src/BookingsRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings, rooms } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'showMostBooked', () => true)
chai.spy.on(domUpdates, 'showLeastBooked', () => true)
chai.spy.on(domUpdates, 'roomTypes', () => true)
chai.spy.on(domUpdates, 'addRoom', () => true)

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

  it('should count how many rooms are booked per date', function () {
    expect(bookingRepo.bookingDateCount()).to.be.an('array')
    expect(bookingRepo.bookingDateCount()).to.have.length(8)
  })

  it('should find the most booked date', function () {
    expect(bookingRepo.mostBookedDate()).to.equal('25/08/2019')
  })

  it('should find the least popular date', function () {
    expect(bookingRepo.leastBookedDate()).to.equal('28/09/2019')
  })

  it('should find the rooms available on date', function () {
    expect(bookingRepo.findRoomsForDate('25/08/2019')).to.be.an('array');
    expect(bookingRepo.findRoomsForDate('25/08/2019')).to.have.length(16);
  })

  it('should find the rooms by whatevs', function () {
    expect(bookingRepo.findRoomsByType('junior suite', rooms, '25/08/2019')).to.have.length(5)
  })

  it('should be able to book a room for a cutomer', function () {
    expect(bookingRepo.data).to.have.length(20)
    expect(bookingRepo.bookRoom(1, '26/10/2019', 7)).to.eql({
      userID: 7,
      date: '26/10/2019',
      roomNumber: 1
    })
    expect(bookingRepo.data).to.have.length(21)
    
  })

})