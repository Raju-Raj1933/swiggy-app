
import React from 'react'
import { CDN_URL } from '../../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../utils/cartSlice'

const ItemList = ({items, dummy}) => {

const dispatch = useDispatch();

const handleAddItem = (item) => {
  dispatch(addItem(item));
};

  return (
    <div>
       {
            items.map((item) => (
            <div key={item.card.info.id} className='p-2 m-1 border-gray-200 border-b-2 text-left flex justify-between'>
                        <div className='w-9/12'>
                              <div className='py-2'>
                              <span>{item.card.info.name}</span>
                              <span> - ₹ {item.card.info.price ?
                              item.card.info.price / 100 : item.card.info.price / 100 } 
                              </span>
                        </div>
                  <p className='text-xs'>{item.card.info.description}</p>
                    </div> 

                    <div className='w-3/12 p-4 flex justify-center '>
                        <div className='absolute'>
                        <button className='p-2  text-white shadow-lg  rounded-md bg-black'
                       onClick={ () => handleAddItem(item)} >Add +</button>
                              </div>
                                <img src={CDN_URL + item.card.info.imageId} />
                        </div>  
                        </div>
            ))
       }
    </div>
  )
}

export default ItemList