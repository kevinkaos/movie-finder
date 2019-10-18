import { POST_MDB_CONFIG } from '../actions/types';

const initialState = {
  apiKey: '150d7fd25460a548b06c13686a6bad55'
};

const PostMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_MDB_CONFIG:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default PostMDBConfig;