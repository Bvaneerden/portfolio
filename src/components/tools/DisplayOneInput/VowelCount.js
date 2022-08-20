function VowelCount({ input }) {

  return (
    <div className="output2">{input.toLowerCase().split('').filter(char => char.match(/[aeiou]/)).length} vowels</div>
  )
}

export default VowelCount;