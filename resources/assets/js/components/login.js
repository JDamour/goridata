/**
 * Created by Mpatswenimana on 11/10/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';

class Login extends Component {

    render() {
        return (
            <div>
                <section>
                <div className="container">
                    <div className="columns">
                        <div className="column is-offset-3 is-half">
                            <div className="box logi-page">
                                        <div class="content">
                                         <span className="control">
                                                <a className="button is-info is-centered" href="/social/redirect/facebook">
                                                    <span className="icon">
                                                    <i className="fa fa-facebook"></i>
                                                    </span>
                                                    <span>Sign In With Facebook Account</span>
                                                </a>
                                            </span>
                                        </div>
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

export default Login;

if (document.getElementById('login')) {
    ReactDOM.render(<Login />, document.getElementById('login'));
}