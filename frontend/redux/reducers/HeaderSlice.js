import { createSlice } from "@reduxjs/toolkit";
import anime from "animejs";
import stylesFormContact from '../../components/styles/FormContacts.module.sass';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        durationAnim: 120,
        formFon: stylesFormContact.formFon,
        logotypeInForm: stylesFormContact.logotype,
        formContact: stylesFormContact.formContact,
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
        },
        openFormContact: (state) => {
            const { formFon, logotypeInForm, formContact } = state;
            anime({
                targets: `.${formFon}`,
                translateX: 0 + 'vw',
                duration: 2000,
                complete: () => {
                    anime({
                        targets: `.${formFon}`,
                        clipPath: 'circle(90%)',
                        duration: 2000,
                    }),
        
                    setTimeout(() => {
                        anime({
                            targets: `.${logotypeInForm}`,
                            translateY: -13 + 'vw',
                            duration: 3000,
                            delay: 0
                        })
                    }, 100);

                    setTimeout(() => {
                        anime({
                            targets: `.${formContact}`,
                            translateY: 0,
                            opacity: 1,
                            duration: 3000
                        })
                    }, 150);
                }
            })
        },
        closeFormContact: (state) => {
            const { formFon, logotypeInForm, formContact } = state;
            anime({
                targets: `.${formContact}`,
                translateY: 150 + 'px',
                opacity: 0,
                duration: 3000,
            })
            anime({
                targets: `.${logotypeInForm}`,
                translateY: 65,
                duration: 3000,
                delay: 500,
            })
            anime({
                targets: `.${formFon}`,
                clipPath: 'circle(10% at 50% 50%)',
                duration: 3000,
                delay: 1300
            })
            anime({
                targets: `.${formFon}`,
                translateX: 100 + 'vw',
                duration: 3000,
                delay: 3000
            })
        },
    }
});

export const { 
    showDropMenu, 
    hideDropMenu, 
    openMobileMenu, 
    closeMobileMenu,
    showIconDropMenu,
    hideIconDropMenu,
    openFormContact,
    closeFormContact
} = menuSlice.actions;
export default menuSlice.reducer;