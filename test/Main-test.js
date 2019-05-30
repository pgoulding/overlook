import Main from '../src/Main'
import Tabs from '../src/Tabs'
import chai from 'chai';
import spies from 'chai-spies'
import domUpdates from '../src/domUpdates'

const expect = chai.expect;
chai.use(spies)
// chai.spy.on(domUpdates, 'endGame', () => true)

describe('Main', function () {

  it('should be a function', function () {
    expect(Main).to.be.a('function');
  });
  
});
