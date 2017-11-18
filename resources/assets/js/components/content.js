import React, { Component } from 'react';
import Popular from './partials/popular';
import Sidebar from './partials/Sidebar';


class Content extends Component {
    constructor(props){
        super(props)
        this.state ={
        popular : []
    }

    }

    popularData(){
        return this.props.renderlatest
    }
    render() {

        return (
            <section className="section">
                <div className="container">
                    <div className="tile is-ancestor">
                        <Popular popularData={this.popularData()} />
                        <Sidebar />
                    </div>
                </div>
            </section>
        );
    }

}

export default Content;