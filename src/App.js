import PlayerBoard from "./PlayerBoard";
import {FaUndoAlt} from "react-icons/fa";
import { useState } from "react";

function App() {

  const [board, setBoard] = useState(['', '' , '', '' , '', '', '', '', '']);
  const [turn, setTurn] = useState(''); 
  const [win, setWin] = useState('');
  const [lockBoard, setLockBoard] = useState(false);

  const checkBoard = (newboard) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let full = true;  
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (newboard[a] && newboard[a] === newboard[b] && newboard[a] === newboard[c]) {
        if(newboard[a] === 'O')
        {
           setWin("Player One Wins");
           setLockBoard(true);
           return;
        }
        else
        {
          setWin("Player Two Wins");
          setLockBoard(true);
          return;
        }
      }
      if(!newboard[a] || !newboard[b] || !newboard[c])
      {
        full = false;
      }
    }

    if(full === true)
    {
      setWin("Tie");
      setLockBoard(true);
    }
    return null;
  }

  const resetBox = () => {    
    const newBoard = ['', '' , '', '' , '', '', '', '', ''];
    setTurn('');
    setWin('');
    setLockBoard(false);
    setBoard(newBoard);
  } 

  const setBox = (pos) => {
    if(lockBoard === true) return;
    const newBoard = [...board];
    if(newBoard[pos] === 'X' || newBoard[pos] === 'O') return;
    (turn === 'O') ? newBoard[pos] = 'X' : newBoard[pos] = 'O';
    setTurn(newBoard[pos]);
    checkBoard(newBoard)
    setBoard(newBoard); 
  } 
  
  return (
    <div className="App">
      {(lockBoard === true) ? 
        <label>Game Over!</label> 
        : 
        <label>{(turn === 'O') ? 
          "Player 2's (X)" 
          : 
          "Player 1's (O)" } 
      Turn</label>}

      <PlayerBoard
       board = {board}
       setBox = {setBox}
       checkBoard= {checkBoard}
      />  
      <FaUndoAlt 
        type= "button"
        size = {42}
        onClick={resetBox}
      />    
      <label className="gameResult">{win}</label>
    </div>
  );
}

export default App;
