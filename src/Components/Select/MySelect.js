import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { BiWorld } from "react-icons/all";

function MySelect({ onClick }) {

    const [show, setShow] = useState(false);

    const { RX_ACCESS_TYPE } = useSelector(state => state);


    return (

        <div className='my_select' style={{ position: 'relative', cursor: 'pointer' }} onClick={e => setShow(!show)}>
            <div className="select_item"><BiWorld></BiWorld> </div>
        </div>
    )
}

export default MySelect
