import {expect} from '../test_helper';
import {SAVE_COMMENT} from '../../src/actions/types';
import {saveComment} from '../../src/actions';

describe('Action', () => {
  describe('saveComment', () => {
    it('has the correct type', (done) => {
      const action = saveComment()
      expect(action.type).to.equal(SAVE_COMMENT)
      done()
    });
    it('has the correct payload', (done) => {
      const action = saveComment('new comment')
      expect(action.payload).to.equal('new comment')
      done()
    });
  });
});
