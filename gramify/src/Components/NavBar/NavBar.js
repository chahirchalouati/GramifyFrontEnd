import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { TiHome, MdOndemandVideo, FaUserFriends, HiUserGroup, BiPlus, RiMessengerFill, BsBellFill, BsFillCaretDownFill } from "react-icons/all";
import ProfileDrop from './DropNav/ProfileDrop';
import history from '../../Routes/History';
const NavBar = () => {

  const [Open, setOpen] = useState(false);

  const { RX_SIGN_IN: { payload } } = useSelector(state => state)

  const [fillsIcon, setfillsIcon] = useState({
    video: false,
    live: false,
    shows: false,
    registred: false,
  })

  return (<nav className='nav_bar'>
    <div className="logo" onClick={e => history.push('/home')}>Gramify</div>
    <div className="navigation">
      <TiHome style={{ fill: 'rgb(23, 113, 230)' }} size='30' onClick={e => history.push('/home')} ></TiHome>
      <FaUserFriends size='30'></FaUserFriends>
      <MdOndemandVideo size='30' onClick={e => history.push("/videos")}></MdOndemandVideo>
      <HiUserGroup size='30'></HiUserGroup>
    </div>
    <div className="profile_user">
      <div className="box_profile_nav">
        <img src={process.env.REACT_APP_API_URL + payload.user.profile.avatarFileResized.url} alt="" />
        <div className="username_nav">{payload.user.userName}</div>
      </div>
      <div className="icon_nav"><BiPlus></BiPlus></div>
      <div className="icon_nav"><RiMessengerFill></RiMessengerFill></div>
      <div className="icon_nav"><BsBellFill></BsBellFill></div>

      <div className="icon_nav" onClick={e => setOpen(!Open)}>
        <BsFillCaretDownFill ></BsFillCaretDownFill>
        {Open && <ProfileDrop user={payload.user}></ProfileDrop>}
      </div>

    </div>

  </nav>)
}
export default NavBar
