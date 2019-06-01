import Room from '../src/Room'
import { rooms } from '../data'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'

const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'endGame', () => true)


describe('Rooms', function () {
  
  let room;

  beforeEach(function () {
    room = new Room(rooms, 3)
  })
    
  it('should be a function', function () {
    expect(Room).to.be.a('function')
  });
    
  it('should be an instantiation of room', function () {
    expect(room).to.be.a.instanceOf(Room)
  })

  it('should base it\'s data off the room number supplied', function () {
    expect(room.data).to.be.an('array')
    room.findRoom()
    expect(room.roomType).to.equal('single room')
    expect(room.bidet).to.equal(false)
    expect(room.bedSize).to.equal('queen')
    expect(room.numBeds).to.equal(1)
    expect(room.costPerNight).to.equal(344.89)
  })


});
