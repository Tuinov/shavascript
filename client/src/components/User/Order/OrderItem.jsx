import React from "react";

function OrderItem(props) {
    let cartItem = props.props

    return (
        <figure>
            <img src={cartItem.imageUrl} height="150" width="150" alt=""></img>
            <figcaption className="text-center">{cartItem.name}</figcaption>
            <figcaption className="text-center">{cartItem.count} x</figcaption>
        </figure>
    )
}

export default OrderItem;