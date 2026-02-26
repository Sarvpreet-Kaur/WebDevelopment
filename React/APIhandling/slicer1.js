import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//automatic actions created by createAsyncThunk

// {type: 'coin/fetch/pending', payload: undefined}
// {type: 'coin/fetch/fulfilled', payload: data}
// {type: 'coin/fetch/rejected', payload: "error"}

const FetchData = createAsyncThunk(

    //action type prefix
    'Coin/fetch',
    //async function
    //dispatch(FetchData())

    async(args, thunkAPI)=>{
        try{
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`)
            const data = await response.json();
            return data;
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const slicer1 = createSlice({
    name: 'slice1',
    initialState: {data:[], loading:false, error:null},
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(FetchData.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(FetchData.fulfilled, (state, action)=>{
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        })
    }
})

// {type: 'coin/fetch/pending' , payload: undefined}

// type: 'slice1/Increment'
// type: 'slice1/Decrement'

// type: "Coin/Fetch/pending"
// type: "Coin/Fetch/fulfilled"
// type: "Coin/Fetch/rejected"

export default slicer1.reducer;
export {FetchData};