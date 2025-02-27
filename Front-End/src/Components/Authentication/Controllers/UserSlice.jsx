
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
     name : 'user',
     initialState : {
          secondaryNav : false,
          favorites    : 0,
          carts        : 0,
          favoritesProducts: [],
          isLoggedIn  : false,
          loading      : true,
          isReadyForEmailVerify : false,     // for forgot password
          email : ''                         // for forgot password
     },
     reducers : {
          setSecondaryNav (state,action){
               state.secondaryNav = action.payload;
          },
          setFavorites(state,action){
               state.favorites = action.payload;
          },
          setFavoritesProducts(state,action){
               state.favoritesProducts = action.payload;
          },
          setCarts(state,action){
               state.carts = action.payload;
          },
          setIsLoggedIn(state,action){
               state.isLoggedIn = action.payload;
          },
          setLoading(state,action){
               state.loading = action.payload;
          },
          setIsReadyForEmailVerify(state,action){
               state.isReadyForEmailVerify = action.payload;
          },
          setEmail(state,action){
               state.email = action.payload;
          }
          

     }
})

export const {setFavorites,setFavoritesProducts,setCarts,setIsLoggedIn,
     setLoading,setSecondaryNav,setIsReadyForEmailVerify,setEmail} = userSlice.actions;
export default userSlice.reducer;