import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
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

export default function Home() {
  const technology = useRef();
  const [ srcTech, setSrcTechRobot ] = useState('/');
  const [ hideCaption, setHideCaption ] = useState(styles.hideCaption);
  const sizeIconsTech = {
    width: 70,
    height: 70
  }
  const sizeIconsService = {
    width: 140,
    height: 140
  }
  
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {

          if(entry.isIntersecting) {
            
          }
      });

    });

    observer.observe(technology.current);
  }, [])


  return(
    <>
      <Banner />
      <div className={styles.services}>
          <div className={styles.servicesText}>
              <h3 className={styles.servicesCaption}>
                Что мы делаем
              </h3>
              <p className={styles.servicesDesc}>
                Веб-разроботка: лендинг, интернет-магазин, веб-приложение
              </p>
          </div>
          <div className={styles.listServices}>
              <Link
                href={'/service/landing'}
              >
                <div className={styles.serviceEl}>
                  <div className={styles.leftService}>
                    <h3 className={styles.nameService}>Лендинг</h3>
                    <Image 
                      src={iconLanding}
                      width={sizeIconsService.width}
                      height={sizeIconsService.height}
                    />
                  </div>
                  <p className={styles.descService}>
                    Создадим одностраничный сайт, 
                    который презентует ваш продукт клиентам.
                    Не требует разработки сложной архитектуры сайта.
                  </p>
                </div>
              </Link>

              <Link
                href={'/service/internet-shop'}
              >
                <div className={styles.serviceEl}>
                  <div className={styles.leftService}>
                    <h3 className={styles.nameService}>Интернет-Магазин</h3>
                    <Image 
                      src={iconInternetShop}
                      width={sizeIconsService.width}
                      height={sizeIconsService.height}
                    />
                  </div>
                  <p className={styles.descService}>
                    Сделаем форму электронной торговли,
                    которая позволит вашим клиентам покупать
                    товары и услуги с помощью веб-браузера
                  </p>
                </div>
              </Link>

              <Link
                href={'/service/web-app'}
              >
                <div className={styles.serviceEl}>
                  <div className={styles.leftService}>
                    <h3 className={styles.nameService}>Веб-Приложение</h3>
                    <Image 
                      src={iconWeb}
                      width={sizeIconsService.width}
                      height={sizeIconsService.height}
                    />
                  </div>
                  <p className={styles.descService}>
                    Разработаем технически сложное приложение, 
                    которое поможет в продуктивности вашему бизнесу.
                  </p>
                </div>
              </Link>
          </div>
      </div>
      <div 
        className={ styles.information }
      >
          <div className={styles.text}>  
            <h3 
              className={ styles.caption }
            >
              ближе к технологиям
            </h3>
            <p
              className={styles.description}
            >
                Справочник по технологиям, которые автомизирует и помогает бизнесу.
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
                      Веб-сайты
                    </h3>
                    <p className={ styles.descTech }>
                        Состоит из веб-страниц, объединенных друг с другом в единый ресурс. 
                        Имеет простую архитектуру на основе HTML-кода. 
                        Служат в качестве платформы для предоставления контента для посетителей.
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconWebSite}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                      />
                  </div>
                </div>

                <div className={ styles.elTech }>

                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      Веб-приложение
                    </h3>
                    <p className={ styles.descTech }>
                      Интерактивные компьютерные приложения, 
                      разработанные для сети интернет, 
                      позволяющие пользователям вводить, 
                      получать и манипулировать данными с помощью взаимодействия.
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconWebApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                      />
                  </div>
                </div>

              </div>
              
              <div className={styles.column}>

                <div className={ styles.elTech }>
                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      Мобильное приложение
                    </h3>
                    <p className={ styles.descTech }>
                      Это программный пакет, 
                      функционал и дизайн которого «заточен» под возможности мобильных платформ.
                      У мобильных приложений бывает разное назначение. 
                      Самые распространенные варианты такие: приложения интернет-магазинов, развлечения, трекеры, различные сервисы и помощники.
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconMobileApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
                      />
                  </div>
                </div>

                <div className={ styles.elTech }>
                  <div className={ styles.textTech }>
                    <h3 className={ styles.captionTech }>
                      Десктоп приложение
                    </h3>
                    <p className={ styles.descTech }>
                      Программа, которая устанавливается на компьютер 
                      пользователя и работает под управлением операционной системы.
                      Такие приложения высокопроизводительные, могут работать напрямую с принтерами, сканерами, факсами и прочей техникой.
                    </p>
                  </div>
                  <div className={styles.iconTech}>
                      <Image 
                        src={iconDesktopApp}
                        width={sizeIconsTech.width}
                        height={sizeIconsTech.height}
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
