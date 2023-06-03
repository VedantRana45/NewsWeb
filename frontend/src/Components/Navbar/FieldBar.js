import React, { useContext } from 'react'
import { NewsContext } from '../Home/NewsContext'

const FieldBar = () => {
    const { updateQuery } = useContext(NewsContext);
    const updateLocalQuery = (subQuery) => {
        updateQuery({
            mainQuery: 'top-headlines',
            subQuery: `category=${subQuery}`
        })
    };

    return (
        <div className='container-fluid'>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <p className="navbar-brand"></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {/* <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('country=in')} >Top Headlines</p>
                            </li> */}
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('general')} >General</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('politics')} >Politics</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Business')} >Business</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Technology')} >Technology</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Entertainment')} >Entertainment</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Sports')} >Sports</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Science')} >Science</p>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link" onClick={() => updateLocalQuery('Health')} >Health</p>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default FieldBar;