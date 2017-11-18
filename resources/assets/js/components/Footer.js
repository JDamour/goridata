/**
 * Created by Mpatswenimana on 11/10/2017.
 */
import React, { Component } from 'react';
const style1 = {
    position: "relative",
    left: "0",
    bottom: "0",
    height: "100px",
    width: "100%"
}

const phantom = {
    display: "block",
    height: "100px",
    width: "100%",

}
class Footer extends Component {

    render() {
        return (
        <div style={phantom}>
        <div style={style1}>
            <footer className="footer">
                <div className="container">
                    <div className="content has-text-centered">
                        <p>
                            © {(new Date().getFullYear())}, <strong>Goridata</strong> Open data for Developers, All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
        </div>
        );
    }

}
export default Footer;
