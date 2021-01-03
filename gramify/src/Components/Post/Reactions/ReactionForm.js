import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaSmileBeam } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { likes } from '../../../Services/RequestServices';

export default function ReactionForm({ id }) {

    const dispatch = useDispatch();

    return (

        <div className="r_icons_hover">
            <div className="i_icon" onClick={e => { dispatch(likes.postLike(id)) }}><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>
            <div className="i_icon" onClick={e => { dispatch(likes.postLove(id)) }}><FcLike size={22}></FcLike></div>
            <div className="i_icon" onClick={e => { dispatch(likes.postHate(id)) }}><FaSmileBeam size={22} fill={'orange'} /></div>
        </div>

    )
}
