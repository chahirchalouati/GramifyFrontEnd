import React from 'react'

const manageStyle = { color: 'rgb(23, 112, 230)', marginRight: '10px', fontSize: '15px', marginLeft: 'auto', cursor: 'pointer' }
export default function WatchList() {
    return (
        <div className="watch_list">
            <div className="watch_list_header" style={{ marginBottom: '0.5em' }}>
                <h4 style={{ fontWeight: '500' }}> Your watchlist</h4>
                <span className="manage"
                    style={manageStyle}>Manage</span>

            </div>

        </div>
    )
}
