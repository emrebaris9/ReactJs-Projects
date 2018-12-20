import React, { Component } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Users from "./components/Users";

class App extends Component {
    state = {
        posts: [],
        users: []
    };
    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(posts => posts.data)
            .then(posts => {
                setTimeout(() => {
                    this.setState({
                        posts,
                    });
                }, 2100)
            });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(users => users.data)
            .then(users => {
                setTimeout(() => {
                    this.setState({
                        users,
                    });
                }, 1400)
            })
    }
    render() {
        return (
            <div className="App">
                <Users {...this.state}/>
              <hr/>
                <Posts {...this.state} />
            </div>
        );
    }
}

export default App;