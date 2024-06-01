
import React from 'react'
import { CDN_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../utils/cartSlice'
import { removeItem } from '../../utils/cartSlice'

const ItemList = ({items, dummy}) => {

const dispatch = useDispatch();

const handleAddItem = (item) => {
  dispatch(addItem(item));
};

const handleDeleteBtn = ((toDelete) => {
   dispatch(removeItem(toDelete));
})

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-1 border-gray-200 border-b-2 text-left flex sm:flex-row sm:justify-between flex-col-reverse"
        >
          <div className="sm:w-6/12 w-full mx-auto">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.price / 100}
              </span>
            </div>
            <p className="text-xs mx-auto">{item.card.info.description}</p>
          </div>

          <div className="   w-9/12 xss:w-6/12  xs:w-4/12  sm:w-3/12 mx-auto p-4 pb-0 flex flex-col justify-center">
            <div className="bg-black text-center">
              <button
                className="p-2  text-white shadow-lg  rounded-md"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img src={CDN_URL + item.card.info.imageId} />
            <div className="bg-slate-600 p-1 text-center">
              <button
                className=""
                onClick={() => handleDeleteBtn(item.card.info.id)}
              >
                ❌
              </button>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemList;