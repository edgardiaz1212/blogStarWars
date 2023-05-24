import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext"

const Tarjeta = () => {
  const { store, actions } = useContext(Context);
  return (
   <>
    <div className="container horizontal-scrollable m-3">
    <div className="card " style={{ width: "18rem" }}>
      <img
        src="https://www.hub-4.co.uk/wp-content/uploads/2017/11/400X200.gif"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> </h5>
        <span className="card-text">spec1</span><br/>
        <span className="card-text">spec2:</span><br/>
        <span className="card-text">spec3:</span><br/>
      </div>

      <div className="card-body ">
        <Link href="#" className="btn btn-outline-primary me-5">
          Learn more! 
        </Link>
        <Link href="#" className="btn btn-outline-warning ms-5">
        <i className="fa-regular fa-heart"></i>
        </Link>
      </div>
    </div>


    
  </div>
    </>
  )
}

export default Tarjeta