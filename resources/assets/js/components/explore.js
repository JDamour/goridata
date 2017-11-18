/**
 * Created by mpatswe on 11/11/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import Footer from './Footer';
import Tabs from './partials/Tabs';
import Tab from './partials/Tab';
import Moment from 'react-moment';
import NumericLabel from 'react-pretty-numbers';
var option = {
    'shortFormat':true,
};

class Explore extends Component {
    constructor(props){
        super(props)
        this.state = {
            topics:[],
            topic:goridata.topic
        }

    }
    componentDidMount() {

        Request.get('/api/explore/'+this.state.topic)
            .then((response) => {
                this.setState({
                    topics: response.body
                });
            });
    }
    renderTipocs() {
        if(Object.keys(this.state.topics).length != 0) {
            return this.state.topics.map((data, index) => {
                return (
                    <div className="box" key={index}>
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={data.avatar} alt="Image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <a href={`/profile/${data.user_id}/${data.first_name}`}><strong>{data.first_name} / </strong>
                                        </a>
                                        <a href={`/data/${data.datasetId}`}><small>{data.name}</small>
                                        </a>
                                        <a href={`/star/${data.datasetId}`} className="button is-small is-primary is-outlined star-pad">
                                                             <span className="icon is-small">
                                                              <i className="fa fa-star"></i>
                                                            </span><span>Star</span></a>
                                        <small className="is-pulled-right"><Moment fromNow>{data.created_at}</Moment></small>
                                        <br /> <a className="has-text-grey-dark" href={`/data/${data.datasetId}`}>
                                        {data.description.substr(0,120)}
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
                )
            })
        }else{
            return <div className="notification is-danger">
                We couldn’t find any Dataset for {goridata.topic}
            </div>
        }
    }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <div className="columns">
                            <div className="column is-four-fifths-desktop">
                                <h1 className="title is-3 is-spaced">{goridata.topic}</h1>
                                   <div className="tabs">
                                        <ul>
                                            <li className="is-active"><a>
                                                <span className="icon is-small">
                                                    <i className="fa fa-database"></i>
                                                </span>Datasets
                                            </a></li>
                                        </ul>
                                    </div>

                                        {this.renderTipocs()}
                            </div>
                            <div className="column">
                                <div className="tile">

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

export default Explore;

if (document.getElementById('explore')) {
    ReactDOM.render(<Explore />, document.getElementById('explore'));
}