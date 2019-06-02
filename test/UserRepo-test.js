import UserRepo from '../src/UserRepo'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { users } from '../data'
const expect = chai.expect;
chai.use(spies)
chai.spy.on(domUpdates, 'searchCustomers', () => true)
chai.spy.on(domUpdates, 'promptNewUser', () => true)


describe('UserRepo', function () {

  let userRepo;
  beforeEach(function () {
    userRepo = new UserRepo(users)
  })

  it('should be a function', function () {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of userRepo', function () {
    expect(userRepo).to.be.an.instanceOf(UserRepo)
  })

  it('should filter users based on input', function () {
    expect(userRepo.showUsers('an')).to.be.an('array').and.have.length(5)
  })

  it('should return the user obj, if it\'s the only one matching (case insenstitve)', function () {
    expect(userRepo.showUsers('anya upT')).to.eql([{ id: 3, name: 'Anya Upton' }])
  })


  it('should prompt you to create a new User if it can\'t find the name you\'re looking for', function () {
    expect(userRepo.showUsers('Diedrick Featherbottoms')).to.equal('No Users Found, would you like to add one?')
  })

});