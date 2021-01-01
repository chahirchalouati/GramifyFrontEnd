import React from "react";
import { AiFillExclamationCircle, AiFillQuestionCircle } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";
import { FiChevronRight, FiSettings } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { authentifications } from "../../../Services/RequestServices";
import Divider from "../../Divider/Divider";

export default function ProfileDrop({ user, ...props }) {

    const dispatch = useDispatch();

    return (
        <div className="drop-menu">
            <div className="see-profile">
                <img
                    className="sm-avatar"
                    style={{ width: "60px", height: "60px" }}
                    src={process.env.REACT_APP_API_URL + user.profile.avatarFile.url}
                    alt={user.profile.avatarFile.url} />

                <div className="name-user-profile-drop">
                    <span className="name-user">{user.fullName}</span>
                    <span style={{ fontSize: "12px", color: "lightslategray" }}>
                        see you profile
          </span>
                </div>
            </div>
            <Divider style={{ width: '95%', margin: '10px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }}></Divider>
            <div className="item-nav" onClick={(e) => { }}>
                <div className="icon_nav">
                    <AiFillExclamationCircle size="25"></AiFillExclamationCircle>
                </div>
        Give feedback
                <FiChevronRight style={{ marginLeft: "auto" }}></FiChevronRight>
            </div>
            <Divider style={{ width: '95%', margin: '10px auto', borderTopColor: 'rgb(228, 230, 235)', borderWidth: '2px' }}></Divider>
            <div className="item-nav" onClick={(e) => { }}>
                <div className="icon_nav">
                    <FiSettings size="25" />
                </div>
                <>Settings & privacy</>
                <FiChevronRight style={{ marginLeft: "auto" }} />
            </div>
            <div className="item-nav" onClick={(e) => { }}>
                <div className="icon_nav">
                    <AiFillQuestionCircle size="25"></AiFillQuestionCircle>
                </div>
        Help & support
                <FiChevronRight style={{ marginLeft: "auto" }}></FiChevronRight>
            </div>
            <div className="item-nav" onClick={(e) => { }}>
                <div className="icon_nav">
                    <FaMoon size="25"></FaMoon>
                </div>
        Display preferences
                <FiChevronRight style={{ marginLeft: "auto" }}></FiChevronRight>
            </div>
            <div className="item-nav" onClick={(e) => { dispatch(authentifications.logOut()) }}>
                <div className="icon_nav">
                    <BiLogOutCircle size="25"></BiLogOutCircle>
                </div>
        Log Out
      </div>
        </div>
    );
}
