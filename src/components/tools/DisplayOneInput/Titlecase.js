function Titlecase({ input }) {

  return (
    <div className="output2">{input.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ')}</div>
  )
}

export default Titlecase;