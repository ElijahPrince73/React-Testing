import {renderComponent, expect} from '../test_helper';

import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox)
  });

  it('has the correct class', (done) => {
    expect(component).to.have.class('comment-box');
    done()
  });

  it('Has a text area', (done) => {
    expect(component.find('textarea')).to.exist;
    done()
  });
  it('Has a button', (done) => {
    expect(component.find('button')).to.exist;
    done()
  });
});
