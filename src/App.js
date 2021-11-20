import './App.css';
import {useState} from 'react';

export default function App() {
  const movies = [
    {
      name: " Eternals (2021)",
      rating:"6.9",
      summary:"The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.",
      poster:"https://m.media-amazon.com/images/M/MV5BMTExZmVjY2ItYTAzYi00MDdlLWFlOWItNTJhMDRjMzQ5ZGY0XkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_.jpg",
    },
    {
      name: " Dune (2021)",
      rating:"8.2",
      summary:"Feature adaptation of Frank Herbert's science fiction novel, about the son of a noble family entrusted with the protection of the most valuable asset and most vital element in the galaxy.",
      poster:"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61116cea2313e8bae55a536a%2F-Dune-%2F0x0.jpg%3Ffit%3Dscale",
    }, 
    {
      name: "Army of Thieves (2021)",
      rating:"6.4",
      summary:"A prequel, set before the events of Army of the Dead, which focuses on German safecracker Ludwig Dieter leading a group of aspiring thieves on a top secret heist during the early stages of the zombie apocalypse.",
      poster:"https://m.media-amazon.com/images/M/MV5BNzQxYzNjMGItNzVlMS00NjBhLWI4NTItMmVkZTI0NGE3ZDI2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    },
    {
      name: "The Harder They Fall (2021)",
      rating:"6.6",
      summary:"When an outlaw discovers his enemy is being released from prison, he reunites his gang to seek revenge in this Western.",
      poster:"https://m.media-amazon.com/images/M/MV5BYjg4NGExN2EtZmMxYy00ZDEwLWJiZGEtOWRiN2RlMGE0OWE0XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg"
    },
    {
      name: "Squid Game (2021)",
      rating:"8.1",
      summary:"Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes. A survival game that has a whopping 45.6 billion-won prize at stake.",
      poster:"https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "Last Night in Soho (2021)",
      rating:"7.5",
      summary:"An aspiring fashion designer is mysteriously able to enter the 1960s where she encounters a dazzling wannabe singer. But the glamour is not all it appears to be and the dreams of the past start to crack and splinter into something darker.",
      poster:"https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "No Time to Die (2021)",
      rating:"7.5",
      summary:"James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
      poster:"https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
    },
    {
      name: "Finch (2021)",
      rating:"7.0",
      summary:"On a post-apocalyptic earth, a robot, built to protect the life of his creator's beloved dog, learns about life, love, friendship and what it means to be human.",
      poster:"https://m.media-amazon.com/images/M/MV5BZTMxYjk3MmItMzk1OC00NmRhLThlMjYtNmQyNzA0MzgxMWI2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name: "The French Dispatch (2021)",
      rating:"7.5",
      summary:"A love letter to journalists set in an outpost of an American newspaper in a fictional twentieth century French city that brings to life a collection of stories published in ",
      poster:"https://m.media-amazon.com/images/M/MV5BNmQxZTNiODYtNzBhYy00MzVlLWJlN2UtNTc4YWZjMDIwMmEzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      name : "Maid (2021)",
      rating:"8.5",
      summary:"After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.",
      poster:"https://m.media-amazon.com/images/M/MV5BY2RhNmZmZmQtYzQ4ZS00MDYyLTgwMmUtZGY5NDMwNDQzNWI1XkEyXkFqcGdeQXVyOTMzOTMzMTg@._V1_FMjpg_UX1000_.jpg",
    },
  ];
  return ( 
    <div className="App">
      {/* <MovieList movies={movies} />   */}
      <Counter/>
    </div>
  );
}

// import {useState} from 'react';
// hook is function - starts with 'use'
function Counter() {
  // const like = 10;
  // const [state, setState] = useState(InitialValue);
  // state - current scenario - current data
  // state - imp variable; setState - Informing React state is change - re-render(updating)
  // render - showing on the screen 

  // button click -> onclick -> setlike -> Inform React like is changed
  // React will re-render the view

  const [like, setLike] = useState(0);
  return (
    <div>
      <button onClick = {() => {
        // like = like + 1; //React dosen't know like is changed
        setLike(like+1); //Inform React Like is Changed
      }}
      > Like{like} </button>
    </div>
  );
}

function MovieList({ movies }) {
  return ( 
    <section className="movie-list">
    {movies.map(({name, rating, summary, poster}) => (
      <Movies name={name} rating = {rating} summary = {summary} poster = {poster} />  
    ))}
    </section> 
);
}

function Movies({name, rating, summary, poster}){
  return (
    <div  className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <div className="movie-specs">
        <h3 className="movie-name"> {name}</h3>
        <p className="movie-rating"><span class="fa fa-star checked"></span>{rating}</p>
      </div>
      <p className="movie-summary">{summary}</p>
    </div>
  ); 
}


