import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import anime from 'animejs'
import styles from '../styles/Home.module.sass'
import Banner from '../components/Banner'
import svgTech from '../assets/img/tech.svg';
import iconWebSite from '../assets/icons/Website.svg';
import iconWebApp from '../assets/icons/WebApp.svg';
import iconMobileApp from '../assets/icons/MobileApp.svg';
import iconDesktopApp from '../assets/icons/DesktopApp.svg';
import iconLanding from '../assets/icons/lending.svg';
import iconInternetShop from '../assets/icons/internet-shop.svg';
import iconWeb from '../assets/icons/web-app.svg';
import Link from 'next/link'
import { animationHoverService, animationNoHoverService, hideServiceForDesktop, hideServiceForMobile, showServiceForDesktop, showServiceForMobile } from '../redux/reducers/mainSlice'

export default function Home() {
  const text = useSelector(state => state.language.text);
  const technology = useRef();
  const dispatch = useDispatch();
  const service = useRef('');
  const [ hideCaption, setHideCaption ] = useState(styles.hideCaption);
  const sizeIconsTech = {
    width: 70,
    height: 70
  }
  const sizeIconsService = {
    width: 160,
    height: 140
  }
  
  useEffect(() => {
    
    // animation card services

    const observer = new IntersectionObserver(entries => {
  
      entries.forEach(entry => {

          // animation card service for mobile version

          if(window.innerWidth < 428) {
            
            if(!entry.isIntersecting) {

              dispatch(
                hideServiceForMobile({
                  idService: entry.target.id
                })
              )
              return;
            }

            dispatch(
              showServiceForMobile({
                  idService: entry.target.id
              })
            )
            
          }else {

            // animation card service for desktop

            if(!entry.isIntersecting) {

              dispatch(
                hideServiceForDesktop({
                  idService: ['#landings', '#internet-shops', '#web-apps']
                })
              )
              return;
            }

            dispatch(
                
              showServiceForDesktop({
                  idService: ['#landings', '#internet-shops', '#web-apps']
              })
            
            );
            
          }

      });

    });

    observer.observe(document.getElementById('landings'));
    observer.observe(document.getElementById('internet-shops'));
    observer.observe(document.getElementById('web-apps'));


    // 
  }, [])

  function ListService(props) {
    const data = props.data;

    return data.map((value, index) => {

      let icon;
      switch (value.id) {
        case 'landing':
          icon = iconLanding;
          break;
        case 'internet-shop':
          icon = iconInternetShop;
          break;
        case 'web-app':
          icon = iconWeb;
          break;
      }
      return(
        <Link
            href={value.href}
            key={index}
          >
                <div 
                  className={styles.serviceEl}
                  id={value.id + 's'}
                >
                  <div className={styles.leftService}>
                    <h3 className={styles.nameService}>{value.text}</h3>
                    <Image 
                      src={icon}
                      width={sizeIconsService.width}
                      height={sizeIconsService.height}
                      alt={`icon ${value.id}`}
                    />
                  </div>
                  <p className={styles.descService}>
                    {value.description}
                  </p>
                </div>
              </Link>
      )

    });
  }

  return(
    <>
      <Head>
        <title>{text.head.title.main}</title>
      </Head>
      <Banner />
      <div className={styles.services}>
          <div className={styles.servicesText}>
              <h3 className={styles.servicesCaption}>
                {text.services.caption}
              </h3>
              <p className={styles.servicesDesc}>
                {text.services.description}
              </p>
          </div>
          <div className={styles.listServices}>
            <ListService data={text.services.listService}/>
          </div>
      </div>
      <div 
        className={ styles.information }
      >
          <div className={styles.text}>  
            <h3 className={ styles.caption }>
              {text.information.caption}
            </h3>
            <p className={styles.description}>
              {text.information.description}
            </p>
          </div>
          <div
            className={styles.technology}
            ref={ technology }
          >
            <div
              className={ styles.listTech }
            >
              
              <div className={styles.column}>
                
                <div className={ styles.elTech }>
                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      {text.information.technology[0].caption}        
                    </h3>
                    <p className={ styles.descTech }>
                        {text.information.technology[0].description}
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconWebSite}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                        alt='icon web-site'
                      />
                  </div>
                </div>

                <div className={ styles.elTech }>

                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      {text.information.technology[1].caption}
                    </h3>
                    <p className={ styles.descTech }>
                      {text.information.technology[1].description}
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconWebApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                        alt='icon web app'
                      />
                  </div>
                </div>

              </div>
              
              <div className={styles.column}>

                <div className={ styles.elTech }>
                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      {text.information.technology[2].caption}
                    </h3>
                    <p className={ styles.descTech }>
                      {text.information.technology[2].description}
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconMobileApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                        alt='icon mobile app'
                      />
                  </div>
                </div>

                <div className={ styles.elTech }>
                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      {text.information.technology[3].caption}
                    </h3>
                    <p className={ styles.descTech }>
                      {text.information.technology[3].description}
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconDesktopApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                        alt='icon desktop app'
                      />
                  </div>
                </div>

              </div>


            </div>
          </div>
      </div>
    </>
  )
}
