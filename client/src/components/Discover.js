import React, { Component } from 'react';
import Card from './Card';
import MatchBar from './MatchBar';
import API from '../utils/API';

class Discover extends Component {
  state = {
    image: '',
    friendCount: 0,
    showMatchBar: false,
  };

  componentDidMount() {
    this.loadNextDog();
  }

  loadNextDog = () => {
    API.search()
      .then(res => {
        console.log(res.data);
        this.setState({ image: res.data.message });
      });
  };

  handleLike = () => {
    const match = 3 === Math.floor(Math.random() * 5 + 1);
    if (match) {
      this.setState({
        friendCount: this.state.friendCount + 1,
        showMatchBar: match,
      });
      this.loadNextDog();
    } else {
      this.setState({ showMatchBar: false });
      this.loadNextDog();
    }
  };

  handleDislike = () => {
    if (this.state.showMatchBar) {
      this.setState({ showMatchBar: false });
    }
    this.loadNextDog();
  };

  render() {
    const { friendCount, image, showMatchBar } = this.state
    return (
      <div>
        <h1>{friendCount}</h1>
        <Card
          handleLike={this.handleLike}
          handleDislike={this.handleDislike}
          image={image}
        />
        <MatchBar
          open={showMatchBar}
        />
      </div>
    );
  }
}

export default Discover;
