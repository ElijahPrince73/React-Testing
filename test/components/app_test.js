import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// Used describe to group together similar test
describe('App', () => {

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    //create an instance of app
    const component = renderComponent(App);

    // Use expect to make a 'assertion' about a target
    expect(component).to.contain('React simple starter')
  })
})
