import { GrAddCircle, GrMagic, GrSearch } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import {useQuery} from "react-query"
import { doc, getDoc } from 'firebase/firestore'
import SavedPromptCard from './SavedPromptCard'
import { firestoreDB } from '../../config/firebase'
import { useAuthContext } from '../../context/authContext'

const MyPromptsTab = () => {
    const {userData} = useAuthContext();
    const savedPostsQuery = useQuery(
      ["savedPosts", userData?.savedPosts],
      async () => {
        const savedPosts = userData?.savedPosts || [];
        if (!savedPosts || savedPosts.length === 0) {
          return [];
        }
        const res = await Promise.all(
          savedPosts.map(async (postID) => {
            const ss = await getDoc(doc(firestoreDB, "posts", postID));
            if (ss.exists()) {
              const temp = ss.data();
              return {
                ...temp,
                id: ss.id,
                date_created: new Date(temp.date_created.seconds * 1000),
              };
            } else {
              return false;
            }
          })
        );
        console.log({res})
        const data = res.filter(p=>Boolean(p))
        console.log({data});
        return data;
      },
      { enabled: !!userData }
    );
    const savedPostsData = savedPostsQuery?.data || []
    console.log("savedPostsData",savedPostsData)
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
            <div className="sidebarButton flex" style={{width:"20%", minWidth:'10rem' , margin:'0'}}>
                <GrAddCircle style={{marginRight:'1rem'}} size={24}></GrAddCircle >
                <Link to={"/dashboard/home"}>
                <h1 className="text-base whitespace-nowrap">New prompt</h1>
                </Link>
            </div>
            <div className="sidebarButton" style={{width:"55%" , margin:'0'}}>
                <GrSearch style={{marginRight:'1rem'}}></GrSearch  >
                <input placeholder="Search Prompts" style={{background: 'transparent', width: '100%', outline: 'none', border: 'none', color: 'white', fontSize: '0.9rem'}}></input>
            </div>
        </div>      
    
        <div style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem 0', width: '100%', margin: '2rem auto'}}>
          {savedPostsData.map(item=>{
            return <SavedPromptCard data={item} key={item.id}/>
          })}
        </div>
        </>
        )
}
export default MyPromptsTab