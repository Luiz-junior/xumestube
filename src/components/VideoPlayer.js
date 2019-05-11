import React from 'react';
import { connect } from 'react-redux';
import { Advertisement, Embed} from 'semantic-ui-react';

const VideoPlayer = (props) => {
    return (
        <div className="videoPlayer">
            {
                !props.video.id && (
                    <Advertisement  style={{ 'height': '485px', 'width': '860px' }} 
                        unit='top banner'  
                        test='Escolha um banner para reproduzir'
                    />
                )
            }

            {
                props.video.id && (
                    <div>
                        <Embed id={props.video.id.videoId} source='youtube' placeholter="" />
                        <p className="videoTitle">{props.video.snippet.title}</p>
                        {/* <p className="videoDescription">{props.video.snippet.description}</p> */}
                    </div>
                )
            }

        </div>
    );
};

const mapStateToProps = state => {
    return {
        video: state.playVideo.video
    }
};

export default connect(mapStateToProps, null)(VideoPlayer);