import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Stat = ({ text, stat }) => <div>{text} {stat}</div>

const Stats = ({ goodText, goodStat, neutralText, neutralStat, badText, badStat }) => {
  return (
  <div>
    <Stat text={goodText} stat={goodStat} />
    <Stat text={neutralText} stat={neutralStat} />
    <Stat text={badText} stat={badStat} />
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => () => setGood(good + 1)
  const handleNeutralClick = () => () => setNeutral(neutral + 1)
  const handleBadClick = () => () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback" />
      <Button handleClick={handleGoodClick()} text="good" />
      <Button handleClick={handleNeutralClick()} text="neutral" />
      <Button handleClick={handleBadClick()} text="bad" />
      <Header text="statistics" />
      <Stats 
        goodText="good"
        goodStat={good}
        neutralText="neutral"
        neutralStat={neutral}
        badText="bad"
        badStat={bad}
      />
    </div>
  )
}

export default App