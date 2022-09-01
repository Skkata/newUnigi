import anime from 'animejs';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeFormContact } from '../redux/reducers/HeaderSlice';
import styles from './styles/FormContacts.module.sass';

function FormContacts() {
    const text = useSelector(state => state.language.text);
    const dispatch = useDispatch()
    const formFon = useRef();
    const logotype = useRef();


    function InputItems(props) {
        const data = props.data;

        return data.map((value, index) => {

            if(value.name === 'comment') {
                return(
                    <div
                    className={styles.inputItems}
                    key={index}
                >
                    <textarea type={value.type} required name={value.name} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
                )
            }
            return(
                <div
                    className={styles.inputItems}
                    key={index}
                >
                    <input type={value.type} required name={value.name} placeholder={value.placeholder}/>
                    <span>{value.text}</span>
                </div>
            )
        });
    }
    return(
        <div 
            className={styles.formFon}
            ref={formFon}
            style={{
                transform: 'translateX(100vw)'
            }}
        >   
            <div
                className={styles.btnClose}
                onClick={() => {
                    dispatch(
                        closeFormContact()
                    )
                }}
            >
                {text.formContact.btnClose}
            </div>
            <div 
                className={styles.logotype}
                ref={logotype}
            >
                <h1>UNIGI</h1>
            </div>
            <div
                className={styles.formContact}
                style={{
                    transform: 'translateY(150px)'
                }}
            >
                <div className={styles.caption}>
                    {text.formContact.caption}
                </div>
                <form>
                    <InputItems data={text.formContact.inputItems}/>
                    <div className={styles.btns}>
                        <button>{text.formContact.btnSubmit}</button>
                        <div className={styles.btnAgree}>
                            <input type='checkbox' id='agree' required/>
                            <Link 
                                href="/privacyPolicy"
                            >
                                <label 
                                    htmlFor='agree'
                                    onClick={ () => {
                                        dispatch(
                                            closeFormContact()   
                                        )
                                    }
                                    }
                                >{text.formContact.labelAgree}</label>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )    
};

export default FormContacts;