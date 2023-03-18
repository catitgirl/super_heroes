import React from 'react';
import './App.css';
import './components/Hero.css';
import './components/Hero';
import Hero from './components/Hero';

const heroes = [{
    name: "Black Cat",
    url: "https://cdn.marvel.com/u/prod/marvel/i/mg/5/d0/5ced5cea5f7ef/clean.jpg",
    position: "change, usually good",
    text: "Felicia Hardy is the daughter of Walter Hardy, a world-renowned cat burglar. After suffering from a traumatic assault by an ex-boyfriend as a college freshman, she trained herself in various fighting styles and acrobatics and, after deciding to follow in her father's footsteps, adopted the costumed identity of the Black Cat.[9] She has the subconscious ability to affect probability fields, producing bad luck for her enemies"
  },
  {
    name: "Black Widow",
    url: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/5d63e43b5a681/clean.jpg",
    position: "good",
    text: "In 1995, super soldier Alexei Shostakov and Black Widow Melina Vostokoff work as Russian undercover agents, posing as a family in Ohio with Natasha Romanoff and Yelena Belova as their daughters. They steal S.H.I.E.L.D. intel and escape to Cuba where their boss, General Dreykov, has Romanoff and Belova taken to the Red Room for training. In the following decades, Shostakov is imprisoned in Russia while Romanoff and Belova become successful, dangerous assassins. Romanoff eventually defects to S.H.I.E.L.D. after helping Clint Barton bomb Dreykov's Budapest office, which apparently kills Dreykov and his young daughter Antonia."
  },
  {
    name: "Power Woman",
    url: "https://i.pinimg.com/236x/bf/01/22/bf0122de05a6b661538a06a94d69e8e1--marvel-comics-art-ms-marvel.jpg",
    position: "change, usually good",
    text: "Jessica Campbell Jones Cage is a superheroine appearing in American comic books published by Marvel Comics. The character was created by writer Brian Michael Bendis and artist Michael Gaydos and first appeared in Alias #1 (November 2001), as part of Marvel's Max, an imprint for more mature content, and was later retroactively established to have first appeared in Amazing Spider-Man #4 (June 1963) in the Silver Age of Comic Books as an originally unnamed classmate of Peter Parker, created by writer-editor Stan Lee and artist Steve Ditko. Within the context of Marvel's shared universe, Jones is a former superhero who becomes the owner (and usually sole employee) of Alias Private Investigations."
  },
  {
    name: "Cat Woman",
    url: "https://qph.cf2.quoracdn.net/main-qimg-39d4506d8f5b2bf92858c9cfab03b426-lq",
    position: "change, usually good",
    text: "Black Cat (Felicia Hardy) is a character appearing in American comic books published by Marvel Comics. Created by Marv Wolfman, Keith Pollard, and Dave Cockrum, the character first appeared in The Amazing Spider-Man #194 (July 1979)."
  },
]

class App extends React.Component {
  render() {

    return ( <div className = "App" > {
        heroes.map((heroe) =>
          <Hero name = {heroe.name}
          url = {heroe.url}
          position = {heroe.position}
          text = {heroe.text} > </Hero>
        )
      } </div>
    );
  }
}

export default App;