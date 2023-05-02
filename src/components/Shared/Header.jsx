import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div className='flex justify-between items-center pt-5 my-container'>
            <h3 className='text-2xl font-medium text-gray-600'>Italian Chef Hub</h3>
            <div className='flex justify-center items-center gap-7'>
                <NavLink className={({isActive})=> isActive ? 'active':''} to='/'>Home</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <Link>User profile pic</Link>
                <Link to='/login'><button className='button-primary'>Login</button></Link>
                <Link className='button-secondary'><button>Logout</button></Link>
                
            </div>
        </div>
    );
};

export default Header;