import {expect} from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import { SAVE_COMMENT } from '../../src/actions/types';

describe('Comments Reducer', () => {
  it('handles action with unkown type', (done) => {
    expect(commentReducer(undefined, {})).to.eql([])
    done()
  });

  it('handles action of type SAVE_COMMENT', (done) => {
    const action = {type: SAVE_COMMENT, payload: 'new comment'};
    expect(commentReducer([], action)).to.eql(['new comment'])
    done()
  });
});
