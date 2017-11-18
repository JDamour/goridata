/**
 * Created by mpatswe on 13/11/2017.
 */
import React, { Component } from 'react';
import Tabs from '../../partials/Tabs';
import Tab from '../../partials/Tab';
import Request from 'superagent';
import Moment from 'react-moment';
import NumericLabel from 'react-pretty-numbers';

class Dataset extends Component {


    render() {
        var option = {
            'shortFormat':true,
        };
        return (
            <div className="tile is-parent">
                <div className="tile is-child">
                    <div className="tabs is-boxed">
                        <ul>
                            <li className="is-active">
                                <a href="home">
                <span className="icon is-small">
                    <i className="fa fa-bandcamp"></i>
                </span>
                                    <span>Latest Datasets</span>
                                </a>
                            </li>
                            <li>
                                <a href="/dataset/form">
                <span className="icon is-small">
                    <i className="fa fa-plus-square"></i>
                </span>
                                    <span>Add New Dataset</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                            {this.props.renderlatest.map((data,index) =>
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
                                                    <a href={`/data/${data.datasetId}`}><small>{data.name}</small></a>
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

                </div>
            </div>
        );
    }

}

export default Dataset;