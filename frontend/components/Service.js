import { useSelector } from "react-redux";
import styles from './styles/Service.module.sass';


function Service() {
    const text = useSelector(state => state.language.text);


    function  ListRules(props) {
        const data = props.data;
        
        return data.map((value, index) => {
            return(
                <div
                    className={styles.rule}
                    key={index}
                >   
                    <h5>
                        {value.caption}
                    </h5>
                    <p>
                        {value.description}
                    </p>
                </div>
            )

        })
    }
    return(
        <div className={styles.Service}>
            <h4 className={styles.caption}>
                {text.Service.caption}
            </h4>
            <div className={styles.listRules}>
                <ListRules data={text.Service.listRules} />
            </div>
        </div>
    )
}

export default PrivacyPolicy;