import { useState } from "react";
import classes from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import avatarPng from "@/assets/avatar.jpg"
import AvatarSVG from "@/assets/avatar.svg"

export const App = () => {
    function TODO(a: number) {
        console.log(a)
    }


    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1);

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }

    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    return (
        <div>
            <div>
                <img src={avatarPng} width={100} height={100}/>
                <AvatarSVG width={100} height={100} className={classes.svg}/>
            </div>
            <h2>platform-{__PLATFORM__}</h2>
            <Link to={'/about'}>about</Link>
            <br/>
            <Link to={'/shop'}>shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <p>танцор</p>
            <button onClick={increment} className={classes.button}>inc</button>
            <Outlet />
        </div>
    )
}