import React from 'react'
import { BiDotsHorizontalRounded, GoSearch, MdVideoCall } from "react-icons/all";
import { useSelector } from 'react-redux';
import MessageUserBox from './MessageUserBox';





export default function MessaggingBody() {


    const { RX_SIGN_IN } = useSelector(state => state);

    const { user } = RX_SIGN_IN.payload;

    const messageItems = () => {
        let items = [];
        for (let index = 0; index < 5; index++) {
            items.push(<MessageUserBox user={user} key={index} />);

        }
        return items;
    }

    return (
        <div className="messaging_body">
            <div className="contacts">
                <div className="messaging_contacts_header">
                    <div className="label">Contacts</div>
                    <div className="action_group">
                        <span className="action_group_icon" > <MdVideoCall size={20} fill={"rgb(91, 98, 106)"} /> </span>
                        <span className="action_group_icon"> <GoSearch size={20} fill={"rgb(91, 98, 106)"} /> </span>
                        <span className="action_group_icon"> <BiDotsHorizontalRounded size={20} fill={"rgb(91, 98, 106)"} /> </span>
                    </div>

                </div>
                <div className="messaging_contacts_body">{messageItems()}</div>
                <div className="messaging_contacts_footer"></div>
            </div>
        </div>
    )
}
