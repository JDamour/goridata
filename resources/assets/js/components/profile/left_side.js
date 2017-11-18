import React, { Component } from 'react';
import Request from 'superagent';
import Moment from 'react-moment';
class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state ={
            profile:[]
        }
    }
    componentDidMount(){
        Request.get('/api/profile/user/'+goridata.id)
            .then((response) => {
                this.setState({ profile: response.body });
            });
    }
    render() {
        return (
            <div className="column">
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-64x64">
                            <img src={this.state.profile.avatar} alt={this.state.profile.last_name} />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <h3 className="is-4"> {this.state.profile.last_name} {this.state.profile.first_name}</h3>
                            <span>Joined : </span>
                            <time><Moment fromNow>{this.state.profile.created_at}</Moment></time>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Sidebar;