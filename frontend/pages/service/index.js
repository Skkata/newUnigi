import { useSelector } from "react-redux";
import styles from '../../styles/service/Service.module.sass';
import iconLanding from '../../assets/icons/lending.svg';
import iconInternetShop from '../../assets/icons/internet-shop.svg';
import iconWeb from '../../assets/icons/web-app.svg';
import right from '../../assets/icons/right.svg'
import Image from 'next/image';


function Service() {
    const text = useSelector(state => state.language.text);
    function notecolor(){
        const notecolor=[
        
        ]
    }
    function ListService(){
        const imgs = [
            iconLanding,
            iconInternetShop,
            iconWeb
            
        ]
        // const color = [
        //     text_lending,
        //     text_shopping,
        //     text_work,
        //     text_product
        // ]
        console.log(text.servicePage.listService)
        return text.servicePage.listService.map((value,index)=>{
            
            return(
                <>
                    <div key={index}>
                        <div className={styles.block}>
                            <Image 
                                src={imgs[index]}
                                    width={400}
                                    height={300}
                            />
                            <h1 className={styles.text} >{value.text}</h1>
                            <h3>{value.description}</h3>
                            <Image src={right} className={styles.button}/>
                        </div>
                    </div>
                </>
                
                
            )
        })
    }
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
    
        <div className={styles.service}>
            <div className={styles.caption}>
                <h1>
                    {text.servicePage.caption}
                </h1>
                <div className={styles.place}>
                    <h3>
                        {text.servicePage.home}
                    </h3>
                    <Image 
                        src={right}
                        height={25}
                        width={25}
                    />
                    <h3>
                        {text.servicePage.atTheMoment}
                    </h3>
                </div>
            </div>
            
            
            
            
            <div className={styles.services}>
                
                <ListService/>
                <div className={styles.price}>
                    <h1 className={styles.start}>
                        {text.servicePage.price}
                    </h1>
                    <h3>
                        {text.servicePage.description}
                    </h3>
                    <div className={styles.button}>
                        <h3>
                            {text.servicePage.button}
                        </h3>
                    </div>
                </div>
                <div className={styles.help}>
                    <h1>
                        {text.servicePage.help.caption}
                    </h1>
                    <div className={styles.elem}>
                        <animate/>
                        <anime/>
                    </div>
                    <InputItems data={text.servicePage.help.inputItems}/>
                    <div className={styles.button}>
                        {text.servicePage.help.button}
                    </div>
                    <p className={styles.agreement}>
                        {text.servicePage.consultation.agreement_one}
                        {text.servicePage.consultation.agreement_two}
                    </p>
                    

                    
                </div>
            </div>

            
            
        </div>
    )
}


export default Service;