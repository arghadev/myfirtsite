import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Owlcarousal from 'react-owl-carousel';
import logo from '../../Assets/demo-logo.png';
import './navigation.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
// const options = {
//     items: 1,
//     nav: true,
//     rewind: true,
//     autoplay: true
// };


class Nav extends Component{
    render(){
        return(
            <header className="site-header">
                <div className="header-top">
                    <div className="site-brand"><Link to="/"><img src={logo} alt="Logo" /></Link></div>
                    <div className="mainMenu">
                        <ul>
                            <li><Link to={"/"} className="nav-link">Home</Link></li>
                            <li><Link to={"/About"} className="nav-link">About</Link></li>
                            <li><Link to={"/Film"} className="nav-link">Films</Link></li>
                            <li><Link to={"/Contact"} className="nav-link">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="banner">
                    <Owlcarousal className="owl-theme" items={1} loop margin={10}>
                        <div className="banner-container">
                            <div className="banner-content">
                                <div className="banner-overlay"></div>
                                <h1 className="banner-heading">My first Site</h1>
                                <h4 className="banner-subtitle">This site is build by React!</h4>
                            </div>
                        </div>
                        <div className="banner-container">
                            <div className="banner-content">
                                <div className="banner-overlay"></div>
                                <h1 className="banner-heading">This a Slider</h1>
                                <h4 className="banner-subtitle">This slider integrate in React!</h4>
                            </div>
                        </div>
                    </Owlcarousal>
                </div>
            </header>
        )
    }
}

export default Nav;