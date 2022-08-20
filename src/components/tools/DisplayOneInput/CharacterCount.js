function CharacterCount({ input }) {

  return (
    <div className="output2">{input.split('').length} characters including spaces</div>
  )
}

export default CharacterCount;