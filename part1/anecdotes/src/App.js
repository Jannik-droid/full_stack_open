import { useState } from 'react'



const Header = ({title}) => {
  return(
    <h1>
      {title}
    </h1>
  )
}

const RandomNumber = ({selected}) => {
  console.log(selected.leangth)
  return (
    Math.floor(Math.random() * {selected}.leangth)
  )

}

const Button = ({text, onClick}) => {
  return(
    <p>
    <button onClick={onClick}>{text}</button>
    </p>
  )
}

const AnecdoteViewer = ({anecdote, votes}) => {
  return(
    <div>
      {anecdote} <br/>
      has {votes} votes
    </div>
  )
}

const MostVotesAnecdote = ({anecdotes, arrayVotes}) => {
  const highestVote = Math.max(...arrayVotes)
  const highestVoteIndex = arrayVotes.indexOf(highestVote)

  if (highestVote == 0) {
    return (
      <div>
        no Votes yet
      </div>
    )
  }

  return (
    <AnecdoteViewer anecdote={anecdotes[highestVoteIndex]} votes={highestVote}/>
  )

}





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
  const [arrayVotes, setArrayVotes] = useState(Array(8).fill(0))
  
  const selectAnecdote = () => {
    const indexArray = Math.floor(Math.random()*anecdotes.length)
    setSelected(indexArray)
  }

  const voteFunction = () => {
    const newArrayVotes = [...arrayVotes]
    newArrayVotes[selected] +=1
    setArrayVotes(newArrayVotes)
  }

  return (
    <div>
      <Header title='Anecdote of the day'/>
      <AnecdoteViewer anecdote={anecdotes[selected]} votes={arrayVotes[selected]}/>
      <Button text='Vote'  onClick={voteFunction}/>
      <Button text='next anecdote' onClick={selectAnecdote}/>
      <Header title='Anecdote with the most votes'/>
      <MostVotesAnecdote anecdotes={anecdotes} arrayVotes={arrayVotes}/>

    </div>
  )
}

export default App