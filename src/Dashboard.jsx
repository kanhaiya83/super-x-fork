import { useState, useEffect } from "react";
import { GrAddCircle, GrBar, GrCloudDownload, GrContact, GrFavorite, GrHomeRounded, GrKey, GrKeyboard, GrKubernetes, GrLogout, GrMagic, GrSearch, GrSemantics, GrShop, GrSidebar, GrUserFemale, GrValidate } from "react-icons/gr";
import {BrowserRouter as Router,useLocation , Routes , Route, Link}from 'react-router-dom';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from "@mui/x-charts";


function Sidebar(){
    return(
        <div className="sideBar">
            <img style={{ width: '50%',objectFit: 'contain', objectFit: 'contain', margin: "1rem auto",filter: 'drop-shadow(-11px -6px 16px white)' }} src='./word-white-logo.png' alt="Logo" />
            <GrAddCircle className="sideBarMobileNavigation" />

            <h1 style={{fontSize:'1rem'}}> Hey <span className="gPurple">Hamza</span>👋</h1>
            <div className='animated-border-box-container' style={{ margin: '1rem auto' }}>
                <div className="animated-border-box-glow"></div>
                <div className="animated-border-box">
                    <a href={"https://t.me/clusterprotocolchat"} target='_blank_' rel="noopener noreferrer"><h1><span className="gPurple">30</span> Credits Left</h1></a>
                </div>
            </div>
            <div className="sidebarButtonContainer">
            <div className="sidebarButton">
                <Link to={"/dashboard"}>
                <GrHomeRounded style={{marginRight:'1rem'}}></GrHomeRounded>
                </Link>
                <Link to={"/dashboard"}>
                <h1 style={{fontSize:'1rem'}}>DashBoard</h1>
                </Link>
            </div>
            <div className="sidebarButton">
                <Link to={"/dashboard/prompts"}>
                <GrFavorite style={{marginRight:'1rem'}}></GrFavorite >
                </Link>
                <Link to={"/dashboard/prompts"}>
                <h1 style={{fontSize:'1rem'}}>Prompts</h1>
                </Link>
            </div>
            <div className="sidebarButton">
                <Link to={"/dashboard/marketplace"}>
                <GrShop style={{marginRight:'1rem'}}></GrShop>
                </Link>
                <Link to={"/dashboard/marketplace"}>
                <h1 style={{fontSize:'1rem'}}>Marketplace</h1>
                </Link>
            </div>
            <div className="sidebarButton">
                <Link to={"/dashboard/tones"}>
                <GrContact style={{marginRight:'1rem'}}></GrContact >
                </Link>
                <Link to={"/dashboard/tones"}>
                <h1 style={{fontSize:'1rem'}}>Tones</h1>
                </Link>
                
            </div>
            <div className="sidebarButton">
                <Link to={"/dashboard/avatars"}>
                <GrUserFemale style={{marginRight:'1rem'}}></GrUserFemale >
                </Link>
                <Link to={"/dashboard/avatars"}>
                <h1 style={{fontSize:'1rem'}}>Avatar</h1>
                </Link>


            </div>
            <div className="sidebarButton">
                <Link to={"/dashboard/refer"}>
                <GrSemantics style={{marginRight:'1rem'}}></GrSemantics >
                </Link>
                <Link to={"/dashboard/refer"}>
                <h1 style={{fontSize:'1rem'}}>Refer</h1>
                </Link>
            </div>
            </div>
            <div className="sidebarButton" style={{marginTop: 'auto', background: 'black', flexDirection: 'row-reverse', border: '0', marginBottom: '0', boxShadow: 'rgb(151 115 210 / 42%) 0px 0rem 8rem', width: '90%', padding: '0 5%', borderRadius: '0', height: '4rem'}}>
                <GrLogout style={{marginRight:'1rem', fontSize:'1.5rem'}}></GrLogout  >
                <Link to="/">
                    <h1 style={{fontSize:'1rem'}}>Log Out</h1>
                </Link>
            </div>
        </div>
    )
}

const ProgressBar = ({ percentage }) => {
    return (
      <div className="progress" style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '2px',margin:'1rem 0', overflow: 'hidden' }}>
        <div className="bar" style={{width: '75%', height: '8px', background: 'linear-gradient(45deg, #895bda, #29d, #895bda)', borderRadius: '0px', textAlign: 'center', lineHeight: '30px', color: 'white'}}></div>
      </div>
    );
  };
  

function SectionDashboard(){
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ DashBoard</h1>

    <div className="profileInfoCard">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>Hey <span className="gPurple">Hamza</span></h1>
                        <h2>Have a nice day & Don't forget to grow your followers using SuperX</h2>
                    </div>
                    
                </div>
                
                <div className="ProfileLineChart">
                <h1>Total Usage <span className="gPurple">{"{ 75/100 }"}</span></h1>

                <ProgressBar percentage={75}></ProgressBar>
                </div>

                <div className="ProfileLineChart graphoptimizer">
                <h1>Usage Per Week</h1>
                <LineChart
                    xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                    series={[{data: [2, 5.5, 2, 8.5, 1.5, 5],color: '#6fcc26'},]}
                    width={500}
                    height={300}
                    />
                </div>
                
    </>
    )
}


  
function SectionPrompts(){
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Prompts</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>Your <span className="gPurple">Prompts</span></h1>
                        <h2>Manage all your prompts here or Create a New One</h2>
                    </div>
    </div>
    <div className="miniBar1">
        <div className="sidebarButton" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
            <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
            <Link to={"/dashboard/home"}>
            <h1 style={{fontSize:'1rem'}}>New prompt</h1>
            </Link>
        </div>
        <div className="sidebarButton" style={{width:"55%" , margin:'0'}}>
            <GrSearch style={{marginRight:'1rem'}}></GrSearch  >
            <input placeholder="Search Prompts" style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
        </div>
    </div>      

    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto'}}>
        <div className="promptCard">
            <h1>Elon Musk</h1>
            <h2>
                You have to talk like Elon Musk Twitter Account. Be Sarcastic and...
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrMagic  style={{marginRight:'1rem'}}></GrMagic  >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Modify</h1>
                </Link>
            </div>
        </div>
        <div className="promptCard">
            <h1>Kanye West</h1>
            <h2>
                You have to talk like Rap Singer Kanye, be occasionly rude and most ...
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrMagic  style={{marginRight:'1rem'}}></GrMagic  >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Modify</h1>
                </Link>
            </div>
        </div>      
        <div className="promptCard">
            <h1>Engineer Prompt</h1>
            <h2>
                You are a Computer Engineer. You have to talk like a critic and oppose things...
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrMagic  style={{marginRight:'1rem'}}></GrMagic  >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Modify</h1>
                </Link>
            </div>
        </div>
    </div>
    </>
    )
}

function SectionMarket(){
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Marketplace</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>SuperX <span className="gPurple">Marketplace</span></h1>
                        <h2>Add pre-existing prompts made by our community</h2>
                    </div>
    </div>
    <div className="miniBar1">
        <div className="sidebarButton" style={{width:"95%" , margin:'0'}}>
            <GrSearch style={{marginRight:'1rem'}}></GrSearch  >
            <input placeholder="Search Marketplace" style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
        </div>
        {/* <div className="sidebarButton" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
            <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
            <Link to={"/dashboard/home"}>
            <h1 style={{fontSize:'1rem'}}>Upload prompt</h1>
            </Link>
        </div> */}
    </div>      

    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto'}}>
        <div className="promptCard">
            <h1>Nelson Paul</h1>
            <h2>
                You have to talk like Nelson Paul, talk manly and ...
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrCloudDownload   style={{marginRight:'1rem'}}></GrCloudDownload   >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Download</h1>
                </Link>
            </div>
        </div>
        <div className="promptCard">
            <h1>Manmohan Singh</h1>
            <h2>
                You have to mimic Manmohan Singh and just say nothing ...
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrCloudDownload   style={{marginRight:'1rem'}}></GrCloudDownload   >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Download</h1>
                </Link>
            </div>
        </div>      
    </div>
    </>
    )
}


function SectionTones(){
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Tones</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1><span className="gPurple">Tones</span> Library</h1>
                        <h2>Manage your language tones.</h2>
                    </div>
    </div>
    <div className="miniBar1">
        <div className="sidebarButton" style={{width:"65%" , margin:'0'}}>
            <GrKeyboard  style={{marginRight:'1rem'}}></GrKeyboard   >
            <input placeholder="Type your Tone.." style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
        </div>
        <div className="sidebarButton" style={{width:"10%", minWidth:'7rem' , margin:'0'}}>
            <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
            <Link to={"/dashboard/home"}>
            <h1 style={{fontSize:'1rem'}}>Add</h1>
            </Link>
        </div>
    </div>      

    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto', gap:'1rem 0'}}>

        <div className="promptCard" style={{width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center',padding: '1% 2.5%'}}>
            <h1>Affirmative</h1>
            <div className="sidebarButton" style={{width:"15%", minWidth:'6rem' , margin:'0', marginLeft:'auto'}}>
                <GrBar    style={{marginRight:'1rem'}}></GrBar    >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Delete</h1>
                </Link>
            </div>
        </div>      

        <div className="promptCard" style={{width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center',padding: '1% 2.5%'}}>
            <h1>Maximilist</h1>
            <div className="sidebarButton" style={{width:"15%", minWidth:'6rem' , margin:'0', marginLeft:'auto'}}>
                <GrBar    style={{marginRight:'1rem'}}></GrBar    >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Delete</h1>
                </Link>
            </div>
        </div>    
        <div className="promptCard" style={{width: '100%', flexDirection: 'row', display: 'flex', alignItems: 'center',padding: '1% 2.5%'}}>
            <h1>Critic</h1>
            <div className="sidebarButton" style={{width:"15%", minWidth:'6rem' , margin:'0', marginLeft:'auto'}}>
                <GrBar    style={{marginRight:'1rem'}}></GrBar    >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Delete</h1>
                </Link>
            </div>
        </div>    

    </div>
    </>
    )
}



function SectionAvatar(){
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Avatars</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>Your Avatar: <span className="gPurple">Michael</span></h1>
                        <h2>Select brand new avatars from our Community or create your Own</h2>
                    </div>
    </div>
    <div className="miniBar1">
        <div className="sidebarButton" style={{width:"95%" , margin:'0'}}>
            <GrSearch style={{marginRight:'1rem'}}></GrSearch  >
            <input placeholder="Search Marketplace" style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
        </div>
        {/* <div className="sidebarButton" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
            <GrAddCircle style={{marginRight:'1rem'}}></GrAddCircle >
            <Link to={"/dashboard/home"}>
            <h1 style={{fontSize:'1rem'}}>Upload prompt</h1>
            </Link>
        </div> */}
    </div>      

    <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto'}}>
        <div className="promptCard" style={{width:'14rem', margin: 'auto'}}>
            <h1>Kai Stone</h1>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d3c6293570193.5e697092c2a56.gif" style={{width: 'auto', height: '7rem'}}></img>
            <h2>
                Kai is a stoic girl, known for their unwavering skills.
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Select</h1>
                </Link>
            </div>
        </div>

        <div className="promptCard" style={{width:'14rem', margin: 'auto'}}>
            <h1>Sam Ember</h1>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/47a52693570193.5e697092c1cd0.gif" style={{width: 'auto', height: '7rem'}}></img>
            <h2>
                Sam Ember likes to pet cat. All his cats loves him too.
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Select</h1>
                </Link>
            </div>
        </div>

        <div className="promptCard" style={{width:'14rem', margin: 'auto'}}>
            <h1>Finn Sky</h1>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/18579193570193.5e697092c2e61.gif" style={{width: 'auto', height: '7rem'}}></img>
            <h2>
                Finn is a Pharmacist. She is health conscious and don't like dust.
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Select</h1>
                </Link>
            </div>
        </div>


        <div className="promptCard" style={{width:'14rem', margin: 'auto'}}>
            <h1>Zoe Clark</h1>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/d86bae93570193.5e697092c3696.gif" style={{width: 'auto', height: '7rem'}}></img>
            <h2>
            Zoe is a quick-witted and playful mischief-maker, always ready with a clever joke
            </h2>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem' , margin:'0'}}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Select</h1>
                </Link>
            </div>
        </div>

    </div>
    </>
    )
}




function SectionRefer(){
    return(     
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ Refer</h1>

    <div className="profileInfoCard" style={{minHeight:'6rem', height:'6rem'}}>
                    {/* <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img> */}
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1><span className="gPurple">Refer</span> Your Friends</h1>
                        <h2>Earn 30 more requests per referral</h2>
                    </div>
    </div>     

    <div style={{display: 'flex', justifyContent: 'center',alignItems:'center', width: '100%', marginTop:'2rem'}}>
        <div className="promptCard" style={{width:'95%', maxWidth:'30rem'}}>
            <h1 className="gPurple" style={{textAlign:"center", width:'100%', fontSize:'2rem'}}>Hamza Rizvi</h1>
            <h2 style={{textAlign:"center", width:'100%', fontSize:'1rem', margin:'0'}}>
                <span className="gPurple">4</span> Reffered
            </h2>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/0d3c6293570193.5e697092c2a56.gif" style={{width: '20%', margin: '1rem 40%'}}></img>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem', maxWidth:'20rem' , margin:'0 auto'}}>
                <GrUserFemale    style={{marginRight:'1rem'}}></GrUserFemale >
                <Link to={"/dashboard/home"}>
                <h1 style={{fontSize:'1rem'}}>Copy Refferal</h1>
                </Link>
            </div>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem', maxWidth:'20rem' , margin:'1rem auto'}}>
                <GrValidate  style={{marginRight:'1rem'}}></GrValidate   >
                <input placeholder="Enter Referral Code" style={{background: 'transparent', width: '100%',textAlign:'right', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
            </div>
            <div className="sidebarButton" style={{width:"90%", minWidth:'10rem', maxWidth:'20rem' , margin:'1rem auto'}}>
                <GrKey   style={{marginRight:'1rem'}}></GrKey    >
                <input placeholder="Redeem Coupon Code" style={{background: 'transparent', width: '100%',textAlign:'right', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
            </div>
        </div>

    </div>
    </>
    )
}


function MainView(){
    const location = useLocation();
    return(
        <div className="Mainbar">
                {location.pathname === '/dashboard' && <SectionDashboard />}
                {location.pathname === '/dashboard/prompts' && <SectionPrompts />}
                {location.pathname === '/dashboard/marketplace' && <SectionMarket />}
                {location.pathname === '/dashboard/tones' && <SectionTones />}
                {location.pathname === '/dashboard/avatars' && <SectionAvatar />}
                {location.pathname === '/dashboard/refer' && <SectionRefer />}

        
            
        </div>
    )
}






export default function Dashboard(){
    return(
    <>
        <div className='backgroundImage' ></div>
        <div style={{display:'flex', maxHeight:'100vh', overflow:'hidden'}}>
            <Sidebar/>
            <MainView/>
        </div>
    </>
    );
}