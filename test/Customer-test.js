import Customer from '../src/Customer'
import Tabs from '../src/Tabs'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'

const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'endGame', () => true)

describe('Customer', function () {

  it('should be a function', function () {
    expect(Customer).to.be.a('function');
  });

});