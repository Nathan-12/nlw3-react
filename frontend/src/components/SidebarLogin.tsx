import React from 'react';
import Logo from '../images/map-marker.svg'
import '../styles/components/sidebar-login.css'

export default function SidebarLogin(){
    return(
        <aside className="login-sidebar">
            <img src={Logo} alt="Logo"/>
            <h1>Happy</h1>

            <main>
                <strong>Quixadá</strong>
                <span>Ceará</span>
            </main>
        </aside>
    );
}