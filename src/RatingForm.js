import React, { useState } from "react";
function RatingForm({rating, handleChange}) {

    return (
        <p>
        <form onSubmit={(e)=> handleChange(e)}>
        <input type="number" value={rating}  id="points" step="1"></input>
        <input type="submit">Submit Rating</input>
        </form>
        </p>
    )
}

export default RatingForm