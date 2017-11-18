/**
 * Created by mpatswe on 11/11/2017.
 */
import React, { Component } from 'react';
import Request from 'superagent';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import JsonView from './partials/view';
import NumericLabel from 'react-pretty-numbers';

class DataFile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            json_ob: [],
        }
    }

    componentDidMount() {
        const urlGet ="/api/data/file/"+goridata.datasetId;
        Request.get(urlGet)
            .then((response) =>{
                this.setState({
                    json_ob: JSON.parse(response.text)
                });
            });
    }
    urlData(){
        return this.state.json_ob.upload_data_path
    }

    render() {
        var option = {
            'shortFormat':true,
        };
        return (
            <div>
                <section className="section">
                    <div className="tabs is-boxed">
                        <ul>
                            <li className="is-active">
                                <a>
                    <span className="icon is-small">
                        <i className="fa fa-connectdevelop"></i>
                    </span>
                                    <span>Data</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="container">
                        <section>
                            <div className="container">
                                <article className="message">
                                    <div className="message-header">
                                        <div className="media">
                                            <div className="media-left">
                                                <figure className="image is-32x32">
                                                    <img src={this.state.json_ob.avatar} alt="Placeholder image" />
                                                </figure>
                                            </div>
                                            <div className="media-content">
                                                <a href={`/profile/${this.state.json_ob.user_id}/${this.state.json_ob.first_name}`} className="has-text-white titleinprofile">{this.state.json_ob.first_name}</a>
                                            </div>
                                        </div>
                                        <div className="buttons has-addons is-right">
                                        <div className="control">
                                            <div className="tags has-addons">
                                                <span className="tag">
                                                    <NumericLabel params={option}>{this.state.json_ob.stars_counter}
                                                    </NumericLabel>
                                                </span>
                                                <a href={`/star/${this.state.json_ob.datasetId}`} className="button is-small is-primary">
                                                 <span className="icon is-small">
                                                  <i className="fa fa-star"></i>
                                                </span><span>Star</span></a>

                                            </div>
                                        </div>
                                            <div className="control">
                                                <div className="tags has-addons">
                                                    <span className="tag">
                                                    <span className="icon is-small">
                                                        <i className="fa fa-link"></i>
                                                    </span>
                                                    </span>
                                                    <a className="button  is-small is-primary" target="_blank" href={goridata.urldata}>
                                                        Get api
                                                    </a>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <JsonView urlprop={this.urlData()} />
                                </article>
                                <article className="message is-primary">
                                    <div className="message-header">
                                        <p>
                                            <span className="icon is-small">
                                            <i className="fa fa-book"></i>
                                        </span><span> DESCRIPTION</span>
                                        </p>
                                        <button className="delete" aria-label="update"></button>
                                    </div>
                                    <div className="message-body">
                                        <h2 className="title is-3">{this.state.json_ob.name}</h2>
                                        {this.state.json_ob.description}
                                    </div>
                                </article>
                            </div>
                        </section>

                    </div>
                </section>
                <Footer />
            </div>
        );
    }

}

export default DataFile;

if (document.getElementById('dataFile')) {
    ReactDOM.render(<DataFile />, document.getElementById('dataFile'));
}