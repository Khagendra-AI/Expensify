import {createSlice} from '@reduxjs/toolkit';
// import { getProductsAction } from "./configAction";
interface configModal {
  
 
  expenses:any,
  funds:any,
  totalExpenses:number,
  totalFunds:number,
  other: number,
  food: number,
  travel: number,
  rent: number,
};
type ActionType = {
  type: string;
  payload: any;
};
let initialState = {
 
  expenses: [],
  funds: [],
  totalExpenses: 0,
  totalFunds: 0,
  other: 0,
  food: 0,
  travel: 0,
  rent: 0,
};
const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    saveExpense: (state, action) => {
      const data = action.payload;
      console.log(action.payload, '//////////');
      const cat = data.category;
      if (cat == 'food' || cat == 'Food') {
        state.food += Number(data.amount);
      } else if (cat == 'travel' || cat == 'Travel') {
        state.travel += Number(data.amount);
      } else if (cat == 'rent' || cat == 'Rent') {
        state.rent += Number(data.amount);
      } else {
        state.other += Number(data.amount);
      }
      // console.log(data,"intosave expense")
      state.expenses.push(data);
      state.totalExpenses += Number(data.amount);
      // console.log()
    },
    saveFunds: (state, action) => {
      const data = action.payload;

      // console.log(data,"intosave expense")
      state.funds.push(data);
      state.totalFunds += Number(data.amount);
      // console.log()
    },
    // addFav:(state,action)=>{
    //   const item = action.payload
    //     if(!state.fav.find(fav => fav.id === item.id)){
    //       // state.favIcon=false,
    //       state.fav.push(item)
    //     }
    //   },
    //   removeFav:(state,action)=>{
    //     const item = action.payload
    //     // state.favIcon=false,
    //       state.fav=state.fav.filter(fav => fav.id !== item.id)
    //     },
    //   addCart:(state,action)=>{
    //     const item = action.payload
    //       if(!state.cart.find(cart => cart.id === item.id)){
    //         state.cart.push(item)
    //       }
    //     }
  },
  // extraReducers: builder => {
  //   builder.addCase(getProductsAction.pending, state => {
  //     state.isLoading = true;
  //   //   console.log('in pending')
  //   });
  //   builder.addCase(getProductsAction.fulfilled, (state, action) => {
  //   //  console.log('action', action);
  //     state.isLoading = false;
  //     state.products = action.payload;
  //   //   console.log('data found')

  //   });
  //   builder.addCase(getProductsAction.rejected, state => {
  //     state.isLoading = false;
  //   });

  //   // builder.addMatcher(
  //   //   //return condition from this callback function
  //   //   action => action.type.endsWith('/fulfilled'),
  //   //   (state, action) => {
  //   //     state.isLoading = false;
  //   //     state.matched = true;
  //   //   },
  //   // );
  //   // builder.addDefaultCase((state, action) => {
  //   //  // console.log('default case', action);
  //   //   state.isLoading = false;
  //   // });
  // },
});
// export const {getProducts} = configSlice.selectors;

export const {
  saveExpense,
  saveFunds,
  // increaseCount,
  // decreaseCount,
  // SET_CONFIG_DATA,
  // increaseCountByPayload,
} = configSlice.actions;

export default configSlice.reducer;
