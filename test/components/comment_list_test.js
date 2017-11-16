import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment-list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new comment'] }
    component = renderComponent(CommentList, null, props)
  });

  it('Should show an LI for each comment', (done) => {
    expect(component.find('li').length).to.equal(2)
    done()
  });

  it('Should show each comment that is provided', (done) => {
    expect(component).to.contain('new comment')
    expect(component).to.contain('other new comment')
    done()
  });
});
