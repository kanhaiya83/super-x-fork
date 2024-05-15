import { useState, useEffect } from "react";
import { GrAddCircle, GrBar, GrCloudDownload, GrContact, GrFavorite, GrHomeRounded, GrKey, GrKeyboard, GrKubernetes, GrLogout, GrMagic, GrSearch, GrSemantics, GrShop, GrSidebar, GrUserFemale, GrValidate } from "react-icons/gr";
import {BrowserRouter as Router,useLocation , Routes , Route, Link}from 'react-router-dom';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from "@mui/x-charts";
import { useAuthContext } from "./context/authContext";
import MarketPlaceTab from "./components/dashboard/MarketPlaceTab";
import MyPromptsTab from "./components/dashboard/MyPromptsTab";
import TonesTab from "./components/dashboard/TonesTab";
import ReferTab from "./components/dashboard/ReferTab";
import { logout } from "./config/firebase";


function Sidebar(){
    const {user,count,limit} = useAuthContext()
    return(
        <div className="sideBar">
            <img style={{ width: '50%',objectFit: 'contain', objectFit: 'contain', margin: "1rem auto",filter: 'drop-shadow(-11px -6px 16px white)' }} src='/word-white-logo.png' alt="Logo" />
            <GrAddCircle className="sideBarMobileNavigation" />

            <h1 style={{fontSize:'1rem'}}> Hey <span className="gPurple">{user?.displayName?.split(" ")[0] || "Jane"}</span>👋</h1>
            <div className='animated-border-box-container' style={{ margin: '1rem auto' }}>
                <div className="animated-border-box-glow"></div>
                <div className="animated-border-box">
                    <a href={"https://t.me/clusterprotocolchat"} target='_blank_' rel="noopener noreferrer"><h1><span className="gPurple">{limit-count}</span> Credits Left</h1></a>
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
            <button className="sidebarButton box-content" onClick={logout} style={{marginTop: 'auto', background: 'black', flexDirection: 'row-reverse', border: '0', marginBottom: '0', boxShadow: 'rgb(151 115 210 / 42%) 0px 0rem 8rem', width: '90%', padding: '0 5%', borderRadius: '0', height: '4rem'}}>
                <GrLogout style={{marginRight:'1rem', fontSize:'1.5rem'}}></GrLogout  >
                    <h1 style={{fontSize:'1rem'}}>Log Out</h1>
            </button>
        </div>
    )
}

const ProgressBar = ({ percentage }) => {
    return (
      <div className="progress" style={{ width: '100%', backgroundColor: '#ddd', borderRadius: '2px',margin:'1rem 0', overflow: 'hidden' }}>
        <div className="bar" style={{width: percentage+'%', height: '8px', background: 'linear-gradient(45deg, #895bda, #29d, #895bda)', borderRadius: '0px', textAlign: 'center', lineHeight: '30px', color: 'white'}}></div>
      </div>
    );
  };
  

function SectionDashboard(){
    const {limit,count}= useAuthContext()
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
                <h1>Total Usage <span className="gPurple">{`{ ${count}/${limit} }`}</span></h1>

                <ProgressBar percentage={(count/limit)*100}></ProgressBar>
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






function MainView(){
    const location = useLocation();
    return(
        <div className="Mainbar">
                {location.pathname === '/dashboard' && <SectionDashboard />}
                {location.pathname === '/dashboard/prompts' && <MyPromptsTab />}
                {location.pathname === '/dashboard/marketplace' && <MarketPlaceTab />}
                {location.pathname === '/dashboard/tones' && <TonesTab />}
                {location.pathname === '/dashboard/avatars' && <SectionAvatar />}
                {location.pathname === '/dashboard/refer' && <ReferTab />}

        
            
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