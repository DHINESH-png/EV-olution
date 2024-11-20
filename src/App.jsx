import { useState } from "react";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";



const App = () => {
  const heroData = [
                     {text1:'Dive into', text2:'what you love'},
                     {text1:'Indulge', text2:'your passions'},
                     {text1:'Give in to', text2:'your passions'}
                    ];

        const [heroCount,setHeroCount]=useState(1);
        const [playstatus, setPlaystatus]=useState(false);
  return (
    <div>
      <Background playstatus={playstatus} heroCount={heroCount} />
      <Navbar/>
      <Hero 
      heroData={heroData[heroCount]}
      playstatus={playstatus}
      setPlaystatus={setPlaystatus}
      heroCount={heroCount}
      setHeroCount={setHeroCount}
      />
    </div>
  )
};

export default App