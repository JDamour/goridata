import React, { Component } from 'react';
import Request from 'superagent';
import Tabs from './Tabs';
import Tab from './Tab';
import Moment from 'react-moment';
import NumericLabel from 'react-pretty-numbers';

class Popular extends Component {
    constructor(props){
        super(props)
        this.state = {
            developers:[]
        }

    }
    componentDidMount() {
        Request.get('/api/developers')
            .then((response) => {
                this.setState({
                    developers:response.body
                });
            });
    }
    renderdevs() {
        return this.state.developers.map((developer, index) =>{
            return (
                <div className="box" key={index}>
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={developer.avatar} alt="Image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <a href={`/profile/${developer.user_id}/${developer.first_name}`}>
                                        <strong>{developer.first_name}</strong>
                                    <small> {developer.last_name}</small> </a>
                                    <small className="is-pulled-right"><Moment fromNow>{developer.created_at}</Moment></small>
                                    <br />
                                    <a className="has-text-grey-dark" href={`/data/${developer.id}/`}> {developer.name} </a>
                                </p>
                            </div>

                        </div>
                    </article>
                </div>
            )
        })
    }
    render() {
        var option = {
            'shortFormat':true,
        };
        return (
            <div className="tile is-parent is-four-fifths-desktop">
                <div className="tile is-child">
                    <h1 className="title is-3 is-spaced">Datasets</h1>
                    <Tabs tabType="is-boxed">

                        <Tab iconClassName={'fa fa-chevron-circle-down'}
                             linkClassName={'Latest'}>
                            {this.props.popularData.map((data,index) =>
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
                            </div>)}

                        </Tab>
                        <Tab iconClassName={'fa fa-group'}
                             linkClassName={'Developers'}>
                            {this.renderdevs()}
                        </Tab>
                    </Tabs>
                </div>
            </div>
        );
    }

}

export default Popular;