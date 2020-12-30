import React,{useContext,useEffect} from 'react'
import HomePage from '../components/HomePage/HomePage';
import SignUp from '../components/SignUp/SignUp'
import { BlogsContext } from '../context/Context'

const Home = () => {
    const{loggedIn}=useContext(BlogsContext);
    console.log(loggedIn)

    return (
        <div>
            {!loggedIn?<SignUp/>:<HomePage/>}
            
        </div>
    )
}

export default Home
