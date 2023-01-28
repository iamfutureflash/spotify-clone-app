import React from 'react'
import Sidebar from "./Sidebar"
import Body from "./Body.jsx"
function Player() {
    return (
        <div className='player'>
            <div className="player_body flex text-5xl gap-4">
                <Sidebar/>
                <Body/>
            </div>
            {/* Footer */}
        </div>
    )
}

export default Player