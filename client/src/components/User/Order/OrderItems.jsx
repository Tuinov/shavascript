import React, {Children} from "react";
import OrderItem from "./OrderItem";
import OrderStream from "./OrderStream";

function OrderItems(props) {

    return (
        <div>
            <div className="card-items">
                <div className="card cart-item" style={{margin: '1rem'}}>
                    <div className="card-header d-flex justify-content-between">
                        <h5 className="">Заказ: <span className="text-primary">{props.id}</span></h5>
                        <h5 className="">{props.price} ₽</h5>
                    </div>
                    <div className="card-body">
                        <div className="d-flex flex-sm-row gap-3 justify-content-between">
                            <div className="">
                                <p className="text-center">Статус заказа</p>
                                <div className="badge bg-danger rounded-pill text-wrap" style={{width: '7rem'}}>
                                    {props.status}
                                </div>
                            </div>
                            {/* Order Items */}
                            <div className="flex-wrap d-flex">
                                {props.products.map(item => <OrderItem key={item.id} props={item}></OrderItem>)}
                            </div>
                        </div>
                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                            Стрим
                        </button>
                        <OrderStream/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItems;