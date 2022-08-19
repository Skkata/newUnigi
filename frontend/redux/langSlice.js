import { createSlice } from '@reduxjs/toolkit';
import localforage from 'localforage';
import { textEN, textRU } from '../assets/text';

const lang = 'ru';
const langSlice = createSlice({
    name: 'language',
    initialState: {
        value: lang,
        text: lang === 'en' ? textEN : textRU
    },
    reducers: {
        changeToRu: state => {
            localforage.setItem('lang', 'ru');
            state.text = textRU;
        },
        changeToEn: state => {
            localforage.setItem('lang', 'en');
            state.text = textEN;
        },
        changeValue: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeToRu, changeToEn, changeValue } = langSlice.actions;
export default langSlice.reducer;