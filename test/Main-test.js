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
chai.spy.on(domUpdates, 'occupation', () => true)


describe('Main', function () {

  let main;

  beforeEach(function () {
    main = new Main(bookings, roomServices, rooms, '21/08/2019')
  })

  it('should be a function', function () {
    expect(Main).to.be.a('function');
  });
  
  it('should be an instance of Main', function () {
    expect(main).to.be.an.instanceOf(Main)
  })

  it('should show how many rooms are still available on a specific date', function () {
    expect(rooms.length).to.equal(20)
    expect(main.roomsAvailable('21/08/2019')).to.equal(17)
  })

  it('should show how the debts owed/earned for services for todays date', function () {
    expect(main.servicesMoney('21/08/2019')).to.eql(34.94)
  })

  it('should show how the debts owed/earned for bookings for todays date', function () {
    expect(main.bookingsMoney('21/08/2019')).to.equal(774.92)
  })

  it('should show how the total debts owed/earned for todays date', function () {
    expect(main.debtsToday('21/08/2019')).to.eql(809)
  })

  it('should show the current occupation rate', function () {
    expect(main.occupationPercentage('21/08/2019')).to.be.a('number')
    expect(main.occupationPercentage('21/08/2019')).to.be.equal(15)
  })

  it('should have error handling on all methods', function () {
    let main2 = new Main(bookings, roomServices, rooms, '21/08/3019')
    expect(main2.debtsToday('21/08/3019')).to.eql(0)
    expect(main2.occupationPercentage('21/08/3019')).to.equal(0)
    
  })
  
  // it('should return just the room service total if no rooms are booked', function () {
  //   let main3 = new Main(bookings, roomServices, rooms, '21/08/2019')
  //   expect(main3.debts).to.equal(809)
  // })



});
