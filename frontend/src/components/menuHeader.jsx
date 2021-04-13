import React, { Component } from 'react'

export default class MenuHeader extends Component {
    render() {
        let bgColor = ""
        if(this.props.desktop.resume) {
            bgColor = "bg-lg-black"
        }
        return (
            <div>
                <div className={"row " + bgColor}>
                    <div className="col-lg-12 d-md-none d-lg-block">
                        <div className="col-12 mt-4">
                            <nav className="m-nav-bar-lg">
                                <ul>
                                    <li className={this.props.desktop.home}><a href="/">Home</a></li>
                                    <li className={this.props.desktop.resume}><a href="/resume">Resume</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-md-12 d-md-block d-lg-none px-0">
                        <div className="d-flex justify-content-end">
                            <div className="m-mobile-menu-toggle">
                                <a className="m-mobile-menu-icon z-index-1000" href="#" title="Menu" />
                            </div>
                        </div>
                        <div className="m-mobile-menu-wrap">
                            <div className="m-mobile-menu" />
                            <div className="m-mobile-menu-items">
                                <ul>
                                    <li className={this.props.mobile.home}><a href="/">Home</a></li>
                                    <li className={this.props.mobile.resume}><a href="/resume">Resume</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}