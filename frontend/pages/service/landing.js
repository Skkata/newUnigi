import { useSelector } from "react-redux";
import styles from '../../styles/service/landing.module.sass';
import right from '../../assets/icons/right.svg'
import CheckMark from '../../assets/icons/checkmark.svg'
import landingImg from '../../assets/img/landing.png'
import watch from '../../assets/icons/watch.svg'
import dollar from '../../assets/icons/dollar.svg'
import Image from 'next/image';

function Landing() {
    const text = useSelector(state => state.language.text);
    function TextLanding(){
        return  text.landingPage.text.map((value,index)=>{
            return(
                <>
                    <div key={index}>
                        <div>
                            <div className={styles.Descriptionlanding}>
                                
                                <p>{value.description}</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
    }
    function Creation(){
        return text.landingPage.buttom.one.map((value,index)=>{
            return(
                <>
                    <div key={index}>
                        <div className={styles.pros}>
                            <Image 
                                src={CheckMark}
                                height={20}
                                width={20}
                            />
                            <p className={styles.one_text}>{value.pros}</p>
                        </div>
                    </div>
                </>
            )
        })
    }
    function Guarantee(){
        return text.landingPage.buttom.two.map((value,index)=>{
            return(
                <>
                    
                        <div   key={index} className={styles.pros}>
                            <Image 
                                src={CheckMark}
                                height={20}
                                width={20}
                            />
                            <p className={styles.one_text}>
                                {value.pros}
                            </p>
                        </div>
                    
                </>
            )
        })
    }
    
    return (
        <div className={styles.landing}>
            <div className={styles.caption}>
                <h1>
                    {text.landingPage.landing}
                </h1>
                <div className={styles.place}>
                    <h3>
                        {text.landingPage.home}
                    </h3>
                    <Image
                        src={right}
                        height={25}
                        width={25}
                    />
                    <h3>
                        {text.landingPage.service}
                    </h3>
                    <Image
                        src={right}
                        height={25}
                        width={25}
                    />
                    <h3>
                        {text.landingPage.landing}
                    </h3>
                </div>
            </div>



            <div className={styles.description}>

                <div className={styles.block}>
                    <div className={styles.img}>
                        <Image 
                            src={landingImg}
                            height={454}
                            width={555}
                        />
                    </div>
                    
                    <div className={styles.text}>
                        <h3 className={styles.name}>
                            {text.landingPage.caption}
                        </h3>
                        <TextLanding/>
                    </div>
                </div>




                <p className={styles.pati}>
                    {text.landingPage.p}
                </p>




                <div className={styles.buttom}>
                    <div className={styles.one}>
                        <h3 >{text.landingPage.one}</h3>
                        <Creation/>
                    </div>
                    <div className={styles.two}>
                        <h3 >{text.landingPage.two}</h3>
                        <Guarantee/>
                    </div>
                </div>
            </div>





            <div className={styles.block_one}>
                
                <div className={styles.general}>


                    <div className={styles.block_one.image}>
                        <Image 
                            src={dollar}
                            height={100}
                            width={100}
                        />
                    </div>



                    <div className={styles.block_one.price}>


                        <p className={styles.price.name}>
                            {text.landingPage.general.price.name}
                        </p>



                        <p className={styles.price.description}>

                            {text.landingPage.general.price.description}
                        </p>


                    </div>


                    <div>

                    </div>
                    
                </div>
                <div className={styles.general}>
                    <div className={styles.block_one.image}>
                        <Image 
                            src={watch}
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className={styles.block_one.watch}>
                        <p className={styles.watch.name}>
                            {text.landingPage.general.watch.name}
                        </p >
                        <p className={styles.description}>
                            {text.landingPage.general.watch.description}
                        </p>
                    </div>
                    <div>
                            
                    </div>
                </div>
            </div>














        </div>
    )




}
export default Landing;