import './Hero.css';
import arrow from '../../assets/arrow_btn.png';
import pause from '../../assets/pause_icon.png';
import play from '../../assets/play_icon.png';

function Hero({heroData,setPlaystatus, playstatus,heroCount, setHeroCount}) {
  return (
    <div className='hero'>
        <div className="hero-text">
            <p>{heroData.text1}</p>
            <p>{heroData.text2}</p>
        </div>
    <div className="hero-explore">
        <p>Explore the feature</p>
        <img src={arrow} alt="" />
    </div>
    <div className="hero-dot-play">
        <ul className="hero-dots">
            <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
            <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
        </ul>
        </div>
    <div className="hero-play">
        <img onClick={()=>setPlaystatus(!playstatus)} src={playstatus?pause:play} alt="" />
    </div>
    </div>
  )
}

export default Hero