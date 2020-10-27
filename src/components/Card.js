import React from 'react';

const Card = ({ name, weapon, email, avatar, sprite1}) => {
  return (
    <div className='tc grow bg-gold ba3 br3 b--solid b--lightest-blue pa3 ma2 dib bw3'>
      <img alt='master robots' src={avatar}/> <br></br> <br></br>
      <img alt='master robots' src={sprite1}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{weapon}</p>
      </div>
    </div>
  );
}

export default Card;
