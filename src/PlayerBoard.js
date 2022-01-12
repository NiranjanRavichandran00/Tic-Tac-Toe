const PlayerBoard = ({board, setBox}) => {

    return (
      <div className="PlayerBoard">
        <button className="box" 
            id="topLeft"
            onClick={() => setBox(0)}
        >{board[0]}</button>
        <button className="box" 
            id="topMiddle"
            onClick={() => setBox(1)}
        >{board[1]}</button>
        <button className="box" 
            id="topRight"
            onClick={() => setBox(2)}
        >{board[2]}</button>
        <button className="box" 
            id="midLeft"
            onClick={() => setBox(3)}
        >{board[3]}</button>
        <button className="box" 
            id="midMiddle"
            onClick={() => setBox(4)}   
        >{board[4]}</button>
        <button className="box" 
            id="midRight"
            onClick={() => setBox(5)}
        >{board[5]}</button>
        <button className="box" 
            id="botLeft"
            onClick={() => setBox(6)}
        >{board[6]}</button>
        <button className="box" 
            id="botMiddle"
            onClick={() => setBox(7)}
        >{board[7]}</button>
        <button className="box" 
            id="botRight"
            onClick={() => setBox(8)}
        >{board[8]}</button>
      </div>
    )
}

export default PlayerBoard
