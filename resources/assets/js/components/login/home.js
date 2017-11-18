/**
 * Created by mpatswe on 11/11/2017.
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import Footer from '../Footer';
import Dataset from './partials/dataset';
import UserData from './partials/user_data';
class Home extends Component {
            constructor(props){
                super(props)
                this.state = {
                    latest:[]
                }
            }
            componentDidMount() {
                Request.get('/api/latest')
                    .then((response) => {
                        this.setState({ latest: response.body });
                    });
            }
            renderlatest() {
                return this.state.latest
            }

    render() {
        return (
            <div>
                <section className="section">
                    <div className="container">
                        <div className="tile is-ancestor">
                        <Dataset renderlatest={this.renderlatest()} />
                            <div className="tile is-4 is-vertical is-parent">
                               <UserData  />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }

}

export default Home;

if (document.getElementById('home')) {
    ReactDOM.render(<Home />, document.getElementById('home'));
}