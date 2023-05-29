import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Favorite = () => {
    const { store, actions } = useContext(Context);
    const { favorites, endPoint } = store;

    return (
        <>
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
                    {favorites.length === 0 ? (
                        <li className="dropdown-item">Empty</li>
                    ) : (
                        favorites.map((item) => (
                            <li className="d-flex" key={item._id}>
                                <Link className="dropdown-item" to={`/demo/${{url}.includes(`people`) ? 'people' : 'planets'}/${item._id}`}>
                                    {item.properties.name}
                                </Link>
                                <button
                                    type="button"
                                    className="btn btn-light"
                                    onClick={() => actions.deleteFavorite(item)}
                                >
                                    <i className="fa-solid fa-trash-can"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </>
    );
};

export default Favorite;