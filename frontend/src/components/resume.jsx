import React, { Component } from 'react'
import MenuHeader from './menuHeader'
import Career from './career'
import Footer from './footer'

export default class Resume extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://pcapis.com/parveenchahal/resume")
        .then(res => res.json())
        .then(
            (res) => {
                this.setState({
                    isLoaded: true,
                    items: res
                });
            }
        ).catch(rejected => {
            this.setState({
                isLoaded: true,
                error: rejected
            });
        })
    }

    render() {
        const selection = {
            "desktop": {
                "resume": "m-selected-menu-desktop"
            },
            "mobile": {
                "resume": "m-selected-menu-mobile"
            }
        }
        
        const { error, isLoaded, items } = this.state;
        let resumeData = items;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="full-screen">
                    <div className="container-fluid">
                        <MenuHeader {...selection}></MenuHeader>
                        <div className="row mt-5 pt-5 z-index--1">
                            <div className="col-lg-4 col-md-12 mt-lg-2 z-index--1">
                                <div className="col-lg-11 text-lg-end col-md-12 text-md-center m-resume-career-header">
                                <h3>CAREER</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 ms-lg-5 ps-lg-5 mt-lg-2 col-md-10 ms-md-5 ps-md-5 mt-md-5 z-index--1">
                                {resumeData.work.map(x => <Career {...x} />)}
                            </div>
                            <div className="d-flex justify-content-center mt-3 px-md-0">
                                <div className="m-resume-career-separator w-lg-55 w-md-100" />
                            </div>
                        </div>
                        <div className="row mt-5 pt-5">
                            <div className="col-lg-4 col-md-12 mt-lg-2 z-index--1">
                                <div className="col-lg-11 text-lg-end col-md-12 text-md-center m-resume-career-header">
                                <h3>EDUCATION</h3>
                                </div>
                            </div>
                            <div className="col-lg-5 ms-lg-5 ps-lg-5 mt-lg-2 col-md-10 ms-md-5 ps-md-5 mt-md-5 z-index--1">
                                {resumeData.education.map(x => <Career {...x} />)}
                            </div>
                            <div className="d-flex justify-content-center mt-5 px-md-0">
                                <div className="m-resume-career-separator w-lg-55 w-md-100" />
                            </div>
                            <Footer></Footer>
                        </div>
                    </div>
                </div>
            )
        }
    }
}