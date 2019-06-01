import Customer from '../src/Customer'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'
import { users } from '../data'
const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'endGame', () => true)

describe('Customer', function () {

  let customer;
  beforeEach(function () {
    customer = new Customer(users, 5)
  })

  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

  it('should be an instance of Customer', function () {
    expect(customer).to.be.an.instanceOf(Customer)
  })

  it('should find the userName based on the userID', function () {
    expect(customer.name).to.equal('Reginald Schaden')
  })

});