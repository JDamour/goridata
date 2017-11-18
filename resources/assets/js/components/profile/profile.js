import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import Footer  from "../Footer";
import Sidebar  from "./left_side";
import Moment from 'react-moment';
import NumericLabel from 'react-pretty-numbers';

var option = {
    'shortFormat':true,
};
class Profile extends Component {
    constructor(props){
        super(props)
        this.state ={
            developers :[]
        }
    }
    componentDidMount() {
        Request.get('/api/profile/'+goridata.id)
            .then((response) =>  {
                this.setState({ developers:response.body });
            });
    }
    renderContent(){
        return  this.state.developers.map((data, index) =>{
        return (
            <div className="column is-5"  key={index}>
            <div className="box bgbox">
            <article className="media">
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href={`/profile/${data.user_id}/${data.first_name}`}><strong>{data.first_name} / </strong>
                            </a>
                            <a href={`/data/${data.datasetId}`}><small>{data.name}</small>
                            </a>
                            <small className="is-pulled-right"><Moment fromNow>{data.created_at}</Moment></small>
                            <br /> <a className="has-text-grey-dark" href={`/data/${data.datasetId}`}>
                            {data.description.substr(0,25)}
                        </a>
                        </p>
                    </div>
                    <nav className="level is-mobile">
                        <div className="level-left">
                            <a className="level-item">

                                                    <span className="icon is-small">
                                                        <i className="fa fa-star"></i>
                                                    </span>
                                <span className="is-small"><NumericLabel params={option}>{data.stars_counter}</NumericLabel></span>
                            </a>
                        </div>
                    </nav>
                </div>
            </article>
        </div>
        </div>
            )
    })
    }

    render() {
        return (
            <div>
            <section className="section">
                <div className="container">
                    <div className="columns">
                        <Sidebar />
                                <div className="column is-four-fifths-desktop">
                                    <div className="tabs">
                                        <ul>
                                            <li className="is-active">
                                                <a>
                                                    <span className="icon is-small">
                                                        <i className="fa fa-list"></i>
                                                    </span>
                                                    <span>Overwiew</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="columns is-multiline">

                                            {this.renderContent()}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </section>

                                    <Footer />
</div>
        );
    }

}

export default Profile;

if (document.getElementById('profile')) {
    ReactDOM.render(<Profile />, document.getElementById('profile'));
}