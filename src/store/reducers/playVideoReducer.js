
const initialState = {
    video: {},
};

const playVideo = (state = initialState, action) => {
    switch(action.type) {
        case 'PLAY_VIDEO':
            return { ...state, video: action.video }
        default:
            return state;
    }
};

export default playVideo;