import React, { useContext, useState } from 'react';
import { NewsContext } from '../Home/NewsContext';
import newsLogo from '../../Images/newsLogo.png';
import './Navbar.css';

const Navbar = () => {
    const [localQuery, setLocalQuery] = useState();
    const { updateQuery } = useContext(NewsContext);

    const updateLocalQuery = (e) => {
        e.preventDefault();
        updateQuery({
            mainQuery: 'everything',
            subQuery: `q=${localQuery}`,
        })
    }


    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className={window.innerWidth > 481 ? 'container-fluid my-navbar' : 'my-navbar'}>
                        {/* <div className="container-fluid my-navbar"> */}
                        <div className="navbar-brand navbar-brand-container">
                            <img src={newsLogo} alt='' />
                            <p>Get Your Daily Updates on <br /> Rapid News</p>
                        </div>
                        <br />
                        <div className="navbar-form">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search your Interested Fields" aria-label="Search" onChange={(e) => setLocalQuery(e.target.value)} />
                                <button className="btn btn-outline-secondary" type="submit" onClick={updateLocalQuery}>Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;