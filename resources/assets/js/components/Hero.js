import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props)
    }
    hiddeButton (){
        if(this.props.user_exist){
            return 'signHidden'
            }
        else{
            return ''
        }
    }
    render() {
        console.log(this.hiddeButton ())
        return (
            <section className="hero is-medium is-bold is-primary">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column header-titles is-two-thirds ">
                                <h3 className="title is-2 is-spaced">Goridata</h3>
                                <div className="subtitle is-4 is-spaced">
                                    is  a free, open source platform allows developers to share, collaborate with open data.
                                    Developer can share open data to other local or global developers using this platform.
                                </div>
                            </div>
                            <div className={`column ${this.hiddeButton()} `}>
            <span className="control">
                    <a className="button is-info" href="/social/redirect/facebook">
                        <span className="icon">
                        <i className="fa fa-facebook"></i>
                        </span>
                        <span>Sign in With facebook Account</span>
                    </a>
                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}

export default Hero;