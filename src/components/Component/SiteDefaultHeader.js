
import React, { Component } from 'react';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import UploadButton from './Button';
import SiteLogo from './Logo';
import SearchBar from './DefaultSearchBar';
import UserImage from './UserImage';

//header is parent component for header components
export default function Header() {
        return (
            <header className='site__header'>
                {/* <img src= {logo} className='header__logo' alt='BrainFlix Logo'></img> */}
                <SiteLogo className = 'header__logo' alt='Brainflix Logo' />
                <SearchBar className = 'header__search' type = 'text' placeholder = 'Search' />
                <UserImage className = 'header__userimage' alt = 'user' />
                <UploadButton className = 'header__button' label='UPLOAD'  />
            </header>
        );

}

