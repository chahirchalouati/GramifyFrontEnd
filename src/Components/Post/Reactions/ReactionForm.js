import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaSmileBeam } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'

export default function ReactionForm() { 
      return (

        <div className="r_icons_hover">
            <div className="i_icon" onClick={e => { }}><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>
            <div className="i_icon" onClick={e => { }}><FcLike size={22}></FcLike></div>
            <div className="i_icon" onClick={e => { }}><FaSmileBeam size={22} fill={'orange'} /></div>
        </div>

    )
}
