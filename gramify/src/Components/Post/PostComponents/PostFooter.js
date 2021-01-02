import React from 'react'
import { AiFillLike } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { VscComment } from 'react-icons/vsc';
import Divider from '../../Divider/Divider';
import CommentList from '../Comments/CommentList';
import Reaction from '../Reactions/Reaction';
import ReactionForm from '../Reactions/ReactionForm';

const dividerStyle = { width: '95%', margin: '5px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' };




export default function PostFooter({ like  , addLike, reactions, showReaction, comments, openComment, setOpenComment, setShowReaction, onLike, id }) {
    return (
        <div className="post_footer">

            <div className="post_footer_header">
                {showReaction && <ReactionForm />}
                <Reaction reactions={reactions} setLike={addLike} ></Reaction>
                <div className="comments_number">{comments != null ? comments.length : 0} comments</div>
            </div>

            <Divider style={dividerStyle} />

            <div className="action_bottom" style={{ marginBottom: openComment && '0.3em' }} >

                <button onClick={e => onLike()} onMouseOver={e => setShowReaction(true)} >
                    <span className="icon"><AiFillLike fill={like ? "rgb(5, 107, 225)" : "rgb(96, 98, 102)"} size={22} /></span>
                    <span className="text" style={{ color: like ? "rgb(5, 107, 225)" : "rgb(96, 98, 102)" }}>Like</span>
                </button>

                <button onClick={e => { setOpenComment(!openComment); }}>
                    <span className="icon"  ><VscComment size={22} fill={"rgb(96, 98, 102)"} /></span>
                    <span className="text">Comment</span>
                </button>

                <button>
                    <span className="icon"><IoIosShareAlt size={22} fill={"rgb(96, 98, 102)"} /></span>
                    <span className="text">Share</span>
                </button>
            </div>

            { openComment && <>
                <Divider style={dividerStyle} />
                <CommentList postID={id} comments={comments}></CommentList>
            </>}

        </div>
    )
}
