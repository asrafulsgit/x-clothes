import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCarts, setFavorites, setFavoritesProducts } from './Components/Authentication/Controllers/UserSlice'
import axios from 'axios'

const User = () => {
     const {isLoggedIn,loading} = useSelector(state => state.authInfo)
     const dispatch = useDispatch()
     useEffect(()=>{
           // carts count
           if(isLoggedIn){
               axios.get("http://localhost:8000/cart/count", {
                    withCredentials: true,
                  }).then((res)=>{
                    dispatch(setCarts(res.data.count));
                  }). catch((err)=>{
                     console.log(err)
                  })
          }

          // favorites count
          if(isLoggedIn){
               axios.get("http://localhost:8000/favorite/count", {
                    withCredentials: true,
                  }).then((res)=>{
                   dispatch(setFavorites(res.data.count));
                  }). catch((err)=>{
                    console.log(err)
                  }) 
          }

          // if(isLoggedIn){
          //      axios.get('http://localhost:8000/get-to-favourite',{
          //           withCredentials:true
          //         }).then((res)=>{
          //                const favoriteIds = res.data.products.map(item => item._id);
          //                dispatch(setFavoritesProducts(favoriteIds))
          //         }).catch((err)=>{
          //               console.log(err)
          //         })
          // }
     },[])
  return (
   <></>
  )
}

export default User
