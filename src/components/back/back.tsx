import React from 'react';
import { UsergroupAddOutlined, WechatOutlined, StarOutlined, SettingFilled } from '@ant-design/icons';
import portrait from "../../imgs/portrait.jpg"
import "./back.css"

function back() {


    return (

        <div className="back-main">
            <div className="left-nav">
                {/* this component shows the hidden info */}
                <img className="photo" src={portrait} />
                <ul className="list">
                    <li className="icon1"><UsergroupAddOutlined /></li>
                    <li className="icon2"><StarOutlined /></li>
                    <li className="icon3"><WechatOutlined /></li>
                    <li className="icon4"><SettingFilled /></li>
                </ul>
            </div>
        </div>
    );

}



export default back;
