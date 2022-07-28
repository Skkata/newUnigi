import React from 'react'
import Link from 'next/link'
import { useRef, useState } from 'react';
import styles from './styles/Header.module.sass';


export default function Header() {
    const [ lang, setLang ] = useState('ru');
    const [ activeLang, setActiveLang ] = useRef('');
    const [ hideDropMenu, setHideDropMenu ] = useState( styles.hideDropMenu );
    const [ captionDropMenuId, setCaptionDropMenuId ] = useState('') 
    const dropMenu = useRef();
    const captionDropMenu = useRef();

    function showDropMenu() {
        setHideDropMenu('');
        setCaptionDropMenuId(styles.active);
    };

    function closeDropMenu() {
        setHideDropMenu( styles.hideDropMenu )
        setCaptionDropMenuId('');
    };

    function changeLang(event) {
        const langValue = event.target.dataset['lang'];
        console.log(langValue);
    }

    return(
        <header className={ styles.header }>
            
            <div className={ styles.logotype }> 
                <Link href='/'>
                    UNIGI 
                </Link>
                <div className={ styles.background }>

                </div>
            </div>

            <div className={ styles.menu }>
                <div className={ styles.menuEl }>
                    <Link href='/about'>
                        О нас
                    </Link>
                </div>
                <div 
                    className={ styles.menuEl } 
                    id={ captionDropMenuId }
                    onMouseOver={ showDropMenu } 
                    ref={ captionDropMenu }
                >Услуги</div>
                <div 
                    className={`${styles.dropMenu} ${ hideDropMenu }`} 
                    ref={ dropMenu }
                    onMouseOver={ showDropMenu }
                    onMouseOut={ closeDropMenu }
                >
                    <div 
                        className={ styles.dropMenuList }
                    >
                        
                        <div className={ styles.listEl }>
                            <Link href='/service/landing'>
                                Лендинг
                            </Link>
                        </div>
                        <div className={ styles.listEl }> 
                            <Link href='/service/internet-shop'>
                                Интернет-магазин
                            </Link>
                        </div>
                        <div className={ styles.listEl }>
                            <Link href='/service/web-app'>
                                Веб-приложение
                            </Link>
                        </div>
                        
                    </div>
                </div>
                <div className={ styles.menuEl }> 
                    <Link href='/contacts'>
                        Контакты
                    </Link>
                </div>
            </div>

            <div className={ styles.langs }>
                <div 
                    className={ styles.langBtn }
                    data-lang='en'
                    id={ ''}
                    onClick={ changeLang }
                >en</div>
                <div 
                    className={ styles.langBtn }
                    data-lang='ru'
                    id={ styles.activeLang }
                    onClick={ changeLang }
                >ru</div>
            </div>
            <div className={ styles.btnContact }></div>
        </header>
    )
}