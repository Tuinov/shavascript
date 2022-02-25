import React from "react";

export default function ModalShava() {
    return (
        <div className="modal fade" id="modalshave" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">выберите шаурму</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <p>Детали</p>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>выберите лаваш</option>
                            <option value="1">обычный</option>
                            <option value="2">сырный</option>
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>выберите мясо</option>
                            <option value="1">курица</option>
                            <option value="2">свинина</option>
                            <option value="3">говядина</option>
                        </select>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>выберите добавки</option>
                            <option value="1">лук</option>
                            <option value="2">грибы</option>
                            <option value="3">сыр</option>
                            <option value="4">кукуруза</option>
                        </select>

                        <select className="form-select" aria-label="Default select example">
                            <option selected>выберите соус</option>
                            <option value="1">кетчунез</option>
                            <option value="2">сырный</option>
                            <option value="3">горчичный</option>
                            <option value="4">чесночный</option>
                        </select>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )


}

    