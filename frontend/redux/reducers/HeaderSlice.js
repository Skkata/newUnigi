import { createSlice } from "@reduxjs/toolkit";
import anime from "animejs";

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        durationAnim: 120,
        mobile: false,
        dropMenuOpen: false,
        activeBtn: false,
        captionDropMenuStyle: ' ', 
    },
    reducers: {
        showDropMenu: (state, action) => {
            const { parent, caption, styleActiveCaption, text } = action.payload;
            anime({
                targets: parent,
                translateY: 0,
                height: 150,
                borderRadius: "50",
                opacity: 1,
                backgroundColor: 'black',
                duration: state.durationAnim,
                easing: 'linear',
                complete: () => {
                    const elCaption = document.getElementById(caption);
                    if(elCaption !== null) {
                        elCaption.id = styleActiveCaption;
                    }
                }
            });
            anime({
                targets: text,

                delay: function(el, i) { return i * 100; },
            })
        },
        hideDropMenu: (state, action) => {
            const { parent, styleActiveCaption, caption } = action.payload;

            anime({
                targets: parent,
                translateY: -60,
                height: 0,
                opacity: 0,
                backgroundColor: '#FFF',
                duration: state.durationAnim,
                easing: 'linear',
                complete: () => {
                    const elCaption = document.getElementById(styleActiveCaption);
                    if(elCaption !== null) {
                        elCaption.id = caption;
                    }
                }
            })
        },
        showIconDropMenu: (state, action) => {
            const { nameIcon } = action.payload;
            anime({
                targets: `#${nameIcon}`,
                opacity: 1,
                scale: 1
            })
        },
        hideIconDropMenu: (state, action) => {
            const { nameIcon } = action.payload;
            anime({
                targets: `#${nameIcon}`,
                scale: 0,
                opacity: 0,
            });
        },
        openMobileMenu: state => {
            state.mobile = true;
        },
        closeMobileMenu: state => {
            state.mobile = false;
        }
    }
});

export const { 
    showDropMenu, 
    hideDropMenu, 
    openMobileMenu, 
    closeMobileMenu,
    showIconDropMenu,
    hideIconDropMenu
} = menuSlice.actions;
export default menuSlice.reducer;