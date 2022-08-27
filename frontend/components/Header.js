import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import Image from 'next/image';
import anime from 'animejs';
import { changeToRu, changeToEn, changeValue } from '../redux/reducers/langSlice';
import styles from './styles/Header.module.sass';
import iconInternetShop from '../assets/icons/internet-shop.svg';
import iconLending from '../assets/icons/lending.svg';
import iconWebApp from '../assets/icons/web-app.svg';
import iconArrowsLeft from '../assets/icons/arrowsLeft.svg';
import iconTelegram from '../assets/icons/Telegram - Original.svg';
import iconEmail from '../assets/icons/email.svg';
import { hideDropMenu, hideIconDropMenu, showDropMenu, showIconDropMenu } from '../redux/reducers/HeaderSlice';

export default function Header() {
    const lang = useSelector(state => state.language.value);
    const dispatch = useDispatch()
    const text = useSelector(state => state.language.text);
    const btnBurger = useRef();
    // const [ body, setBody ] = useState('');
    const body = document.body;
    const [ activeMobileMenu, setActiveMobileMenu ] = useState(styles.hideMobileMenu);
    const [ hideMobileMenuFon, setHideMobileMenuFon ] = useState(styles.hideMobileMenuFon);
    const [ activeBtnLang, setActiveBtnLang ] = useState({
        ru: lang === 'ru' ? styles.activeLang : '',
        en: lang === 'en' ? styles.activeLang : ''
    });
    

    // Mobile

    function closeMobileMenu(clickOnLink = false) {
        setActiveMobileMenu(styles.hideMobileMenu);
        setHideMobileMenuFon(styles.hideMobileMenuFon);
        body.style.overflow = '';

        if(clickOnLink) {
            if(btnBurger) {
                btnBurger.current.classList.remove(styles.burgerActive)
            }
        }
    };

    function openMobileMenu() {
        setActiveMobileMenu('');
        setHideMobileMenuFon('');
        body.style.overflow = 'hidden';
    }
    
    function clickBurger() {
        btnBurger.current.classList.toggle(styles.burgerActive);

        btnBurger.current.classList.forEach(element => {
            if(element !== styles.burgerActive) {
                closeMobileMenu();
            }else{
                openMobileMenu();
            }
        });
    }

    // language

    function changeLang(event) {
        const lang = event.target.dataset['lang'];

        switch (lang) {
            case 'en':
                dispatch( changeToEn() );
                setActiveBtnLang({
                    ru: '',
                    en: styles.activeLang
                })
                event.target.id = activeBtnLang.en;
                break;
        
            default:
                dispatch( changeToRu() );
                setActiveBtnLang({
                    ru: styles.activeLang,
                    en: ''
                })
                event.target.id = activeBtnLang.ru;
                break;
        };
    }
    
    // compontents

    function MenuEl(props) {
        const data = props.data;

            return data.map(( value, index ) => {
                
                if(value.dropMenu) {
                    return (
                        <div 
                            className={ styles.menuEl }
                            id={ styles.captionDropMenu }
                            key={ index }
                            onMouseOver={ () => { 
                                dispatch( 
                                    showDropMenu(
                                        { 
                                            parent: `.${ styles.dropMenu }`, 
                                            text: `.${ styles.listEl }`,
                                            caption: `${ styles.captionDropMenu }`,
                                            styleActiveCaption: `${styles.activeCaptionDropMenu}`
                                        }
                                    )
                                ) 
                            }}
                            onClick={ () => closeMobileMenu(true) }
                        >
                            <Link href={ value.link || '#' } >
                                { value.text }
                            </Link>
                        </div>
                    )
                }
                
                return(
                    <div 
                        className={ styles.menuEl }
                        key={ index }
                        onClick={ () => closeMobileMenu(true) }
                        onMouseOver={ () => {
                            dispatch( 
                                hideDropMenu(
                                    { 
                                        parent: `.${ styles.dropMenu }`, 
                                        text: `.${ styles.listEl }`,
                                        caption: `${ styles.captionDropMenu }`,
                                        styleActiveCaption: `${styles.activeCaptionDropMenu}`
                                    }
                                )
                            )
                        } }
                    >
                        <Link href={ value.link || '#' } >
                            { value.text }
                        </Link>
                    </div>
                )
    
            })

    }
    
    function ListEl(props) {
        const data = props.data;
        
        return data.map((value, index) => {

            return(
                <div 
                    className={styles.listEl}
                    key={ index }
                    onMouseOver={() => {
                        dispatch(
                            
                            showIconDropMenu({
                                nameIcon: value.id
                            })
                        )
                    }}
                    onMouseOut={() => {

                        dispatch(

                            hideIconDropMenu({
                                nameIcon: value.id
                            })

                        )
                    }}
                >
                    <Link
                        href={ value.link }
                    >
                            {value.text}
                    </Link>
                </div>
            )

        })
    
    }

    function IconsDropMenu(props) {
        const data = props.data;

        let nameIcon = ['landing', 'internet-shop', 'web-app'];
        return data.map((value, index) => {
            return(
                <div
                    key={index}
                    id={nameIcon[index]}
                    style={{
                        opacity: 0
                    }}      
                >
                    <Image 
                        src={value}
                        width={120}
                        height={120}
                    />
                </div>
            )

        });
    }

    return(
        <>
            <header className={ styles.header }>
                
                <div className={ styles.logotype }> 
                    <Link href='/'>
                        UNIGI
                    </Link>
                </div>

                <div className={styles.menu}>
                    <MenuEl data={text.header.menu}/>
                    <div 
                        className={ styles.dropMenu + ' ' + styles.hideDropMenu}
                        onMouseLeave={ () => { 
                            dispatch( 
                                hideDropMenu(
                                    { 
                                        parent: `.${ styles.dropMenu }`, 
                                        text: `.${ styles.listEl }`,
                                        caption: `${ styles.captionDropMenu }`,
                                        styleActiveCaption: `${styles.activeCaptionDropMenu}`
                                    }
                                ) 
                            ) 
                        }}
                    >
                        <div className={styles.iconsDropMenu}>
                            <IconsDropMenu data={ [iconLending, iconInternetShop, iconWebApp] }/>
                        </div>
                        <div className={styles.dropMenuList}>
                            <ListEl data={text.header.menu[1].dropMenu} />
                        </div>
                    </div>
                </div>

                <div className={ styles.rightInfo }>
                    <div className={ styles.langs }>
                        <div 
                            className={ styles.langBtn }
                            data-lang='en'
                            id={ activeBtnLang.en }
                            onClick={ changeLang }
                        >en</div>
                        <div 
                            className={ styles.langBtn }
                            data-lang='ru'
                            id={ activeBtnLang.ru }
                            onClick={ changeLang }
                        >ru</div>
                    </div>
                    <div 
                        className={ styles.btnContact }
                    >
                        <div className={ styles.btnContactIcon }>
                            <Image 
                                src={ iconArrowsLeft }
                                width={34}
                                height={34}
                            />
                        </div>
                        <p className={ styles.btnContactText }>
                            { text.header.btnContact.text }
                        </p>
                    </div>
                </div>
            </header>
            <div 
                className={ styles.btnBurger }
                onClick={ ()=> clickBurger() }
                ref={ btnBurger }
            >
                <span className={ styles.topLine }></span>
                <span className={ styles.middleLine }></span>
                <span className={ styles.bottomLine }></span>
            </div>
            <div className={ styles.mobileMenuFon + ' ' + hideMobileMenuFon }>

                <div className={ styles.mobileMenu + ' ' + activeMobileMenu }>
                    
                    <div className={ styles.head }>
                    
                        <div 
                            className={ styles.mobileLogo }
                            onClick={() => closeMobileMenu(true) }    
                        >
                            <Link
                                href='/'
                            >
                                UNIGI
                            </Link>
                        </div>
                    
                    </div>
                    
                    <div className={ styles.menu }>
                        <MenuEl data={ text.header.menu }/>
                    </div>
                    
                    <div className={ styles.footer }>
                        <div className={ styles.info }>
                            <Link 
                                href='#'
                            >
                                <div className={ styles.telegram }>
                                    <Image 
                                        src={ iconTelegram }
                                        width={ 40 }
                                        height={ 40 }
                                        alt='icon telegram'
                                        title='icon telegram'
                                    />
                                </div>
                            </Link>
                            <Link 
                                href='#'
                            >
                                <div className={ styles.email }>
                                    <Image 
                                        src={ iconEmail }
                                        width={ 40 }
                                        height={ 40 }
                                        alt='icon email'
                                        title='icon mail'
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}