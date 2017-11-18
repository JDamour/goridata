import React, { Component } from 'react';

class Sidebar extends Component {

    render() {
        return (
            <div className="tile is-4 is-vertical is-parent">
                <div className="tile is-child">
                    <nav className="panel">
                        <p className="panel-heading">
                            <strong>Repositories</strong>
                        </p>
                        <div className="panel-block">
                            <p className="control has-icons-left">
                                <input className="input is-small" type="text" placeholder="search" />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-search"></i>
                                </span>
                            </p>
                        </div>
                        <p className="panel-tabs">
                            <a className="is-active">all</a>
                            <a>public</a>
                            <a>private</a>
                            <a>sources</a>
                            <a>forks</a>
                        </p>
                        <a className="panel-block is-active">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            bulma
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            marksheet
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            minireset.css
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            jgthms.github.io
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-code-fork"></i>
                            </span>
                            daniellowtw/infboard
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-code-fork"></i>
                            </span>
                            mojs
                        </a>
                        <label className="panel-block">
                            <input type="checkbox" /> remember me
                        </label>
                        <div className="panel-block">
                            <button className="button is-link is-outlined is-fullwidth">
                                reset all filters
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="tile is-child">
                    <nav className="panel">
                        <p className="panel-heading">
                            <strong>Repositories</strong>
                        </p>
                        <div className="panel-block">
                            <p className="control has-icons-left">
                                <input className="input is-small" type="text" placeholder="search" />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-search"></i>
                                </span>
                            </p>
                        </div>
                        <p className="panel-tabs">
                            <a className="is-active">all</a>
                            <a>public</a>
                            <a>private</a>
                            <a>sources</a>
                            <a>forks</a>
                        </p>
                        <a className="panel-block is-active">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            bulma
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            marksheet
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            minireset.css
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-book"></i>
                            </span>
                            jgthms.github.io
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-code-fork"></i>
                            </span>
                            daniellowtw/infboard
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fa fa-code-fork"></i>
                            </span>
                            mojs
                        </a>
                        <label className="panel-block">
                            <input type="checkbox" /> remember me
                        </label>
                        <div className="panel-block">
                            <button className="button is-link is-outlined is-fullwidth">
                                reset all filters
                            </button>
                        </div>
                    </nav>

                </div>
            </div>
        );
    }

}

export default Sidebar;