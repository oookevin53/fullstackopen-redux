import { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({ goodText, goodValue, neutralText, neutralValue, badText, badValue, allText, averageText, positiveText }) => {
  if (goodValue === 0 && neutralValue === 0 && badValue === 0) {
    return <div>No feedback given</div>
  }
  return (
    <table>
      <StatisticLine text={goodText} value={goodValue} />
      <StatisticLine text={neutralText} value={neutralValue} />
      <StatisticLine text={badText} value={badValue} />
      <StatisticLine text={allText} value={goodValue + neutralValue + badValue} />
      <StatisticLine text={averageText} value={(goodValue - badValue) / (goodValue + neutralValue + badValue)} />
      <StatisticLine text={positiveText} value={100 * (goodValue) / (goodValue + neutralValue + badValue) + " %"} />
    </table>
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
      <Statistics 
        goodText="good"
        goodValue={good}
        neutralText="neutral"
        neutralValue={neutral}
        badText="bad"
        badValue={bad}
        allText="all"
        averageText="average"
        positiveText="positive"
      />
    </div>
  )
}

export default App