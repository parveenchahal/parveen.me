import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="row bg-black">
                    <div className="col-lg-10 col-md-12">
                        <div className="m-footer-social text-lg-end mt-lg-4 mb-lg-5 pt-lg-0 pb-lg-5 text-md-center mt-md-5 mb-md-5 pt-md-5 pb-md-5">
                            <a className="col text-center" href="http://linkedin.parveen.me" target="_blank"><i className="fab fa-linkedin" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://github.parveen.me" target="_blank"><i className="fab fa-github" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://facebook.parveen.me" target="_blank"><i className="fab fa-facebook-square" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://instagram.parveen.me" target="_blank"><i className="fab fa-instagram" aria-hidden="true" /></a>
                            <a className="col text-center" href="http://twitter.parveen.me" target="_blank"><i className="fab fa-twitter" aria-hidden="true" /></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}