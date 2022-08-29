import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import TicTacToe from './TicTacToe';
// import Mastermind from './testfolder/Mastermind';


import '../../App.css';


function Games() {
  const [game, setGame] = useState('Game Selector')
  const [display, setDisplay] = useState('Please Select a Game')
  const gameList = [
    'TicTacToe',
    // 'Mastermind',
    
    ]

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      &#x25bc;
    </a>
  ));

  const CustomMenu = React.forwardRef(
    ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
      const [value, setValue] = useState('');
  
      return (
        <div
          ref={ref}
          style={style}
          className={className}
          aria-labelledby={labeledBy}
        >
          <Form.Control
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ul className="list-unstyled">
            {React.Children.toArray(children).filter(
              (child) =>
                !value || child.props.children.toLowerCase().startsWith(value),
            )}
          </ul>
        </div>
      );
    },
  );


  // const inputChange = (e) => {
  //   e.preventDefault()
  //   const newContent = e.target.value
    
  //   // console.log(newContent)
  //   setInput(`${newContent}`)
  // }

  const GameChange = (e) => {
    e.preventDefault()
    const selectedGame = e.target.id

    setGame(selectedGame)

    switch(selectedGame) {
      case 'TicTacToe':
        setDisplay(<TicTacToe selectedGame={selectedGame} />)
        break

      // case 'Mastermind':
      //   setDisplay(<Mastermind selectedGame={selectedGame} />)
      //   break
      
    //   case 'Calculator':
    //     setDisplay(<CalculatorDisplay selectedGame={selectedGame} />)
    //     break

      default:
        setDisplay("Please Select a Game")
    }
  }


  return (
    <div>
      <h1>Games</h1>
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-custom-components" variant="" className ='btn-outline-dark btn-outline-dark:hover' >
          {game}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {gameList.sort().map((game, i) => 
          <Dropdown.Item eventKey={i} id={game} key={i} onClick={GameChange} >{game}</Dropdown.Item>
          
          )}

        </Dropdown.Menu>
      </Dropdown>

      <div className="display">
        {display}
        
      </div>
    </div>
  )
}

export default Games;