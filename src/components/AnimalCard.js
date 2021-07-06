import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

const AnimalCard = (props) => {

  const jokesComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />);
  console.log(jokesComponents);

  return (
    <div className='contact-card'>
      <h3>{props.contact.name}</h3>
      <p>Type: {props.contact.type}</p>
      <p>Age: {props.contact.age}</p>
      <Joke
        joke = {{question: "Guess who?", answer: `Ya boy, ${props.contact.name}!`}}
      />  
    </div>
  )
};

export default AnimalCard;