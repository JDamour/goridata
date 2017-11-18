/**
 * Created by Mpatswenimana on 11/10/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import Footer from './Footer';
import Hero from './Hero';
import Content from './Content';

class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            latest:[],
            user_exist:goridata.user_check
        }
    }
    componentDidMount() {
        const url="/api/latest";
        Request.get(url).then((response) => {
                this.setState({
                    latest: response.body
                });
            });
    }
    renderlatest() {
        return this.state.latest
    }

    render() {

        return (
        <div>
            <Hero user_exist={this.state.user_exist} />
            <Content renderlatest={this.renderlatest()} />
            <Footer />
        </div>
        );
    }

}

export default Welcome;

if (document.getElementById('Welcome')) {
    ReactDOM.render(<Welcome   />, document.getElementById('Welcome'));
}