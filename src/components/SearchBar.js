import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { fetchVideo } from '../store/actions/fetchVideo';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.props.fetchVideo('Xumes Udemy');
    };

    researchTerm = e => {
        if(e.keyCode === 13){
            const term = e.target.value;
            this.props.fetchVideo(term);
        }
    };

    render() {
        return (
            <div className="searchBar">
                <Segment stacked>
                    <Input 
                        onKeyDown={(e) => this.researchTerm(e)} 
                        icon="search" 
                        size='large' 
                        placeholder="Pesquisar" 
                    />
                </Segment>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchVideo: (term) => dispatch(fetchVideo(term)),
    }
};

export default connect(null, mapDispatchToProps)(SearchBar);