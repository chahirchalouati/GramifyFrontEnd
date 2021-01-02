import React, { useEffect, useState } from 'react'
import { AiFillLike } from 'react-icons/ai'
import { FaSmileBeam } from 'react-icons/fa'
import { FcLike } from 'react-icons/fc'
import { useSelector } from 'react-redux'

export default function Reaction({ reactions, setLike }) {

    const { RX_SIGN_IN: { payload } } = useSelector(state => state);
    const { user } = payload;

    const [reactionsSearch, setreactionsSearch] = useState({
        isLiked: false,
        isLoved: false,
        isHated: false,
    })

    const liked = reactions.length > 0 && reactions.find(r => r.user.id === user.id);

    useEffect(() => {
        const search = () => {
            return reactions.forEach(r => {
                if (r.isLiked) {
                    setreactionsSearch({ ...reactionsSearch, isLiked: true })
                } if (r.isLoved) {
                    setreactionsSearch({ ...reactionsSearch, isLoved: true })
                } if (r.isHated) {
                    setreactionsSearch({ ...reactionsSearch, isHated: true })
                }

            });
        }
        search();
        liked && setLike(liked.isLiked)

    }, [setLike, liked])

    // if reaction count > 0 check if this user like the post  
    //if yes setLike () 
    // if no render reactions
    // else return empty component 

    if (reactions.length > 0) {
        if (liked !== undefined) {
            return (

                <div className="reaction_icons">
                    <div className="r_icons" style={{ width: 'max-content' }}>
                        {liked.isLiked && <div className="i_icon"><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>}
                        {liked.isLoved && <div className="i_icon"><FcLike size={22}></FcLike></div>}
                        {liked.isHated && <div className="i_icon"><FaSmileBeam size={22} fill={'orange'} /></div>}
                    </div>
                    {((liked.isLiked || liked.isHated || liked.isLoved) && liked) && <div className="r_icons_text">You {reactions.length > 1 && "and " + reactions.length + " others"}</div>}
                    {(reactions.length > 1 && liked === undefined) && <div className="r_icons_text">{reactions.length + "people reacted to this post"}</div>}
                    {!(liked.isLiked || liked.isHated || liked.isLoved) && <div className="r_icons_text">Be the first</div>}
                </div>
            )
        } if (liked === undefined) {
            return (

                <div className="reaction_icons">
                    <div className="r_icons" style={{ width: 'max-content' }}>
                        {reactionsSearch.isLiked && <div className="i_icon"><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>}
                        {reactionsSearch.isLoved && <div className="i_icon"><FcLike size={22}></FcLike></div>}
                        {reactionsSearch.isLoved && <div className="i_icon"><FaSmileBeam size={22} fill={'orange'} /></div>}
                    </div>
                    <div className="r_icons_text">{reactions.length + "people reacted to this post"}</div>

                </div>
            )
        }
        return <div className="reaction_icons"></div>
    } else {
        return <div className="reaction_icons"></div>
    }




    /*
    
        if (liked !== undefined) {
            return (
    
                <div className="reaction_icons">
                    <div className="r_icons" style={{ width: 'max-content' }}>
                        {liked.isLiked && <div className="i_icon"><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>}
                        {liked.isLoved && <div className="i_icon"><FcLike size={22}></FcLike></div>}
                        {liked.isLoved && <div className="i_icon"><FaSmileBeam size={22} fill={'orange'} /></div>}
                    </div>
                    {((liked.isLiked || liked.isHated || liked.isLoved) && liked) && <div className="r_icons_text">You {reactions.length > 1 && "and " + reactions.length + " others"}</div>}
                    {(reactions.length > 1 && liked === undefined) && <div className="r_icons_text">{reactions.length + "people reacted to this post"}</div>}
                    {!(liked.isLiked || liked.isHated || liked.isLoved) && <div className="r_icons_text">Be the first</div>}
                </div>
            )
        } else {
            return <div className="reaction_icons"></div>
        }*/

}
