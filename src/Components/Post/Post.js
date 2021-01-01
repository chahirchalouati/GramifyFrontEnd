import moment from 'moment';
import React, { useState } from 'react'
import { AiFillLike, BiDotsHorizontalRounded, FaUserFriends, IoIosShareAlt, VscComment } from "react-icons/all";
import { useDispatch } from 'react-redux';
import { likes } from '../../Services/RequestServices';
import Divider from '../Divider/Divider';
import CommentList from './Comments/CommentList';
import Content from './PostContent/Content';
import PostMedia from "./PostMedia/PostMedia";
import Reaction from './Reactions/Reaction';
import ReactionForm from './Reactions/ReactionForm';
export default function Post({ post }) {

    const { user, content, files, createdAt, id, comments, reactions } = post;

    const [openComment, setOpenComment] = useState(false);
    const [showReaction, setShowReaction] = useState(false);
    const [like, setLike] = useState(false);

    const dispatch = useDispatch();


    const onLike = () => {
        dispatch(likes.post(id));
    };

    const addLike = (bool) => {
        return setLike(bool)
    }




    return (
        <div className='post' onMouseLeave={e => setShowReaction(false)}>

            {/** header of post  */}
            <div className="post_header">
                <div className="post_profile_box">
                    <img src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url} alt="" />
                    <div className="user_info">
                        <div className="username">{user.fullName}</div>
                        <div className="createdAt">
                            <span>{moment(createdAt).fromNow()}.<FaUserFriends /></span>
                        </div>
                    </div>
                </div>
                <div className="icon_box" > <BiDotsHorizontalRounded size={25} fill={"gray"} />  </div>
            </div>


            {/** Body of post  */}
            <div className="post_body">

                <Content content={content}></Content>
                <PostMedia files={files}></PostMedia>


            </div>


            {/** Body of footer  */}
            <div className="post_footer">

                <div className="post_footer_header">
                    {showReaction && <ReactionForm />}
                    <Reaction reactions={reactions} setLike={addLike} ></Reaction>

                    <div className="comments_number">{comments != null ? comments.length : 0} comments</div>
                </div>
                <Divider style={{ width: '95%', margin: '5px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }} />

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

                {

                    openComment &&
                    <>
                        <Divider style={{ width: '95%', margin: '5px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }} />

                        <CommentList postID={id} comments={comments}></CommentList>
                    </>


                }

            </div>

        </div>
    )
}
