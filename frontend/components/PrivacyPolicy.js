import { useSelector } from "react-redux";
import styles from './styles/PrivacyPolicy.module.sass';


function PrivacyPolicy() {
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
        <div className={styles.privacyPolicy}>
            <h4 className={styles.caption}>
                {text.privacyPolicy.caption}
            </h4>
            <div className={styles.listRules}>
                <ListRules data={text.privacyPolicy.listRules} />
            </div>
        </div>
    )
}

export default PrivacyPolicy;