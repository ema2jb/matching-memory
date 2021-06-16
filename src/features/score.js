import React from 'react';
// Add import statement below
import {useSelector} from 'react-redux'
import {selectMatchedIDs} from './boardSlice.js'


export const Score = () => {
  // Add selected data variable below
 const matchedIDs = useSelector(selectMatchedIDs)


/* let score  = 0
 if (matchedIDs.length >= 2){
   score++
 }
*/
  return (
    // implement selected data inside <div>
    <div className="score-container">Matched: {matchedIDs.length}</div>
  );
};