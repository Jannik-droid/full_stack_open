import { click } from '@testing-library/user-event/dist/click'
import { useState } from 'react'

const Header = ({input}) => {
  return(
    <h1>
      {input}
    </h1>
  )
}

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticsLine = ({text, value}) => {

  if (text == 'positive') {
    return (
      <tr>
      <td>{text}:</td>
      <td>{value}%</td>
    </tr>
    )
  }


  return(
    <tr>
      <td>{text}:</td>
      <td>{value}</td>
    </tr>
  )
}



const Statistics = ({clicks}) => {

  const total = clicks.good + clicks.neutral + clicks.bad
  const average = (clicks.good -clicks.bad) / total
  const positive = clicks.good * (100/total)

  if (total == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
      <StatisticsLine text='good' value={clicks.good} />
      <StatisticsLine text='neutral' value={clicks.neutral} />
      <StatisticsLine text='bad' value={clicks.bad} />
      <StatisticsLine text='total' value={total} />
      <StatisticsLine text='average' value={average} />
      <StatisticsLine text='positive' value={positive} />
      </table>
    </div>


  )
} 






const App = () => {
  // save clicks of each button to its own state
  const [clicks, setClicks] = useState({good:0, neutral:0, bad:0})

  const increaseGoodClick = () => setClicks({...clicks, good: clicks.good +1})
  const increaseNeutralClick = () => setClicks({...clicks, neutral: clicks.neutral +1})
  const increaseBadClick = () => setClicks({...clicks, bad: clicks.bad +1})


  return (
    <div>
      <Header input='give feedback'/>
      <Button text='good' onClick={increaseGoodClick}/>
      <Button text='neutral' onClick={increaseNeutralClick}/>
      <Button text='bad' onClick={increaseBadClick}/>
      <Header input='statistics' />
      <Statistics clicks={clicks} />

    </div>
  )
}

export default App