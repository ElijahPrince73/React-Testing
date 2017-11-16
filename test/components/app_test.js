import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';

// Used describe to group together similar test
describe('App', () => {

  let component

  beforeEach(() => {
    component = renderComponent(App)
  });

  it('Shows a comment box', (done) => {
    expect(component.find('.comment-box')).to.exist
    done()
  });

  it('shows a comment list', (done) => {
    expect(component.find('.comment-list')).to.exist
    done();
  });
})
