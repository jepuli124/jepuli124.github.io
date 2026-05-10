import "../css/Hero.css";
import { ZigZagGrid } from "./ZigZagGrid";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Hello, I'm Jepuli124 🧙‍♂️</h1>
      <p>General Developer specializing in being the jack-of-all-trades with preferences to be in front-end and game development</p>
      <br />
      <h2>My github is filled with all kind of projects and here are my better looking websites:</h2>
      <br />
      <ZigZagGrid items={[
        <p>A site used to inform when I make next party</p>, 
        <a href="https://jepuli124.github.io/invitationletter/" target="_blank">Invitation letter</a>,

        <p>My self made slotmachine site (WIP)</p>, 
        <a href="https://jepuli124.github.io/SlotsAndDice/" target="_blank" >The Slot machine</a>,

        <p>A site</p>, 
        <a href="https://jepuli124.github.io/site/" target="_blank" >The site</a>,

        ]}/>

      
    </section>
  );
}