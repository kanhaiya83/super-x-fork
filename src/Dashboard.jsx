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
import { getLast7DaysCount } from "./utils";
import SectionAvatar from "./components/dashboard/AvatarTab";


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
                    <h1><span className="gPurple">{limit-count}</span> Credits Left</h1>
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
                <h1 style={{fontSize:'1rem'}}>My Prompt</h1>
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
    const {limit,count,user,userData}= useAuthContext()
    const { dayNames,
        counts} = getLast7DaysCount(userData?.requestsData)
    const {display_name} = user?.displayName?.split(" ")[0] || "Jane"
    console.log(dayNames,counts)
    return(
    <>
    <h1 style={{fontSize: '1.2rem', margin: '1rem 0', color: '#b4b4b4eb', marginTop: '2rem'}}>/ DashBoard</h1>

    <div className="profileInfoCard">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/02f0b893570193.5e697092c4790.gif"></img>
                    <div style={{margin:'auto', width:'90%'}}>
                        <h1>Hey <span className="gPurple">{display_name}</span></h1>
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
                    xAxis={[{ scaleType: 'point',data:dayNames}]}
                    series={[{data: counts,color: '#6fcc26'},]}
                    width={500}
                    height={300}
                    />
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