import RoomService from '../src/RoomService'
import { roomServices } from '../data'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'

describe('Room Service', function () {
  
  let roomService;

  beforeEach(function () {
    roomService =  new RoomService(roomServices, 20)
  })

  it('should be a function', function () {
    expect(RoomService).to.be.a('function')
  })
 
  it('should be an instance of RoomService', function () {
    expect(roomService).to.be.an.instanceOf(RoomService)
  })

  it('should pull in room service data, and a userID', function() {
    expect(roomService.data).to.be.an('array')
    expect(roomService.customer).to.be.a('number')
  })

  it('should give a price breakdown for the customers room service data with ', function () {
    expect(roomService.breakDown()).to.be.a('array').and.have.length(1)
  })

  it('should find out how much a user has spent for a specific date', function () {
    expect(roomService.perDate('21/08/2019')).to.be.a('number')
    expect(roomService.perDate('21/08/2019')).to.equal(9.48)
  })

  it('should find how much a user has spent on room service for all time', function () {
    expect(roomService.forAllDays()).to.be.a('number')
    expect(roomService.forAllDays()).to.equal(17.26)
  })

})

const expect = chai.expect;
chai.use(spies)