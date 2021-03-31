

import { Link } from "react-router-dom";


function Logo() {
    

    return(
        <h1 className="logo">
        <Link to={`/restaurantlist`} > DINE-IN </Link>
        </h1>

    )
}

export default Logo