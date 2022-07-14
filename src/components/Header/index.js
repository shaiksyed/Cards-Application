import { Component } from 'react';
import {Link, withRouter, useLocation} from 'react-router-dom';
import './index.css';

class Header extends Component{
    render() {
        const pathname = window.location.pathname;
        return(
            <div className='nav-header'>
                <ul className='nav-menu'>
                    <Link to = '/your-card'  className= 'nav-link' style={{ borderBottom : pathname === '/your-card' ? '4px solid red' : '', color: pathname === '/your-card' ? 'black' : ''}}>
                        Your
                    </Link>
                    <Link to = '/' className='nav-link' style={{ borderBottom : pathname === '/' ? '4px solid red' : '', color: pathname === '/' ? 'black' : ''}}>
                        All
                    </Link>
                    <Link to = '/blocked' className='nav-link' style={{ borderBottom : pathname === '/blocked' ? '4px solid red' : '', color: pathname === '/blocked' ? 'black' : ''}}>
                        Blocked
                    </Link>
                </ul>
                <br/>
            </div>
        )
    };
};

export default withRouter(Header);
