import Main from '../src/Main'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { bookings, rooms, roomServices } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'availableRoomsNum', () => true)
chai.spy.on(domUpdates, 'todaysDebt', () => true)
chai.spy.on(domUpdates, 'todaysServiceCharges', () => true)


describe('Main', function () {

  let main;

  beforeEach(function () {
    main = new Main(bookings, roomServices, rooms, '21/10/2019')
  })

  it('should be a function', function () {
    expect(Main).to.be.a('function');
  });
  
  it('should be an instance of Main', function () {
    expect(main).to.be.an.instanceOf(Main)
  })

  it('should show how many rooms are still available on a specific date', function () {
    expect(rooms.length).to.equal(22)
    expect(main.roomsAvailable).to.equal(21)
  })

  it('should show how the debts owed/earned for services for todays date', function () {
    expect(main.servicesMoney()).to.equal(17.05)
  })

  it('should show how the debts owed/earned for bookings for todays date', function () {
    expect(main.bookingsMoney()).to.equal(258.1)
  })

  it('should show how the total debts owed/earned for todays date', function () {
    expect(main.debtsToday()).to.equal(275)
  })

  it('should show the current occupation rate', function () {
    expect(main.occupationRate).to.be.a('number')
    expect(main.occupationRate).to.be.equal(95)
  })

  it('should have error handling on all methods', function () {
    let main2 = new Main(bookings, roomServices, rooms)
    expect(main2.debts).to.eql('an error has occured, please contact you web administrator.')
    expect(main2.occupationRate).to.equal(100)
    
  })
  
  it('should return just the room service total if no rooms are booked', function () {
    let main3 = new Main(bookings, roomServices, rooms, '24/12/2019')
    expect(main3.debts).to.equal(24.24)
  })

  

});
