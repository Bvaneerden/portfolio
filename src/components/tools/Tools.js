import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import DisplayOneInput from './DisplayOneInput/DisplayOneInput';
// import DisplayOneInputOneVar from './TestingFolder/DisplayOneInputOneVar';
// import CalculatorDisplay from './TestingFolder/CalculatorDisplay';
// import RubberDuck from './RubberDuckComponents/RubberDuck';


import '../../App.css';


function Tools() {
  const [tool, setTool] = useState('Tool Selector')
  const [display, setDisplay] = useState('Please Select a Tool')
  const toolList = [
    'CAPITALS LETTERS',
    'lowercase letters',
    'Title Case',
    'Character Counter',
    'Letter Counter',
    'Word Counter',
    'Vowel Counter',
    // 'Find A Letter',
    'Reverse Words',
    'Reverse Letters',
    // 'Calculator',
    // 'Rubber Duck'    
    ]

  // const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  //   <a
  //     href=""
  //     ref={ref}
  //     onClick={(e) => {
  //       e.preventDefault();
  //       onClick(e);
  //     }}
  //   >
  //     {children}
  //     &#x25bc;
  //   </a>
  // ));

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

  const ToolChange = (e) => {
    e.preventDefault()
    const selectedTool = e.target.id

    setTool(selectedTool)

    switch(selectedTool) {
      case 'CAPITALS LETTERS':
      case 'lowercase letters':
      case 'Title Case':
      case 'Character Counter':
      case 'Letter Counter':
      case 'Word Counter':
      case 'Vowel Counter':
      case 'Reverse Words':
      case 'Reverse Letters': 
        setDisplay(<DisplayOneInput selectedTool={selectedTool} />)
        break

      // case 'FindALetter':
      //   setDisplay(<DisplayOneInputOneVar selectedTool={selectedTool} />)
      //   break
      
      // case 'Calculator':
      //   setDisplay(<CalculatorDisplay selectedTool={selectedTool} />)
      //   break

      // case 'Rubber Duck':
      //   setDisplay(<RubberDuck selectedTool={selectedTool} />)
      //   break

      default:
        setDisplay("Please Select a Tool")
    }
  }

  // const processInput = (e) => {
  //   e.preventDefault()

  //   switch(tool) {
  //     case 'CAPITALS LETTERS':
  //       setOutput(<Uppercase input={input}/>)
  //       break

  //     case 'lowercase letters':
  //       setOutput(<Lowercase input={input}/>)
  //       break

  //     case 'Title Case':
  //       setOutput(<Titlecase input={input}/>)
  //       break
      
  //     case 'Character Counter':
  //       setOutput(<CharacterCount input={input}/>)
  //       break

  //     case 'Letter Counter':
  //       setOutput(<LetterCount input={input}/>)
  //       break

  //     case 'Word Counter':
  //       setOutput(<WordCount input={input}/>)
  //       break

  //     case 'Vowel Counter':
  //       setOutput(<VowelCount input={input}/>)
  //       break

  //     default:
  //       setOutput("Please Select a Tool")
  //   }
  // }

  return (
    <div>
      <h1>Tools</h1>
      <Dropdown>
        <Dropdown.Toggle  id="dropdown-custom-components" variant="" className ='btn-outline-dark btn-outline-dark:hover' >
          {tool}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {toolList.sort().map((tool, i) => 
          <Dropdown.Item eventKey={i} id={tool} key={i} onClick={ToolChange} >{tool}</Dropdown.Item>
          
          )}

        {/* <Dropdown.Item id='CAPITALS LETTERS' onClick={ToolChange} >CAPITALS LETTERS</Dropdown.Item>
        <Dropdown.Item id='lowercase letters' onClick={ToolChange} >lowercase letters</Dropdown.Item>
        <Dropdown.Item id='Title Case' onClick={ToolChange} >Title Case</Dropdown.Item>
        <Dropdown.Item id='Character Counter' onClick={ToolChange} >Character Count</Dropdown.Item>
        <Dropdown.Item id='Letter Counter' onClick={ToolChange} >Letter Count</Dropdown.Item>
        <Dropdown.Item id='Word Counter' onClick={ToolChange} >Word Count</Dropdown.Item>
        <Dropdown.Item id='Vowel Counter' onClick={ToolChange} >Vowel Count</Dropdown.Item>
        <Dropdown.Item id='FindALetter' onClick={ToolChange} >Find A Letter</Dropdown.Item> */}

        {/* <Dropdown.Item id='Letter Count' onClick={ToolChange} >Vowel Count</Dropdown.Item>
        <Dropdown.Item id='Letter Count' onClick={ToolChange} >Consonant Count</Dropdown.Item>
        <Dropdown.Item id='Letter Count' onClick={ToolChange} >Letter Count</Dropdown.Item>
        <Dropdown.Item id='Letter Count' onClick={ToolChange} >Letter Count</Dropdown.Item> */}
          {/* <Dropdown.Item href="/uppercase">uppercase</Dropdown.Item>
          <Dropdown.Item href="/lowercase">lowercase</Dropdown.Item>
          <Dropdown.Item href="/">Something else</Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>

      <div className="display">
        {display}
        {/* <Display
        input={input}
        inputChange={inputChange}
        processInput={processInput}
        output={output}
        /> */}

        {/* <div>Input</div>
        <input  type="text" onChange={inputChange} value={input}/>
        <button onClick={processInput} >Process</button>
        <div>Output
          <div className="output">{output}
          
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Tools;