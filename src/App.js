import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

import Popup from 'reactjs-popup';



const cardImages = [
  { "src": "/img2/fish.jpeg", matching: false },
  { "src": "/img2/monket.jpeg", matching: false },
 {"src": "/img2/sheep.jpeg",matching:false},
 {"src": "/img2/rabit.jpeg",matching:false},
 {"src": "/img2/whale.jpeg",matching:false},
 {"src": "/img2/tiger.jpeg",matching:false}

]
// const cardImages = [
//   { "src": "/img/helmet-1.png", matched: false },
//   { "src": "/img/potion-1.png", matched: false },
//   { "src": "/img/ring-1.png", matched: false },
//   { "src": "/img/scroll-1.png", matched: false },
//   { "src": "/img/shield-1.png", matched: false },
//   { "src": "/img/sword-1.png", matched: false },
// ]


function App() {

  const [cards, setCards] = useState([])
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disable, setDisable] = useState(false)
  const [dodos, setDodos] = useState(false)


  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shuffledCards)
    setDodos(false)

  }



  const handleChoice = (card) => {

    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

  }



  useEffect(() => {

    if (choiceOne && choiceTwo) {
      setDisable(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(pervCards => {
          return pervCards.map(card => {
            if (card.src === choiceOne.src) {

              return { ...card, matching: true }

            } else {
              return card
            }

          })
        })
        reset()
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [choiceOne, choiceTwo])


  useEffect(() => {
    shuffleCards()
  }, [])







  const bye = () => {

    const x = []
    cards.every(card => (
      x.push(card.matching)
    ))
    if (!x.includes(false)) {
      setDodos(true)
      setTimeout(() => shuffleCards(), 1000)
    }
  }



  
  const reset = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setDisable(false)
  }




  return (
    <div className="App">

      <h1>Matching Game</h1>

      {/* <button onClick={shuffleCards}>New Game</button> */}
      <br></br>

      <div className="card-grid">
        {cards.map(card => (<SingleCard card={card}
          key={card.id}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matching}
          disable={disable}
        />
        ))}
      </div>
<br></br>
      <button onClick={bye}>All matched</button>
      {dodos && (
      <div className='grats'>
         Congratulation you have won the game
      </div>)
      
      }



    </div>
  );
}


export default App;
