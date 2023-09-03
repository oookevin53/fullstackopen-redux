import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Counter = ({ count }) => <div>has {count} votes</div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [counts, setCounts] = useState(new Array(anecdotes.length).fill(0))

  const randomNumber = (max) => () => setSelected(Math.floor(Math.random() * max))
  const addVote = () => () => {
    const copy = [...counts]
    copy[selected] += 1
    setCounts(copy)
  }

  return (
    <>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        <Counter count={counts[selected]} />
      </div>
      <div>
        <Button handleClick={addVote()} text="vote" />
        <Button handleClick={randomNumber(anecdotes.length)} text="next ancedote" />
      </div>
    </>
  )
}

export default App