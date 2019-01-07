import React, { Component } from 'react';
import logo from './logo.png';
import './App.css'
import News from './components/News/News' 
import Sidenews from './components/News/Sidenews'



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      news1: {
        type: 'top-headlines',
        query: 'sources=bbc-news'
      },
      news2: {
        type: 'everything',
        query: 'domains=wsj.com,nytimes.com'
      },
      news3: {
        type: 'everything',
        query: 'domains=comicbookmovie.com'
      }
      
    }
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href='#' className="bran-logo center"> <i class="large material-icons">web</i> </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1}/>
            <News news={this.state.news2}/>
          </div>
          <div className= "col s4">
            <Sidenews news={this.state.news3}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
