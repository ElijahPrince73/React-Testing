import {renderComponent, expect} from '../test_helper';

import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
  it('has the correct class', (done) => {
    const component = renderComponent(CommentBox)
    expect(component).to.have.class ('comment-box');
    done()
  });

  it('Has a text area', (done) => {
    const component = renderComponent(CommentBox)
    expect(component.find('textarea')).to.exist;
    done()
  });
  it('Has a button', (done) => {
    const component = renderComponent(CommentBox)
    expect(component.find('button')).to.exist;
    done()
  });
});
