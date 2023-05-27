import React from 'react'

const Favorite = () => {
    return (<>
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle me-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Favorites <span className="badge bg-secondary">4</span>
            </button>
            <ul className="dropdown-menu">
                <li>
                    <button className="dropdown-item" type="button">
                        Action
                    </button>
                </li>

            </ul>
        </div>
    </>)
}

export default Favorite