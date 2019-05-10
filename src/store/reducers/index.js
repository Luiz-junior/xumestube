import { combineReducers } from 'redux';

import fetchVideoReducer from './fetchVideoReducer';
import playVideoReducer from './playVideoReducer';

const rootReducer = combineReducers({
    fetchVideo: fetchVideoReducer,
    playVideo: playVideoReducer,
});

export default rootReducer;
