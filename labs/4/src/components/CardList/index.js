import React from 'react';
import Card from '../Card/';
import data from '../../data.json';

class CardList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {cards: data.cards};
  }

  remove = (event) => {
    let cardtitle = event.target.getAttribute("cardtitle");
    let myCards = this.state.cards;

    let deleteCards = myCards.filter((card) => {
      return card.title !== cardtitle;
    });

    this.setState({cards: deleteCards});

  }

  render() {
    return(
      <div>
        {
          this.state.cards.map((card, index) => {
            return <Card 
              key = {index}
              title = {card.title} 
              content =  {card.content}
              cardclick = {this.remove} 
            />
          })
        }
      </div>
    );
  }
}

export default CardList;