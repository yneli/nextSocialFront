import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState:any = {
    themaDarkStatus: "false",
};
const themaSlice = createSlice({
    name: "thema",
    initialState,
    reducers: {
        appDarkThema: (state:any) => {
            state.themaDarkStatus = !state.themaDarkStatus;
            if(state.themaDarkStatus === false){
                localStorage.setItem('thema', 'Light');
            }if(state.themaDarkStatus === true){
                localStorage.setItem('thema', 'Dark');
            };
        },
        whatIsThema: (state:any) => {
            const thema = localStorage.getItem('thema');
            if(thema === 'Dark'){
                state.themaDarkStatus = true;
            }if (thema === 'Light'){
                state.themaDarkStatus = false;
            }

        }
    },
});
export const themaReducer = themaSlice.reducer;
export const selectIsItems = (state: any) => Boolean(state.items);
export const { appDarkThema, whatIsThema } = themaSlice.actions;