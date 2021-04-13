import React, { Component } from 'react'

export default class Test extends Component {
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
                debugger
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
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            debugger
            return (
                <div>
                    <p>{items}</p>
                </div>
            )
        }
    }
}