import React from 'react';
import './index.css';

class Card extends React.Component {
  render () {
    return(
      <body>
        <div className="card">
        <span className="close" 
          onClick = {this.props.cardclick} 
          cardtitle = {this.props.title}>
          &times;
        </span>
        <h3 className="title">{this.props.title}</h3>
        <p>{this.props.content}</p>
        </div>
      </body>
    );
  }
}

export default Card;