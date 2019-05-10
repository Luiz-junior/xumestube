import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';

class SearchBar extends Component {

    researchTerm = e => {
        if(e.keyCode === 13){
            const term = e.target.value;
            console.log(term);
        }
    };

    render() {
        return (
            <div className="searchBar">
                <Segment stacked>
                    <Input onKeyDown={(e) => this.researchTerm(e)} icon="search" size='large' placeholder="Search ..." />
                </Segment>
            </div>
        );
    }
}

export default SearchBar;