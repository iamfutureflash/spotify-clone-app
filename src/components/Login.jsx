import React from 'react'
import {loginUrl} from "../scripts/spotify.js"
function Login() {
    return (
        <div className='login flex justify-center items-center h-[100vh]  md:h-[100vh] bg-black'>
            <div className=' p-2 flex flex-col justify-center items-center h-[40vh] gap-40'>
                <div className="image">
                    <img className='   object-contain w-[80vw]  md:w-[40rem] ' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Loading..." />
                </div>
                <div className="login-button">
                    <a href={loginUrl} className='p-4 text-base sm:p-4 md:p-5 text-white bg-green-500 hover:bg-green-600 rounded-full font-extrabold w-fit cursor-pointer '>LOGIN WITH SPOTIFY</a>
                </div>
            </div>
        </div>
    )
}

export default Login
