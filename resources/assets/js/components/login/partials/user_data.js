/**
 * Created by mpatswe on 13/11/2017.
 */
import React, { Component } from 'react';
import Request from 'superagent';
import Tabs from '../../partials/Tabs';
import Tab from '../../partials/Tab';
class UserData extends Component {
    constructor(props){
        super(props)
        this.state = {
            stars:[]
        }

    }
    componentDidMount() {
     this.searchMine()
    }
    renderStars(){
        if(Object.keys(this.state.stars).length != 0){
        return this.state.stars.map((star, index)=>{
            return (
                <a className="panel-block is-active" href={`/data/${star.datasetId}/`} key={index}>
                <span className="panel-icon">
                    <i className="fa fa-bandcamp"></i>
                </span>
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
    searchMine(mykey="all"){
        Request.get('/api/mydataset/'+goridata.User_id+"?myquery="+mykey)
            .then((response) => {
                this.setState({ stars: response.body });
            });
    }
    updateMySearch(){
        this.searchMine(this.refs.myquery.value)
    }
    render() {
        return (
            <div className="tile is-child">
                <nav className="panel">
                    <p className="panel-heading">
                        <strong>Your Datasets</strong>
                    </p>
                    <div className="panel-block">
                        <p className="control has-icons-left">
                            <input ref="myquery" onChange={ (e) => {this.updateMySearch();} } className="input is-small" type="text" placeholder="search" />
                        <span className="icon is-small is-left">
                            <i className="fa fa-search"></i>
                        </span>
                        </p>
                    </div>
                    {this.renderStars()}
                    <div className="panel-block">
                        <a href={`/profile/${goridata.User_id}/${goridata.first_name}`} className="button is-link is-outlined is-fullwidth">
                             More Datatsets
                        </a>
                    </div>
            </nav>

            </div>
        );
    }

}

export default UserData;
