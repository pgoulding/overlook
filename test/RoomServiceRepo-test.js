import RoomServiceRepo from '../src/RoomServiceRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { roomServices } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'allRoomServiceOnDate', () => true)

describe('Room Service Repo', function () {
  let roomServiceRepo;

  beforeEach(function () {
    roomServiceRepo = new RoomServiceRepo(roomServices, '21/08/2019')
  })

  it('should be a function', function () {
    expect(RoomServiceRepo).to.be.a('function')
  })

  it('should be an instantiation of RoomServiceRepo', function () {
    expect(roomServiceRepo).to.be.an.instanceOf(RoomServiceRepo)
  })

  it('should take in the Room Service data, and a date', function () {
    expect(roomServiceRepo.data).to.be.equal(roomServices)
    expect(roomServiceRepo.date).to.equal('21/08/2019')
  })

  it('should display all the service charges for the supplied date', function () {
    expect(roomServiceRepo.services).to.be.an('array').and.have.length(3)
    // console.log(roomServiceRepo.services)
  })

})