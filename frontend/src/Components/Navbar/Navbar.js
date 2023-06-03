import React, { useContext, useState } from 'react';
import { NewsContext } from '../Home/NewsContext';

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
                    <div className="container-fluid">
                        <p className="navbar-brand" >Navbar</p>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setLocalQuery(e.target.value)} />
                            <button className="btn btn-outline-success" type="submit" onClick={updateLocalQuery}>Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;