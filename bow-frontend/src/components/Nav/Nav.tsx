import React from 'react';
import styles from './Nav.module.css';
import logo from './ourlogo (2).png';
import { Outlet } from 'react-router-dom';

type Link = {
    label: string;
    href: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
    return (
        <div className={styles['links-container']}>
            {links.map((link: Link) => {
                return (
                    <div key={link.href} className={styles['link']}>
                        <a href={link.href}>
                            {link.label}
                        </a>
                    </div>
                )
            })}
        </div>
    )
};

const Nav: React.FC<{}> = () => {
    return (<>
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <span> <img src={logo} alt="ourlogo.png" width={75} height={75}/> </span>
            </div>

        </nav>
        <Outlet /></>
    )
}

export default Nav;