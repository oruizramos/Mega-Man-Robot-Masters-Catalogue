import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://megaman-robot-masters.herokuapp.com')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Mega Man <br></br> Master Robots <br></br> Series 2-5</h1>
        <div className="icon">
        <a href="https://www.linkedin.com/in/omarruizramos/"><img alt="pixel linkedin icon" src="https://i.imgur.com/XOhPSGf.png"/></a>
        <a href="https://github.com/oruizramos/React-Mega-Man-Master-Robots-Catalog"><img alt='Pixel github icon' src="https://i.imgur.com/4n1RZB4.png"/></a>
        </div>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;