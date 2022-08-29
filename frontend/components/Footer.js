import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import styles from './styles/Footer.module.sass';
import iconTelegram from '../assets/icons/Telegram - Original.svg';

export default function Footer() {
    const text = useSelector(state => state.language.text);


    function Links(props) {
        const data = props.data;

        return data.map((value, index) => {
            // console.log(value.href);
            return(
                <Link 
                    href={value.href}
                    key={index}
                >
                    {value.text}
                </Link>
            )
        })
    }

    return(
        <div className={styles.footer}>
            <h1 className={styles.logotype}>UNIGI</h1>
            <div className={styles.menuService}>
                <h3 className={styles.caption}>
                    {text.footer.menuService.caption}
                </h3>
                <div className={styles.menuEl}>
                    <Links data={text.footer.menuService.listService}/>
                </div>
            </div>
            <div className={styles.contacts}>
                <h3 className={styles.caption}>
                    {text.footer.contacts.caption}
                </h3>
                <div className={styles.listContacts}>
                    <Link 
                        href={'mailto:' + text.footer.contacts.email.href}
                    >
                        {text.footer.contacts.email.text}
                    </Link>
                    <Link
                        href={text.footer.contacts.telegram.href}
                    >
                        <span>
                            <Image 
                                src={ iconTelegram }
                                width={40}
                                height={40}
                                alt='icon telegram'
                                title='write to telegram'
                            />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}