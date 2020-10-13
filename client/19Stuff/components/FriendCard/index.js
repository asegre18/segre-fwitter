import React from "react";
import "./style.css";


class FriendCard extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {this.props.name}
            </li>
            <li>
              <strong>Occupation:</strong> {this.props.occupation}
            </li>
            <li>
              <strong>Address:</strong> {this.props.location}
            </li>
          </ul>
        </div>
        <span
          className="remove"
          onClick={ () => this.props.handleDeleteFriend(this.props.id)}
        >𝘅</span>
      </div>
    );
  }
}
// function FriendCard(this.props) {
//
// }

export default FriendCard;
