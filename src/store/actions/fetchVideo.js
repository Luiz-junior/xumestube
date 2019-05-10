import youtubeSearch from 'youtube-api-v3-search';
import youtubeAPI from '../../api';

const API_KEY = youtubeAPI;

export const fetchVideoBegin = () => {
    return {
        type: 'FETCH_VIDEO_BEGIN',
        loading: true,
        error: false,
    }
}

export const fetchVideoSuccess = (videos) => {
    return {
        type: 'FETCH_VIDEO_SUCCESS',
        videos,
        loading: false, 
    }
}

export const fetchVideoError = () => {
    return {
        type: 'FETCH_VIDEO_ERROR',
        loading: false,
        error: true, 
    }
}

export const fetchVideo = (term) => {
    return dispatch => {
        console.log('term', term);
        dispatch(fetchVideoBegin());
        youtubeSearch(API_KEY, { q: term })
            .then(data => dispatch(fetchVideoSuccess(data.items)))
            .catch(() => dispatch(fetchVideoError()))
    };
};