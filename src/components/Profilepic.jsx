import React from 'react'
import IMG4 from '../assets/—Pngtree—users vector_3725294.png'
import { BsDot } from 'react-icons/bs'
import IMG1 from '../assets/IMG_20230316_223058.jpg'
import IMG2 from '../assets/IMG_20230318_061407.jpg'
import IMG3 from '../assets/IMG_20230318_070859.jpg'
import IMG5 from '../assets/IMG_20230326_132721.jpg'

const Profilepic = (props) => {

    let online = props.online
    let userId = props.user.id

    let imgNum = userId.charAt(userId.length-1)
    let img = imgNum==='1'?IMG1:imgNum==='2'?IMG2:imgNum==='3'?IMG3:imgNum==='4'?IMG4:IMG5

    
  return (
    <div className='profile_container'>
        <img src={img} alt="user img" />
        <div className='profile_online' style={{color:online?"rgb(57, 212, 57)":"rgb(194, 197, 201)"}}><BsDot ></BsDot></div>
        <div ><BsDot className='profile_online2' ></BsDot></div>
        
    </div>
  )
}

export default Profilepic