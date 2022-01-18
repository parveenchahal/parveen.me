import React, { Component } from 'react'
import MenuHeader from './menuHeader'

export default class Home extends Component {
    render() {
        const selection = {
            "desktop": {
                "home": "m-selected-menu-desktop"
            },
            "mobile": {
                "home": "m-selected-menu-mobile"
            }
        }
        return (
            <div>
                <div className="m-bg">
                    <div className="m-bg-op" />
                </div>
                <div className="full-screen">
                    <div className="container-fluid">
                        <MenuHeader {...selection}></MenuHeader>
                        <div className="row m-mt-28vh justify-content-center">
                            <div className="col-12 text-center m-home-content">
                            <h1>I'm Parveen Chahal.</h1>
                            </div>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="col-lg-5 col-md-10 text-center m-home-content">
                            <h3>I'm a <span>Software Engineer</span>. Currently, I work for <a target="_blank" href="https://www.microsoft.com/">Microsoft</a>. I'm part of <a target="_blank" href="https://azure.microsoft.com/en-us/services/azure-arc">Azure Arc team</a>.</h3>
                            </div>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="col-lg-3 col-md-8 m-home-content-separator" />
                        </div>
                        <div className="row mt-4 m-home-content-social">
                            <div className="col text-center">
                            <a className="col text-center" href="http://linkedin.parveen.me" target="_blank"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://github.parveen.me" target="_blank"><i className="fab fa-github" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://facebook.parveen.me" target="_blank"><i className="fab fa-facebook-square" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://instagram.parveen.me" target="_blank"><i className="fab fa-instagram" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://twitter.parveen.me" target="_blank"><i className="fab fa-twitter" aria-hidden="true" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}