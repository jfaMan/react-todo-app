import React from 'react';

const Joke = (props) => {
  return (
    <div>
      <p>Question: {props.joke.question}</p>
      <p>Answer: {props.joke.answer}</p>
    </div>
  )
};

export default Joke;