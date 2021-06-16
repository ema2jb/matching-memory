import React from 'react';
// Add import statements below
import {useSelector, useDispatch } from 'react-redux'
import {selectVisibleIDs, flipCard, selectMatchedIDs, resetCards} from './boardSlice.js'

//let cardLogo = "https://static-assets.codecademy.com/Courses/Learn-Redux/matching-game/codecademy_logo.png";
//<img src={cardLogo} className="logo-placeholder" alt="Card option" />


export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs)
  const dispatch = useDispatch();
  const matchedIDs = useSelector(selectMatchedIDs)
  
  
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id))
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <p>CARD</p>
  );

  
  // implement card id array membership check
 if (visibleIDs.includes(id) || matchedIDs.includes(id)){
  cardText = contents;
  click = () => {};
 }
  /*{
    cardText = contents;
    click = () => {};
  }*/

  if ( visibleIDs.includes(id) && visibleIDs.length === 2){
    cardStyle = 'no-match'
  }

  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  }

  
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {
      dispatch(resetCards())
      flipHandler(id)
    };
  }



  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
