import { useState } from 'react'
import quotes from "./assets/quotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";
import './App.css'

interface Quote {
  quote: string;
  author: string;
}

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random()* quotes.length)];
}

const getRandomColor = (): string => {
  return colors[Math.floor(Math.random() * colors.length)];
};
const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

const changeQuote = () => {
  setQuote(getRandomQuote())
  setRandomColor(getRandomColor());
};


  return (
    <div className= "background" style={{backgroundColor: randomColor, transition}}>
      <div id="quote-box">
        <div className="quote-content" style={{color: randomColor, transition}}>
          
          <h2 id="text">
          <FaQuoteLeft siz="30" style={{marginRight: "10px"}} />{quote.quote}</h2>
          <FaQuoteRight siz="30" style={{marginLeft: "10px"}} />
          <h4 id="author">- {quote.author}</h4>
          </div>
          <div className="buttons">
            <a 
            href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22Happiness%20is%20not%20something%20readymade.%20%20It%20comes%20from%20your%20own%20actions.%22%20Dalai%20Lama'}
             id="tweet-quote"
             style={{backgroundColor: randomColor, marginRight: "10px" , transition}}>
              <FaTwitter color="white"/>
             </a>
             <button id="new-quote" onClick={changeQuote} style={{backgroundColor: randomColor, transition}}>Change Quote </button>
          </div>
          
          </div> 
    </div>
  )
}

export default App
