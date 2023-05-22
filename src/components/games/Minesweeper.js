import { useState } from "react";
import './Minesweeper.css';

function Minesweeper() {
  const [gameboardsize, setGameboardsize] = useState(4)
 
  const [cellContents, setCellContents] = useState(['', '', '', '', '', '', '', '', ''])

  const [isFlagged, setFlagged] = useState('false')
  const ToggleFlagged = () => {
    setFlagged(!isFlagged)
  }

  // const [resetBtnText, setResetBtnText] = useState('Reset')

  // const [messageBoard, setMessageBoard] = useState('Welcome to Tic Tac Toe')
  // const [gameActive, setGameActive] = useState(true)
  // const [imagesActive, setImagesActive] = useState(false)
  // const [extraClicks, setExtraClicks] = useState(0)
  
  // const winningConditions = [
  //   [0,1,2],
  //   [3,4,5],
  //   [6,7,8],
  //   [0,3,6],
  //   [1,4,7],
  //   [2,5,8],
  //   [0,4,8],
  //   [2,4,6]
  // ]

  function renderContents() {
    var contents = []
    for (var i = 0; i < (gameboardsize * gameboardsize); i++) {
      contents.push('')
    }
    setCellContents(contents)
  }

  function renderGameboard() {
    return (
      <section className='Minesweeper_gameBoard'>

      {cellContents.map((element, i) => 
        <div className='Minesweeper_buttondiv' key={i} onClick={turn} onContextMenu={test} id={i}></div>
      )}
      </section>
    )
  }

  function test(e) {
    e.preventDefault()
    var cellClickedOn = e.target
    console.log(cellClickedOn.className)
    // cellContents[cellClickedOn.id]

    if (cellClickedOn.tagName === 'DIV') {
      if (cellContents[cellClickedOn.id] === '') {
        cellContents[cellClickedOn.id] = 'flagged'
        ToggleFlagged()
        console.log('flagged')
        console.log(isFlagged)
      } else if (cellContents[cellClickedOn.id] === 'flagged') {
        cellContents[cellClickedOn.id] = ''
        ToggleFlagged()
        console.log(isFlagged)
      }
    }
  }

  // function createMark(boxClickedOnId) {
  //   var mark = player1Mark
  //   var altMark = player2Mark

  //   if (turnNumber % 2 === 1) {
  //     mark = player1Mark
  //     altMark = player2Mark
  //   } else if (turnNumber % 2 === 0) {
  //     mark = player2Mark
  //     altMark = player1Mark
  //   }
    
  //   let counter = 0
  //   const newState = answer.map(element => {
  //     if (counter === Number(boxClickedOnId)) {
  //       counter++
  //       return element = mark
  //     } else {
  //       counter++
  //       return element
  //     }
  //   })

  //   setAnswer(newState)
  //   setMessageBoard(`Player ${altMark}'s turn`)
  //   checkWin(newState, mark)
  // }
  
  // function checkWin(answer, mark) {
  //   for (var i = 0; i < winningConditions.length; i++) {
  //     if (answer[winningConditions[i][0]] === mark 
  //     && answer[winningConditions[i][1]] === mark 
  //     && answer[winningConditions[i][2]] === mark) {
  //       setMessageBoard(`Player ${mark} Wins`)
  //       setGameActive(false)
  //       setResetBtnText("Play Again")
  //       if (mark === player1Mark) {
  //         setPlayer1Score(player1Score + 1)
  //       } else if (mark === player2Mark) {
  //         setPlayer2Score(player2Score + 1)
  //       }
  //     } else if (turnNumber === 9) {
  //       setMessageBoard(`Draw`)
  //       setGameActive(false)
  //     }
  //   }
  // }

  function turn(event) {
    var boxClickedOn = event.target
    var boxClickedOnId = boxClickedOn.id

    // if (flagged)


    // if ((boxClickedOn.tagName === 'DIV') 
    // && (answer[boxClickedOnId] === '')
    // && gameActive) {
    //   createMark(boxClickedOnId)
    // } else if (gameActive === false && extraClicks === 3) {
    //   setMessageBoard("Stop clicking the game is over!!!")
    // } else if (gameActive === false) {
    //   setExtraClicks(extraClicks + 1)
    //   setMessageBoard("Please click Play Again to play another game")
    
  }

  // function resetBtn() {
  //   setAnswer(['', '', '', '', '', '', '', '', ''])
  //   setTurnNumber(1)
  //   setMessageBoard('Welcome to Tic Tac Toe')
  //   setExtraClicks(0)
  //   setGameActive(true)
  // } 

  // function customise() {
  //   setPlayer1Name(prompt(`Please enter the name for ${player1Name}`))
  //   setPlayer2Name(prompt(`Please enter the name for ${player2Name}`))
  //   setImagesActive(true)
  // }

  // function computerMove() {
  //   var computerMoveNum = Math.floor(Math.random() * (9 - 0))
  //   if (gameActive) {
  //     while (answer[computerMoveNum] !== '') {
  //     computerMoveNum = Math.floor(Math.random() * (9 - 0))
  //     }
  //     setTurnNumber(turnNumber + 1)
  //     createMark(computerMoveNum)
  //   }
  // }

  return(
    <div className="tttGame" >
      <section className="tttbackboard">

      <section className="ttttop">
          <h1 className="tttH1">Minesweeper</h1>

      </section>

      <section className="tttmiddle">

        

        {renderGameboard()}
        


      </section>
      <button onClick={renderContents}></button>

      <section>
        {/* <p className="tttmessageBoard">{messageBoard}</p>
        <button className="tttreset tttbutton "  onClick={resetBtn} >{resetBtnText}</button>
        <button className="tttcustomise tttbutton " onClick={customise}>Customise Player Names</button>
        <button className="tttcomputerMove tttbutton " onClick={computerMove}></button> */}
      </section>
    </section></div>
  );
}

export default Minesweeper