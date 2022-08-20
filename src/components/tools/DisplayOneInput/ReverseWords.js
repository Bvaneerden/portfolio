function ReverseWords({ input }) {

  return (
    <div className="output2">{input.split(' ').reverse().join(' ')}</div>
  )
}

export default ReverseWords;