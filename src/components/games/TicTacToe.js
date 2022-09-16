import { useState } from "react";
import './tictactoe.css';

function TicTacToe() {
  const [gameboardsize, setGameboardsize] = useState(3)
  const [answer, setAnswer] = useState(['', '', '', '', '', '', '', '', ''])
  const [resetBtnText, setResetBtnText] = useState('Reset')
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [player1Name, setPlayer1Name] = useState("Player 1")
  const [player2Name, setPlayer2Name] = useState('Player 2')
  const [player1Mark, setPlayer1Mark] = useState('X')
  const [player2Mark, setPlayer2Mark] = useState('O')
  const [player1Image, setPlayer1Image] = useState("https://media4.giphy.com/media/3o7WTqRKlVRj0wsYQo/giphy.gif?cid=ecf05e475o9goo8i63ltmgqkm0de9joeyo1nost2d8mlhu6c&rid=giphy.gif&ct=g")
  const [player2Image, setPlayer2Image] = useState("https://media3.giphy.com/media/xvZOuJeLij0W9IwCdH/giphy.gif?cid=790b7611f7d6f1d8b24b92cbf17ad6945c454e19c22b887d&rid=giphy.gif&ct=g")
  const [turnNumber, setTurnNumber] = useState(1)
  const [messageBoard, setMessageBoard] = useState('Welcome to Tic Tac Toe')
  const [gameActive, setGameActive] = useState(true)
  const [imagesActive, setImagesActive] = useState(false)
  const [extraClicks, setExtraClicks] = useState(0)
  

  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]

  function renderGameboard() {
    if (imagesActive) {
      return (
        <section className='tttgameBoard'>
          {answer.map((element, i) => {
          if (element === player1Mark) {
            return <div className='' key={i} onClick={turn} id={i}><img className='tttbuttondivimg' src={player1Image} alt={element} /></div>
          } else if (element === player2Mark) {
            return <div className='' key={i} onClick={turn} id={i}><img className='tttbuttondivimg' src={player2Image} alt={element} /></div>
          } else {
            return <div className='tttbuttondiv' key={i} onClick={turn} id={i}>{element}</div>
          }})
        }
        </section>
      )
    } else {
      return (
        <section className='tttgameBoard'>
        {answer.map((element, i) => 
          <div className='tttbuttondiv' key={i} onClick={turn} id={i}>{element}</div>
        )}
        </section>
      )
    }
  }

  function createMark(boxClickedOnId) {
    var mark = player1Mark
    var altMark = player2Mark

    if (turnNumber % 2 === 1) {
      mark = player1Mark
      altMark = player2Mark
    } else if (turnNumber % 2 === 0) {
      mark = player2Mark
      altMark = player1Mark
    }
    
    let counter = 0
    const newState = answer.map(element => {
      if (counter === Number(boxClickedOnId)) {
        counter++
        return element = mark
      } else {
        counter++
        return element
      }
    })

    setAnswer(newState)
    setMessageBoard(`Player ${altMark}'s turn`)
    checkWin(newState, mark)
  }
  
  function checkWin(answer, mark) {
    for (var i = 0; i < winningConditions.length; i++) {
      if (answer[winningConditions[i][0]] === mark 
      && answer[winningConditions[i][1]] === mark 
      && answer[winningConditions[i][2]] === mark) {
        setMessageBoard(`Player ${mark} Wins`)
        setGameActive(false)
        setResetBtnText("Play Again")
        if (mark === player1Mark) {
          setPlayer1Score(player1Score + 1)
        } else if (mark === player2Mark) {
          setPlayer2Score(player2Score + 1)
        }
      } else if (turnNumber === 9) {
        setMessageBoard(`Draw`)
        setGameActive(false)
      }
    }
  }

  function turn(event) {
    var boxClickedOn = event.target
    var boxClickedOnId = boxClickedOn.id

    if ((boxClickedOn.tagName === 'DIV') 
    && (answer[boxClickedOnId] === '')
    && gameActive) {
      setTurnNumber(turnNumber + 1)
      createMark(boxClickedOnId)
    } else if (gameActive === false && extraClicks === 3) {
      setMessageBoard("Stop clicking the game is over!!!")
    } else if (gameActive === false) {
      setExtraClicks(extraClicks + 1)
      setMessageBoard("Please click Play Again to play another game")
    }
  }

  function resetBtn() {
    setAnswer(['', '', '', '', '', '', '', '', ''])
    setTurnNumber(1)
    setMessageBoard('Welcome to Tic Tac Toe')
    setExtraClicks(0)
    setGameActive(true)
  } 

  function customise() {
    setPlayer1Name(prompt(`Please enter the name for ${player1Name}`))
    setPlayer2Name(prompt(`Please enter the name for ${player2Name}`))
    setImagesActive(true)
  }

  function computerMove() {
    var computerMoveNum = Math.floor(Math.random() * (9 - 0))
    if (gameActive) {
      while (answer[computerMoveNum] !== '') {
      computerMoveNum = Math.floor(Math.random() * (9 - 0))
      }
      setTurnNumber(turnNumber + 1)
      createMark(computerMoveNum)
    }
  }

  return(
    <div className="tttGame">
      <section className="tttbackboard">

      <section className="ttttop">
          <h1 className="tttH1">Tic Tac Toe</h1>
          <h2 className="tttH2">converted from JavaScript to React</h2>
      </section>

      <section className="tttmiddle">
        <section className="tttside1">
            <p className="tttplayer1Name">{player1Name}</p>
            <p className="tttplayer1Score">{player1Score}</p> 
        </section>

        {renderGameboard()}

        <section className="tttside2">
            <p className="tttplayer2Name">{player2Name}</p>
            <p className="tttplayer2Score">{player2Score}</p> 
        </section>
      </section>

      <section>
        <p className="tttmessageBoard">{messageBoard}</p>
        <button className="tttreset tttbutton "  onClick={resetBtn} >{resetBtnText}</button>
        <button className="tttcustomise tttbutton " onClick={customise}>Customise Player Names</button>
        <button className="tttcomputerMove tttbutton " onClick={computerMove}></button>
      </section>
    </section></div>
  );
}

export default TicTacToe