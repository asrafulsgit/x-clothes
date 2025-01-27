import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import './Winter.css'

import OutlateProduct from '../../App/Outlate/OutlateProduct';
import Nav from '../../App/Nav/Nav';
import Footer from '../../App/Footer/Footer';
import womensBanner from '../../../assets/banners/winter-banner.png'
import { useDispatch, useSelector } from 'react-redux';
import { setMessage } from '../../Authentication/Controllers/UserSlice';

const Winter = () => {
  const dispatch = useDispatch()
  const {selectedCategory} = useSelector(state => state.authInfo)
  const [winterData,setWinterData]= useState([])

  useEffect(()=>{
    if(selectedCategory.length > 0){
      axios.post('http://localhost:8000/get-product-by-subcategory', {subcategory : selectedCategory})
      .then((res)=>{
        setWinterData(res.data.products)
      }).catch((err)=>{
        console.log(err)
        setWinterData([])
      })
    }else{
      axios.post('http://localhost:8000/get-product-by-categoris',{categories : ['120130','230240','330340','420440']})
      .then((res)=>{
        setWinterData(res.data.products)
      }).catch((err)=>{
        dispatch(setMessage(err.response.data.message))
      })
    }
  },[selectedCategory])

  return (
    <div className='womens-page'>
      <Nav />
      <div className="womens-banner">
        <img src={womensBanner} alt="womens-banner" />
      </div>
      <div className="womens-section">
          <div className='womens-shop'>
              {winterData.length == 0 ? <p>{''}</p>
               : winterData.map((item)=>{
                return <OutlateProduct key={uuidv4()} item={item}/>
              })}
          </div>
      </div>
      <Footer />
  </div>
  )
}

export default Winter
