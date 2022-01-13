const Header = ({lockBoard, turn}) => {
    return (
        <div>
            {(lockBoard === true) ? 
                <label>Game Over!</label> 
                : 
                <label>{(turn === 'O') ? 
                    "Player 2's (X) " 
                    : 
                    "Player 1's (O) " }
                Turn</label>}
        </div>
    )
}

export default Header
