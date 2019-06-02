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

})