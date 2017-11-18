/**
 * Created by Mpatswenimana on 11/10/2017.Sidebar
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            showFile: false,
            showUrl: false
        }

    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    onClickFile(e){
        e.preventDefault();
        this.setState({showFile: !this.state.showFile})
        this.setState({showUrl: false})
    }
    onClickUrl(e){
        e.preventDefault();
        this.setState({showUrl: !this.state.showUrl})
        this.setState({showFile: false})
    }
    inPutUrl(){
        return <div className="field">
                  <label className="label">Url Api</label>
                  <div className="control has-icons-left has-icons-right">
                  <input defaultValue="" className="input is-primary" type="text" onChange={this.handlechange} name="dataset_type" />
                    <span className="icon is-small is-left">
                     <i className="fa fa-tag"></i>
                    </span>
                    </div>
            </div>
    }
   inPutFile(){

        return <div className="file has-name marginBott">
               <label className="file-label">
               <input className="file-input" onChange={this.handlechange} type="file" name="dataset_type" defaultValue="" />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fa fa-upload"></i>
                  </span>
                  <span className="file-label">
                   Upload Json
                  </span>
                </span>
                <span className="file-name">
                Json file Dataset
                </span>
                       </label>
                   </div>
    }
    render() {
        return (
            <div>
                {this.state.showFile && this.inPutFile()}
                {this.state.showUrl && this.inPutUrl()}
                <div className="field is-grouped">
                    <div className="control">
                    <label className="label">Choose Dataset Type</label>
                    </div>
                    <div className="control">
                        <a onClick={this.onClickFile.bind(this)} href="#" className="button is-link">Json File</a>
                    </div> or
                    <div className="control">
                        <a onClick={this.onClickUrl.bind(this)} href="#" className="button  is-link">Url Api</a>
                    </div>
                </div>
            </div>
        );
    }

}

export default Form;

if (document.getElementById('form')) {
    ReactDOM.render(<Form />, document.getElementById('form'));
}