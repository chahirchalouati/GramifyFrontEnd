import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AiFillLike, FaSmileBeam, FcLike } from "react-icons/all";



export default function Reaction({ reactions, idPost, setLike }) {

    const { RX_SIGN_IN: { payload } } = useSelector((state) => state);

    const isLiked = reactions.find(r => r.isLiked === true || false);
    const isHated = reactions.find(r => r.isHated === true || false);
    const isLoved = reactions.find(r => r.isLoved === true || false);

    const currentUserReaction = reactions.find(r => r.user.id === payload.user.id) || false;

    useEffect(() => {
        currentUserReaction && setLike(currentUserReaction.isLiked);
    }, [currentUserReaction, setLike])




    if (reactions) {
        return <div className="reaction_icons">
            <div className="r_icons" style={{ width: 'max-content' }}>
                {isLiked && <div className="i_icon"><AiFillLike size={22} fill={'rgb(14, 101, 222)'} /></div>}
                {isHated && <div className="i_icon"><FcLike size={22}></FcLike></div>}
                {isLoved && <div className="i_icon"><FaSmileBeam size={22} fill={'orange'} /></div>}
            </div>
            {currentUserReaction.isLiked && <div className="r_icons_text">You {reactions.length > 1 && "and " + reactions.length + " others"}</div>}
        </div>;
    } else {
        return <></>
    }

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
