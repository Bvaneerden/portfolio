function LetterCount({ input }) {

  return (
    <div className="output2">{input.split(' ').join('').split('').length} letters excluding spaces</div>
  )
}

export default LetterCount;