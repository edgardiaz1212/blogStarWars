import React, { useContext } from 'react'
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favorite = () => {
    const { store } = useContext(Context);
    const { favorites } = store

    return (<>
        <div className="dropdown">
            <button
                className="btn btn-primary dropdown-toggle me-3"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                Favorites <span className="badge bg-secondary">{favorites.length}</span>
            </button>
            <ul className="dropdown-menu">
                {favorites.length == 0 ? <li className='"dropdown-item"'>Empty </li>
                    : favorites.map((item, index) => {
                        console.log(item)
                        return (
                            <li className="d-flex" key={index}>
                                <Link className="dropdown-item" to={item.url}>
                                    {item.properties.name}
                                </Link><button className='delete-button'> <i className="fa-solid fa-trash-can"></i></button>
                            </li>
                                
                            

                        )
                    })

                }


            </ul>
        </div>
    </>)
}

export default Favorite