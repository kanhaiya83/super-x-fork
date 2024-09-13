import React, { useState, useEffect } from 'react';
import { FaXTwitter } from "react-icons/fa6";

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
        <h1 className="gWhite fontsmallmobile" style={{margin: '0px auto', width: '100%', textAlign: 'center' }}> Supercharge your <FaXTwitter/></h1>
        <h1 className="gWhite fontsmallmobile" style={{ margin: '0px auto', width: '100%', textAlign: 'center'}}>with <span className='gPurple'>Super X</span></h1>
        {/* <h1 className="gWhite" style={{ margin: '0 auto',marginTop:'1rem', fontSize:'1rem' }}> 4.5⭐  |  500+ Users</h1> */}

        <div className='animated-border-box-container' style={{ margin: '3rem auto' }}>
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box">
            <a href={"https://chromewebstore.google.com/detail/superx/gmafmgmalkidnhopkelmmkkogbneeedi"} target='_blank_' rel="noopener noreferrer"><h1>Install Extension</h1></a>
          </div>
        </div>
        <div style={{display:'flex',margin:'2rem 0', width: '80%', animation:'100s Unlimitedscroll infinite linear'}}>
          <TwitterCard name="Y.J." username="@depindaddy" verify={true} tweet={"SuperX is my secret weapon for those days when the words just won't flow."} pic={"https://pbs.twimg.com/profile_images/1765084459169169408/v7Gv_e5Z_400x400.jpg"} />
          <TwitterCard name="Hamza" username="@mostuselessboy" verify={false} tweet={"This SuperX Extension is like Co-Pilot for Twitter🔥"} pic={"https://pbs.twimg.com/profile_images/1811670597115527169/uBe6MT63_400x400.jpg"} />
          <TwitterCard name="Crypto_mit" username="@nelsonpaul_tez" verify={true} tweet={"With SuperX, my tweets have never been more on point. AI FTW!"} pic={"https://pbs.twimg.com/profile_images/1824206686959157249/moz8OPMr_400x400.jpg"} />
          <TwitterCard name="Cluster Protocol" username="@clusterprotocol" verify={true} tweet={"Tweet smarter, not harder – thanks to SuperX 💪"} pic={"https://pbs.twimg.com/profile_images/1746246376756039680/qg_oAWkf_400x400.jpg"} />
          <TwitterCard name="Y.J." username="@depindaddy" verify={true} tweet={"SuperX is my secret weapon for those days when the words just won't flow."} pic={"https://pbs.twimg.com/profile_images/1765084459169169408/v7Gv_e5Z_400x400.jpg"} />
          <TwitterCard name="Hamza" username="@mostuselessboy" verify={false} tweet={"This SuperX Extension is like Co-Pilot for Twitter🔥"} pic={"https://pbs.twimg.com/profile_images/1811670597115527169/uBe6MT63_400x400.jpg"} />
          <TwitterCard name="Crypto_mit" username="@nelsonpaul_tez" verify={true} tweet={"With SuperX, my tweets have never been more on point. AI FTW!"} pic={"https://pbs.twimg.com/profile_images/1824206686959157249/moz8OPMr_400x400.jpg"} />
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

      {/* <div id="pricing">
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
          
          
          
      </div> */}
      <div id="faqs">
        <h1 style={{color:'white', width:'100%', textAlign:'center', fontSize:'1.5rem', marginBottom:'3rem', marginTop:'0rem'}}>Most Asked <span className='gPurple'> Questions </span></h1>
        <FAQItem question={`How does Super X work?`} answer={`Super X is an AI-powered tool that enhances your Twitter experience built by Cluster Protocol. It analyzes the context of conversations and generates intelligent replies, helping you engage more effectively with your audience. The tool integrates seamlessly with Twitter, allowing you to craft responses quickly and effortlessly.`}/>
        <FAQItem question={`How can Super X improve my Twitter presence?`} answer={`Super X can significantly boost your Twitter engagement. It helps you respond more quickly and intelligently to conversations, saving you time while maintaining your personal tone. Many users report a noticeable boost in their profile engagement after using Super X.`}/>
        <FAQItem question={`Is Super X difficult to set up and use?`} answer={`Not at all. Super X is designed to be user-friendly. You can easily install the extension and start using it right away. The intuitive interface allows you to choose different tones for your replies and customize the AI to your preferences.`}/>
        <FAQItem question={`Can I customize the AI-generated responses?`} answer={`Absolutely. Super X allows you to define custom prompts and train the AI to match your unique voice and style. This ensures that the generated responses align with your personal brand and communication style.`}/>
        <FAQItem question={`Is Super X compatible with all Twitter features?`} answer={`Super X is designed to work seamlessly with Twitter's core functionalities. It can help you craft replies, engage in conversations, and even assist with original tweets. However, for the most up-to-date information on compatibility, it's best to check the latest version of Super X.`}/>
        <FAQItem question={`How does Super X ensure the quality of AI-generated responses?`} answer={`Super X uses advanced AI algorithms that analyze the context of tweets to generate appropriate and engaging responses. The system is continuously learning and improving. Additionally, you have the option to review and edit any AI-generated response before posting, ensuring quality control.`}/>
      </div>

    <footer>
      <img style={{ width: '10rem', objectFit: 'contain', margin: "0 auto",filter: 'drop-shadow(-11px -6px 16px white)' }} src='./word-white-logo.png' alt="Logo" />
      <h1 style={{fontSize:'1rem'}}>SuperX 2024 ©</h1>
    </footer>
    </div>
  );
}

export default Homepage;
