import React, { useState, useEffect } from 'react';
// import './App.css';
import { LuArrowDown, LuLayoutDashboard, LuScanFace, LuSendHorizonal, LuSettings, LuStore } from 'react-icons/lu';
import Navbar from './components/Navbar';
function TwitterCard({name, username, tweet, pic, verify }) {
  return (
    <div style={{background: '#00000033',backdropFilter: 'blur(26px)', borderRadius: '1rem', border: '1px solid #8080806e', minWidth: '20rem', margin: '0 1rem'}}>
      <div style={{display: 'flex', height: '3rem', overflow: 'hidden', width: '90%', margin: '1rem auto'}}>
        <img src={pic} alt="User profile" style={{borderRadius: '50%'}}/>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '75%', margin: 'auto'}}>
          <h2 style={{fontSize: '0.9rem', margin: '0'}}>{name}<span><img  style={{objectFit:'contain', height:'1rem',marginLeft: '0.3rem',translate:'0 1px', opacity:verify?"1":"0"}} src='https://preview.redd.it/avql0793016a1.png?width=512&format=png&auto=webp&s=cad003902697ea86b7125a6aeb1b75d168b428ea'></img></span> </h2>
          <h2 style={{margin: '0', fontSize: '0.7rem', opacity: '0.6', fontWeight: '100'}}>{username}</h2>
        </div>
      </div>
      <h2 style={{fontSize: '0.9rem', width: '85%', fontWeight: '100', margin: '1rem auto', marginTop: '0'}}>{tweet}</h2>
    </div>
  );
}

function FeatureCard({title, text, icon}){
  return(
    <div className='featureCard'>
      {icon} 
      <h1 style={{margin: '0',marginTop:'0rem',fontSize: '1.3rem', width:'90%'}}>{title}</h1>
      <h1 style={{margin: '1rem 0', fontSize: '0.9rem', fontWeight: '100', opacity: '0.6', width:'90%'}}>{text}</h1>
    </div>
  );
}

const TypeEffectWithChangingTone = () => {

  useEffect(() => {
    var tones = ["Supportive Tone ", "Critic Tone", "Encouraging Tone "]; 
    var index = 0;
    var textElement = document.getElementById("tone");
    
    function typeEffect(text, speed, callback) {
      var i = 0;
      var interval = setInterval(function() {
        if (i < text.length) {
          textElement.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(interval);
          setTimeout(callback, 2000 ); 
        }
      }, speed);
    }

    function changeTone() {
      textElement.textContent = "";
      typeEffect(tones[index], 100, function() {
        index = (index + 1) % tones.length;
        setTimeout(changeTone, 2000); // Change tone after 2 seconds
      });
    }

    typeEffect("Affirmative Tone", 100, function() {
      setTimeout(changeTone, 2000); // Start changing tone after 2 seconds
    });
  }, [])
  
  return (
      <div id="tone-container">Reply with <span id="tone"></span> <span id="blinkingCursor">|</span> <LuSendHorizonal style={{position:'absolute', right:'1rem', top:'1.5rem'}} /></div>
  );
};

function FAQItem({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);


  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
    setIsSelected(!isSelected);
  };

  return (
    <div className={`faqItem ${!isSelected ? 'selected' : 'faqitemSelected'}`}>
      <div className="faqItemQuestion">
        <h1>{question}</h1>
        <div className="faqItemCircle" onClick={toggleAnswer}>
          <LuArrowDown alt="Arrow" style={{ transform: isAnswerVisible ? 'rotate(180deg)' : 'rotate(0deg)' }} />
        </div>
      </div>
      {isAnswerVisible && (
        <div className="faqItemAnswer">
          <h1>{answer}</h1>
        </div>
      )}
    </div>
  );
}


function Homepage() {
  return (
    <div id='home'>
      <Navbar />
      <div className='backgroundImage'></div>
      <div className='heropage'>
        <img style={{ width: '30%',objectFit: 'contain', objectFit: 'contain', margin: "0 auto",filter: 'drop-shadow(-11px -6px 16px white)' }} src='./word-white-logo.png' alt="Logo" />
        <h1 className="gWhite fontsmallmobile" style={{margin: '0px auto', width: '100%', textAlign: 'center' }}> Transform Your X Conversations</h1>
        <h1 className="gWhite fontsmallmobile" style={{ margin: '0px auto', width: '100%', textAlign: 'center'}}> with <span className='gPurple'>AI-Generated Replies</span></h1>
        <h1 className="gWhite" style={{ margin: '0 auto',marginTop:'1rem', fontSize:'1rem' }}> 4.5⭐  |  500+ Users</h1>

        <div className='animated-border-box-container' style={{ margin: '3rem auto' }}>
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <a href={"https://chromewebstore.google.com/detail/superx/gmafmgmalkidnhopkelmmkkogbneeedi"} target='_blank_' rel="noopener noreferrer"><h1>Install Extension</h1></a>
          </div>
        </div>
        <div style={{display:'flex',margin:'2rem 0', width: '80%', animation:'100s Unlimitedscroll infinite linear'}}>
          <TwitterCard name="Y.J." username="@depindaddy" verify={true} tweet={"SuperX is my secret weapon for those days when the words just won't flow."} pic={"https://pbs.twimg.com/profile_images/1765084459169169408/v7Gv_e5Z_400x400.jpg"} />
          <TwitterCard name="Hamza" username="@mostuselessboy" verify={false} tweet={"This SuperX Extension is like Co-Pilot for Twitter🔥"} pic={"https://pbs.twimg.com/profile_images/1761065591090335744/jxUokIB3_400x400.jpg"} />
          <TwitterCard name="Crypto_mit" username="@nelsonpaul_tez" verify={true} tweet={"With SuperX, my tweets have never been more on point. AI FTW!"} pic={"https://pbs.twimg.com/profile_images/1682403310257721346/kcaIrLGk_400x400.jpg"} />
          <TwitterCard name="Cluster Protocol" username="@clusterprotocol" verify={true} tweet={"Tweet smarter, not harder – thanks to SuperX 💪"} pic={"https://pbs.twimg.com/profile_images/1746246376756039680/qg_oAWkf_400x400.jpg"} />
          <TwitterCard name="Y.J." username="@depindaddy" verify={true} tweet={"SuperX is my secret weapon for those days when the words just won't flow."} pic={"https://pbs.twimg.com/profile_images/1765084459169169408/v7Gv_e5Z_400x400.jpg"} />
          <TwitterCard name="Hamza" username="@mostuselessboy" verify={false} tweet={"This SuperX Extension is like Co-Pilot for Twitter🔥"} pic={"https://pbs.twimg.com/profile_images/1761065591090335744/jxUokIB3_400x400.jpg"} />
          <TwitterCard name="Crypto_mit" username="@nelsonpaul_tez" verify={true} tweet={"With SuperX, my tweets have never been more on point. AI FTW!"} pic={"https://pbs.twimg.com/profile_images/1682403310257721346/kcaIrLGk_400x400.jpg"} />
          <TwitterCard name="Cluster Protocol" username="@clusterprotocol" verify={true} tweet={"Tweet smarter, not harder – thanks to SuperX 💪"} pic={"https://pbs.twimg.com/profile_images/1746246376756039680/qg_oAWkf_400x400.jpg"} />
          
        </div>

      </div>
    

      <div style={{margin:"3rem 0 ", marginBottom:'10rem'}}>
        <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:0}}>Choose the <span className='gPurple'> Tone </span> that fits the best!</h1>
        <TypeEffectWithChangingTone />
        
      </div>

      <div id="features">
        <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:'4rem'}}>SuperX <span className='gPurple'> Features </span></h1>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 0', width: '95%', margin: '2rem auto'}}>
          <FeatureCard icon={<LuLayoutDashboard size={40} style={{opacity:0.4, marginLeft:'auto', marginTop:'1rem', marginBottom:'0'}} />} title={"Dashboard"} text={"SuperX offers an analytics dashboard that provide insights into your usage pattern, credits used and credit left."}/>
          <FeatureCard icon={<LuSettings size={40} style={{opacity:0.4, marginLeft:'auto', marginTop:'1rem', marginBottom:'0'}} />} title={"Custom Prompts"} text={"You can define prompts and train the AI to respond in a way that match your unique voice and style."}/>
          <FeatureCard icon={<LuStore size={40} style={{opacity:0.4, marginLeft:'auto', marginTop:'1rem', marginBottom:'0'}} />} title={"Prompt Marketplace"} text={"Our prompt marketplace provides a community where user can share and discover new prompts."}/>
          <FeatureCard icon={<LuScanFace size={40} style={{opacity:0.4, marginLeft:'auto', marginTop:'1rem', marginBottom:'0'}} />} title={"Avatar"} text={"You gain access to powerful Ai algorithms that analyze tweet content and provide instant, well crafted responses."}/>
        </div>
      </div>


      <div className='steroidsContainer'>
        <img src='https://techcrunch.com/wp-content/uploads/2014/06/twitter-rise.gif' style={{borderRadius: '1rem', width: '30%', height: '83%', objectFit: 'cover', margin: '0px 1rem', filter: 'hue-rotate(47deg) saturate(1) grayscale(0.4)'}}></img>
        <div>
          <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:'4rem', textAlign:'left'}}>SuperX is <span className='gPurple'> Twitter </span> with<span className='gPurple'> Steroids 💫</span> </h1>
          <h2 style={{margin: '-2rem 0', fontSize: '1.2rem', opacity:0.6, color:'white', fontWeight: '100'}}>65% people found boost in their profile after using SuperX!</h2>

          <div className='animated-border-box-container' style={{ margin: '3rem 0' }}>
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <a href={"https://t.me/clusterprotocolchat"} target='_blank_' rel="noopener noreferrer"><h1>Boost Your Profile</h1></a>
          </div>
        </div>
        </div>
      </div>

      <div id="pricing">
        <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:'0rem'}}>Choose Your <span className='gPurple'> Pricing </span></h1>
        <div style={{display:'flex',flexWrap:'wrap', justifyContent:'space-around'}}>

          <div className='pricingcard'>
            <h1 style={{fontSize:'1.5rem'}}>Free</h1>
            <h1 className='gPurple' style={{fontWeight:'bold'}}>$0/M0</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5, marginTop:'2rem'}}>Perfect to Start with</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>30 requests/month</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>All type of reactions</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>Premium Support</h1>
          </div>
          <div className='pricingcard'>
            <h1 style={{fontSize:'1.5rem'}}>Starter</h1>
            <h1 className='gPurple' style={{fontWeight:'bold'}}>$5/M0</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5, marginTop:'2rem'}}>For Beginner</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>200 requests/month</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>All type of reactions</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>Premium Support</h1>
          </div>
          <div className='pricingcard'>
            <h1 style={{fontSize:'1.5rem'}}>Basic</h1>
            <h1 className='gPurple' style={{fontWeight:'bold'}}>$15/M0</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5, marginTop:'2rem'}}>For Active User</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>600 requests/month</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>All type of reactions</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>Premium Support</h1>
          </div>
          <div className='pricingcard'>
            <h1 style={{fontSize:'1.5rem'}}>Starter</h1>
            <h1 className='gPurple' style={{fontWeight:'bold'}}>$30/M0</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5, marginTop:'2rem'}}>For Influencer</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>1500 requests/month</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>All type of reactions</h1>
            <h1 style={{fontSize:'0.8rem', opacity:0.5}}>Premium Support</h1>
          </div>
        </div>
          
          
          
      </div>
      <div id="faqs">
        <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:'0rem'}}>Most Asked <span className='gPurple'> Questions </span></h1>
        <FAQItem question={'How SuperX works?'} answer={"Our free plan is to help twitter enthusiast grow their account without struggling to replies conversation. Our business plan is to help twitter enthusiast grow their account without struggling to replies conversation."}/>
        <FAQItem question={'How do SuperX work on Twitter?'} answer={"Our free plan is to help twitter enthusiast grow their account without struggling to replies conversation. Our business plan is to help twitter enthusiast grow their account without struggling to replies conversation."}/>
        <FAQItem question={'What’s our free plan?'} answer={"Our free plan is to help twitter enthusiast grow their account without struggling to replies conversation. Our business plan is to help twitter enthusiast grow their account without struggling to replies conversation."}/>
      </div>

    <footer>
      <img style={{ width: '10rem', objectFit: 'contain', margin: "0 auto",filter: 'drop-shadow(-11px -6px 16px white)' }} src='./word-white-logo.png' alt="Logo" />
      <h1 style={{fontSize:'1rem'}}>SuperX 2024 ©</h1>
    </footer>
    </div>
  );
}

export default Homepage;
