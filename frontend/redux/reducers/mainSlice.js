import { createSlice } from "@reduxjs/toolkit";
import anime from "animejs";

const mainSlice = createSlice({
    name: 'minaPage',
    initialState: {

    },
    reducers: {
        showServiceForMobile: (state, action) => {
            const { idService } = action.payload;

            anime({
                targets: `#${idService}`,
                translateX: 0,
                opacity: 1,
                duration: 2500
            });

        },
        hideServiceForMobile: (state, action) => {
            const { idService } = action.payload;
                
            anime({
                targets: `#${idService}`,
                translateX: -250,
                opacity: 0,
                duration: 2500
            })
        },
        showServiceForDesktop: (state, action) => {
            const { idService } = action.payload;
            anime({
                targets: idService,
                translateY: 0,
                opacity: 1,
                rotateX: 0,
                duration: 4500,
                delay: function(el, i, l) {
                    return i * 300;
                }
            })
        },
        hideServiceForDesktop: (state, action) => {
            const { idService } = action.payload;
            anime({
                targets: idService,
                translateY: -50,
                rotateX: -25,
                opacity: 0,
                duration: 2500
            })
        },
    }
});

export const {
    showServiceForMobile,
    hideServiceForMobile,
    showServiceForDesktop,
    hideServiceForDesktop,
    animationHoverService,
    animationNoHoverService
} = mainSlice.actions;

export default mainSlice.reducer;