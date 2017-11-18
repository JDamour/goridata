/**
 * Created by Mpatswenimana on 11/10/2017.Sidebar
 */
import React, { Component } from 'react';
import Request from 'superagent'
import Moment from 'react-moment';
import NumericLabel from 'react-pretty-numbers';
var option = {
    'shortFormat':true,
};
class Sidebar extends Component {
    constructor(props){
        super(props)
        this.state = {
            stars:[]
        }

    }
    componentDidMount() {
       this.search()
    }

    renderStars(){
        if(Object.keys(this.state.stars).length != 0){
        return this.state.stars.map((star, index)=>{
            return (
                <a className="panel-block is-active" href={`/data/${star.datasetId}/`} key={index}>
                <div className="tags has-addons is-primary">
                <span className="panel-icon">
                    <i className="fa fa-star-o"></i>
                </span>
                <span className="tag">
                        <NumericLabel params={option}>{star.stars_counter}
                        </NumericLabel>
                </span>
                </div>
                    {star.name}
                </a>
            )
        })
        }else {
            return  <div className="notification is-danger">
                    We couldn’t find any Dataset
                </div>
        }
    }
    search(keyord="all"){
        Request.get('/api/stars?query='+keyord)
            .then((response) =>{
                this.setState({
                    stars: response.body
                });
            });
    }
    updateSearch(){
        this.search(this.refs.query.value)

    }
    render() {
        return (
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child">
                    <nav className="panel">
                        <p className="panel-heading">
                            <strong>Popular Datasets</strong>
                        </p>
                        <div className="panel-block">
                            <p className="control has-icons-left">
                                <input ref="query" onChange={ (e)=> { this.updateSearch();}} className="input is-small" type="text" placeholder="search" />
                    <span className="icon is-small is-left">
                        <i className="fa fa-search"></i>
                    </span>
                            </p>
                        </div>
                        {this.renderStars()}
                    </nav>
                </div>

            </div>
        );
    }

}

export default Sidebar;