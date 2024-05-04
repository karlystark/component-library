import './App.css';
import PlantToggle from "./Toggles/PlantToggle/PlantToggle.js";
import SmileyToggle from "./Toggles/SmileyToggle/SmileyToggle.js";
import FlowerToggle from "./Toggles/FlowerToggle/FlowerToggle.js";
import PizzaToggle from "./Toggles/PizzaToggle/PizzaToggle.js";
import VideoCard from "./Cards/VideoCard/VideoCard.js";
import PhotoCard from "./Cards/PhotoCard/PhotoCard.js";
import { useState } from "react";

const toggleData = [
  {
    text: ["switch it up", "ok, go off"],
    colors: ['bg-green-900', 'bg-stone-800'],
  },
  {
    text: ["let's be friends", "hi there, friend"],
    colors: ['bg-blue-900', 'bg-stone-800'],
  },
  {
    text: ["pizza time?", "pizza time!"],
    colors: ['bg-red-900', 'bg-stone-800'],
  },
  {
    text: ["water plants", "watered"],
    colors: ['bg-yellow-900', 'bg-stone-800'],
  },

]

const videoCardData = [
  {
    video: 'demovid2.mp4',
    image: 'dog.jpg',
    alt: 'great dane',
    text: ['some thing','just a place for text. no bells, no whistles and mostly pretty expandable.'],
  },
  {
    video: 'demovid1.mp4',
    image: 'coast.jpg',
    alt: 'mendocino coast',
    text: ['out there','just a place for text. no bells, no whistles and mostly pretty expandable.'],

  }
];

const photoCardData = [
  {
    image: 'dog.jpg',
    alt: 'great dane',
    heading: 'Tulip',
    text: ['Breed: Great Dane', 'Age: 3'],
  }
];


function App() {

  const [isOn1, setIsOn1] = useState(false);
  const [isOn2, setIsOn2] = useState(false);

  function colorChange1(){
    setIsOn1(!isOn1);
  }

  function colorChange2(){
    setIsOn2(!isOn2);
  }

  // useEffect(() => {
  //   document.body.style.backgroundColor = isOn ? '#e6470d' : '';
  // }, [isOn]);

  return (
    <div className="App">
    <div className={`App flex relative flex-col pb-8 ${isOn1? 'bg-[#e6470d]': ''}`}>
      <h1 className={`${isOn1? 'text-[#f6e6d9]': ''}`}>HI THERE</h1>
      <PlantToggle data={toggleData[0]} isChecked={isOn1} changeScreen={colorChange1} />
      <SmileyToggle data={toggleData[1]} isChecked={isOn1} changeScreen={colorChange1}/>
      <PizzaToggle data={toggleData[2]} isChecked={isOn1} changeScreen={colorChange1}/>
      <FlowerToggle data={toggleData[3]} isChecked={isOn1} changeScreen={colorChange1}/>
      <VideoCard data={videoCardData[0]}/>
      <PhotoCard data={photoCardData[0]}/>
      <img src={`${isOn1? "planting.png": "planting-green.png"}`} alt="planting" className="planting-img"></img>
      <p className="beep">beep beep</p>
    </div>
    <div className={`App2 flex flex-col pb-8 ${isOn2? 'bg-[#cd9710]': ''}`}>
      <h1 className={`${isOn2? 'text-[#f6e6d9]': ''}`}>GOOD LOOK</h1>
      <PlantToggle data={toggleData[0]} isChecked={isOn2} changeScreen={colorChange2} />
      <VideoCard data={videoCardData[1]}/>
      <img src={`${isOn2? "world.png": "world-brown.png"}`} alt="world" className="world-img"></img>
      <p className="around">around</p>
    </div>
    </div>
  );
}

export default App;
