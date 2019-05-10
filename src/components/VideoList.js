import React, { Component } from 'react';
import { connect } from 'react-redux';

import { List, Image, } from 'semantic-ui-react';

class VideoList extends Component {

    renderVideo = (video) => {
        return (
            <List animated verticalAlign="middle" key={video.id.videoId}>
                <List.Item>
                    <Image src={video.snippet.thumbnails.default.url}  />
                    <List.Content>
                        <List.Header>{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        );
    };

    render() {
        return (
            <div className="videoList">
            { this.props.videos.map(video => { 
                return this.renderVideo(video) 
            }) 
            }
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        videos: state.fetchVideo.videos,
        loading: state.fetchVideo.loading,
        error: state.fetchVideo.error,
    }
};

export default connect(mapStateToProps, null)(VideoList);