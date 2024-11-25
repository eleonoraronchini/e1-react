import "./App.css";
import ImageClassComponent from "./components/ImageClassComponent";
import ButtonComponent from "./components/ButtonComponent";
import img2 from "./components/img/img 2.png"
import img3 from "./components/img/img 3.png"
import img4 from "./components/img/img 4.png"
import img5 from "./components/img/img 5.png"
import img6 from "./components/img/img 6.png"
import img7 from "./components/img/img 7.png"
import img8 from "./components/img/img 8.png"
import img9 from "./components/img/img 9.png"
import TitleComponent from "./components/TitleComponent";
import SubtitleComponent from "./components/SubtitleComponent";
import logo from "./components/img/funko-logo-0.png"
import LogoComponent from "./components/LogoComponent";

function App() {
  return (
    <div className="App">
      <TitleComponent title = "FUNKO POP STORE" />
      <SubtitleComponent subtitle = "Yugi Itadori"/>

<ImageClassComponent
    image = {img2} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Utahime Iori"/>

<ImageClassComponent
    image = {img3} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Megumi Fushiguro"/>

<ImageClassComponent
    image = {img4} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Momo Nishimiya"/>

<ImageClassComponent
    image = {img5} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />

<SubtitleComponent subtitle = "Nobara Kugisaki"/>

<ImageClassComponent
    image = {img6} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Satoru Gojo"/>

<ImageClassComponent
    image = {img7} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Mahito"/>

<ImageClassComponent
    image = {img8} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
   <SubtitleComponent subtitle = "Panda"/>

<ImageClassComponent
    image = {img9} 
    alt="Jujutsu Kaisen Character"
  />
  <ButtonComponent
    myText="Acquista ora!"
  />
    </div>

  );
}

export default App;
