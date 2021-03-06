import React,{useContext,useEffect} from 'react'
import {HomePage} from '../components/HomePage/HomePage';
import SignUp from '../components/SignUp/SignUp'
import { BlogsContext } from '../context/Context'

import socketIOClient from 'socket.io-client';

var socket
const Home = () => {
    socket= socketIOClient('https://blooming-gorge-74715.herokuapp.com')
    const{loggedIn}=useContext(BlogsContext);

    return (
        <div>
            {!loggedIn?<SignUp/>:<HomePage/>}
            
        </div>
    )
}

export  {Home,socket}
