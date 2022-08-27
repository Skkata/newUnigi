import { createSlice } from '@reduxjs/toolkit';
import { textEN, textRU } from '../../assets/text';
var lang = 'ru';

if(typeof window !== 'undefined') {
    lang = window.localStorage.getItem('lang');
}

const langSlice = createSlice({
    name: 'language',
    initialState: {
        value: lang,
        text: lang === 'en' ? textEN : textRU
    },
    reducers: {
        changeToRu: state => {
            window.localStorage.setItem('lang', 'ru');
            state.text = textRU;
        },
        changeToEn: state => {
            window.localStorage.setItem('lang', 'en');
            state.text = textEN;
        },
        changeValue: (state, action) => {
            state.value = action.payload;
        }
    }
});


export const { changeToRu, changeToEn, changeValue } = langSlice.actions;
export default langSlice.reducer;