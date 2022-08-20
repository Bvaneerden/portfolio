import { useState } from 'react'
import Uppercase from './Uppercase';
import Lowercase from './Lowercase';
import Titlecase from './Titlecase';
import CharacterCount from './CharacterCount';
import LetterCount from './LetterCount';
import WordCount from './WordCount';
import VowelCount from './VowelCount';
import ReverseWords from './ReverseWords';
import ReverseLetters from './ReverseLetters';


function DisplayOneInput({ selectedTool }) {
  const [input, setInput] = useState('type data here')
  const [output, setOutput] = useState('')

  

  const inputChange = (e) => {
    e.preventDefault()
    const newContent = e.target.value
    
    setInput(`${newContent}`)
  }

  const processInput = (e) => {
    e.preventDefault()

    // console.log(selectedTool)

    switch(selectedTool) {
      case 'CAPITALS LETTERS':
        setOutput(<Uppercase input={input}/>)
        break

      case 'lowercase letters':
        setOutput(<Lowercase input={input}/>)
        break

      case 'Title Case':
        setOutput(<Titlecase input={input}/>)
        break
      
      case 'Character Counter':
        setOutput(<CharacterCount input={input}/>)
        break

      case 'Letter Counter':
        setOutput(<LetterCount input={input}/>)
        break

      case 'Word Counter':
        setOutput(<WordCount input={input}/>)
        break

      case 'Vowel Counter':
        setOutput(<VowelCount input={input}/>)
        break
      
      case 'Reverse Words':
        setOutput(<ReverseWords input={input}/>)
        break
      
      case 'Reverse Letters':
        setOutput(<ReverseLetters input={input}/>)
        break

      default:
        setOutput("Please Select a Tool")
    }
  }


  return (
    <div>
      <div>Input</div>
      <form onSubmit={processInput}>
        <input  type="text" onChange={inputChange} value={input}/>
        
        <button onClick={processInput} >Process</button>
        </form>
        
        <div>Output
          <div className="output">{output}
          
        </div>
      </div>
    </div>

  )
}

export default DisplayOneInput;
