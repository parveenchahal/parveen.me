import React, { Component } from 'react'

export default class Career extends Component {
    company = this.props.company
    designation = this.props.designation
    timeline = this.props.timeline
    description = this.props.description
    render() {
        return (
            <div>
                <div className="mb-lg-4 pb-lg-4 mb-md-5 pb-md-5">
                    <h4 className="m-resume-career-content-cname">{this.company}</h4>
                    <p>
                        <span className="m-resume-career-content-des">{this.designation}</span>
                        <span className="m-resume-career-content-date">{this.timeline}</span>
                    </p>
                    <p className="m-resume-career-content-details">{this.description}</p>
                </div>
            </div>
        )
    }
}