import { ReactElement } from "react";

type Category = {
    id: number
    name: string
    type: string
    iconName: string
}

type PriceItem = {
    id: number
    title: string
    price: number
    date: string
    category : Category
}

type PriceListParam  = {
    items: Array<PriceItem>
    onModifyItem?: Function
    onDeleteItem?: Function
}

const onModifyItemDefault = () => {
    console.log("default")
}

const onDeleteItemDefault = () => {
    console.log("default")
}


const PriceList = ({items,onModifyItem = onModifyItemDefault,onDeleteItem =onDeleteItemDefault} : PriceListParam) : ReactElement => {
    return (
        <ul className="list-group list-group-flush">
            {
                items.map((_item) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={_item.id}>
                        <span className="col-1">
                            <i className={"bi " + _item.category.iconName + " align-items-center rounded-3"} style={{backgroundColor: '#007bff',padding: '5px',color: "white", fontSize: "20px"}}></i>
                        </span>
                        <span className="col-5">
                            {_item.title}
                        </span>
                        <span className="col-2 fw-bold">
                            { (_item.category.type == 'income') ? '+' : '-'}
                            {_item.price} $
                        </span>
                        <span className="col-2">
                            {_item.date}
                        </span>

                        <button className="col-1 btn btn-primary rounded-5" onClick={() => {onModifyItem(_item)}}>
                            <i className="bi bi-pencil-square"></i>
                        </button>
                        <button className="col-1 btn btn-danger rounded-5" onClick={() => {onDeleteItem(_item)}}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </li>
                ))
            }
        </ul>
    );
}



export default PriceList


export type {PriceItem}