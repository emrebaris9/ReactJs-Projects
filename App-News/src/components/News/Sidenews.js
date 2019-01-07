import React, { Component } from 'react'
import SingleSide from './SingleSide';
import axios from 'axios'
import Error from './Error'

class Sidenews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidenews: [],
            error: false,
        }
    }

    componentDidMount() {
        const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=d60eeae9597c49e19bef726c55f8fe2e`;

        axios.get(url)
        .then((response) => {
            this.setState({
               sidenews: response.data.articles
            })
        })
        .catch((error) => {
            this.setState ({
                error: true
            })
        });
    }
    
    renderItems() {
        if (!this.state.error) {
        return this.state.sidenews.map((item) => (
            <SingleSide key = {item.url} item={item} />
        )); 
        }
        else {
            return <Error/>
        }
    }
    render() {
        return (
            <div> 
                {this.renderItems()}
            </div>
        );
    }
}
export default Sidenews;