import React, { Component } from 'react';
import Request from 'superagent';
import ReactJson from 'react-json-view'

class JsonView extends Component {
    constructor(props){
        super(props)
        this.state = {
            json_ob:{}
        }
    }


    componentDidMount() {
        Request.get(goridata.urldata)
            .then((response) => {
                this.setState({
                    json_ob : response.body
                });
            });

    }
    renderfile() {
        return this.state.json_ob
    }

    render() {

        return (
            <div className="message-body">
                 <ReactJson src={this.renderfile()}  theme="monokai" iconStyle="circle" />
            </div>
        );
    }

}

export default JsonView;