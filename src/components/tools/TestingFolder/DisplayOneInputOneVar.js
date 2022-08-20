import { useState } from 'react'
import FindALetter from './FindALetter';


function DisplayOneInputOneVar({ selectedTool }) {
  const [input, setInput] = useState('type data here')
  const [variable, setVariable] = useState('type variable here')
  const [output, setOutput] = useState('')

  

  const inputChange = (e) => {
    e.preventDefault()
    const newContent = e.target.value
    
    // console.log(newContent)
    setInput(`${newContent}`)
  }

  const variableChange = (e) => {
    e.preventDefault()
    const newContent = e.target.value
    
    // console.log(newContent)
    setVariable(`${newContent}`)
  }

  const processInput = (e) => {
    e.preventDefault()

    console.log(selectedTool)

    switch(selectedTool) {
      case 'FindALetter':
        setOutput(<FindALetter input={input} variable={variable}/>)
        break

      // case 'lowercase letters':
      //   setOutput(<Lowercase input={input}/>)
      //   break

      default:
        setOutput("Please Select a Tool")
    }
  }


  return (
    <div>
      <div>Input</div>
        <input  type="text" onChange={inputChange} value={input}/>

        <input type="text" onChange={variableChange} value={variable}/>
        
        <button onClick={processInput} >Process</button>
        
        <div>Output
          <div className="output">{output}
          
          
        </div>
      </div>
    </div>

  )
}

export default DisplayOneInputOneVar;
