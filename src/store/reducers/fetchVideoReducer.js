
const initialState = {
    videos: [],
    loading: false,
    error: false,
};

const fetchVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VIDEO_BEGIN':
            return { ...state, carregando: true }            
        case 'FETCH_VIDEO_SUCCESS':
            return { ...state, videos: action.videos, loading: false,  }
        case 'FETCH_VIDEO_ERROR':
            return { ...state, error: true }
        default:
            return state;
    }    
}

export default fetchVideoReducer;