import { combineReducers } from 'redux';

import fetchVideoReducer from './fetchVideoReducer';

const rootReducer = combineReducers({
    fetchVideo: fetchVideoReducer,
});

export default rootReducer;
