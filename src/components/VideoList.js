import React, { Component } from 'react';
import { connect } from 'react-redux';
import { List, Image, Dimmer, Loader } from 'semantic-ui-react';

import { playVideo } from '../store/actions/playVideo';

class VideoList extends Component {

    renderVideo = (video) => {
        return (
            <List animated verticalAlign="middle" key={video.etag}>
                <List.Item onClick={() => this.props.playVideo(video)}>
                    <Image src={video.snippet.thumbnails.default.url}  />
                    <List.Content>
                        <List.Header id="videoListHeader">{video.snippet.title}</List.Header>
                    </List.Content>
                </List.Item>
            </List>
        );
    };

    render() {
        return (
            <div className="videoList">
                {
                    this.props.loading && (
                        <Dimmer active inverted>
                            <Loader size="medium">Carregando...</Loader>
                        </Dimmer>
                    )
                }

                { this.props.videos.map(video => this.renderVideo(video)) }
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

const mapDispatchToProps = dispatch => {
    return {
        playVideo: (video) => dispatch(playVideo(video)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
