import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import img from '../assets/img/Development-Hack.svg'
import imgTeam from '../assets/img/Development-Team-coding.svg'

export default function Home() {
  return (

    <div>
      <Head>
        <title>Alpha</title>
      </Head>
      

      {/* POSTER */}
      <div className={styles.poster}>
        <div className={styles.text}>
          <div className={styles.block}>
            <div className={styles.name}>ИДЕЯ. ПРОЕКТ. МОНЕТИЗАЦИЯ. ДОХОД.</div>
            <div className={styles.description}>Unigi - международный продуктовая ИТ компания с украинскими корнями, наше ключевая направление деятельности - создание и продвижение информационной порталов игровой тематики на западные рынки</div>
            <div className={styles.button}>Посмотреть вакансии</div>
          </div>
        </div>
        <Image className={styles.img} src={img} />
      </div>



      {/* WHO ARE WE */}
      <div className={styles.WhoAreWe}>
        <div className={styles.block}>
          <div className={styles.name}>О нас?</div>
          <div className={styles.text}>
            <div className={styles.hat}>Мы развиваем,вкладываем силы и поддерживаем каждого человека в компании</div>
            <div className={styles.info}>Unigi - место, где вы можете на 100% реализовать свой потенциал. Каждый сотрудник - это важная часть продукта. Все вместе мы создаем единую экосистему.</div>
          </div>
        </div>
        <Image className={styles.img} src={imgTeam} />
      </div>




      {/* OUR VALUES */}
      <div className={styles.OurValues}>
        <div className={styles.text}>Что делаем?</div>
        
        <div className={styles.one_block}>
          <div className={styles.block}>
            <div className={styles.hat}>Ответственность
              <div className={styles.number}>01.</div>
            </div>
            <div className={styles.description}>За то, что мы делаем, за то, что мы говорим, за то, как мы себя ведем</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Инициативность
              <div className={styles.number}>02.</div>
            </div>
            <div className={styles.description}>Желание принимать решения, предлагать улучшения, работать на 102%</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Ответственность
              <div className={styles.number}>03.</div>
            </div>
            <div className={styles.description}>За то, что мы делаем, за то, что мы говорим, за то, как мы себя ведем</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Инициативность
              <div className={styles.number}>04.</div>
            </div>
            <div className={styles.description}>Желание принимать решения, предлагать улучшения, работать на 102%</div>
          </div>
        </div>
        <div className={styles.two_block}>
          <div className={styles.block}>
            <div className={styles.hat}>Ответственность
              <div className={styles.number}>05.</div>
            </div>
            <div className={styles.description}>За то, что мы делаем, за то, что мы говорим, за то, как мы себя ведем</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Инициативность
              <div className={styles.number}>06.</div>
            </div>
            <div className={styles.description}>Желание принимать решения, предлагать улучшения, работать на 102%</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Ответственность
              <div className={styles.number}>07.</div>
            </div>
            <div className={styles.description}>За то, что мы делаем, за то, что мы говорим, за то, как мы себя ведем</div>
          </div>
          <div className={styles.block}>
            <div className={styles.hat}>Инициативность
              <div className={styles.number}>08.</div>
            </div>
            <div className={styles.description}>Желание принимать решения, предлагать улучшения, работать на 102%</div>
          </div>
        </div>
      </div>




      {/*ADVERTISING */}
      <div className={styles.advertising}>

        <div className={styles.name}>Почему нужно нас выбрать?</div>
        <div className={styles.one_block}>
          <div className={styles.text}>Unigi - молодая и веселая команда, в которой помогают и поддерживают друг друга.</div>
          <div className={styles.text}>Мы работаем только своими  собственными продуктами.</div>
        </div>
        <div className={styles.two_block}>
          <div className={styles.text}>У нас демократичное руководство, которое заботится и уважает своих сотрудников.</div>
          <div className={styles.text}>Вы можете ежедневно повышать свой профессионализм, работая над уникальными для Беларуси проектами.</div>
        </div>
      </div>
      {/* SERVICES */}
      <div className={styles.services}></div>


      {/* CONTACTS */}
      <div className={styles.contacts}>

        <div className={styles.general}>
          <div className={styles.name}>Контакты</div>
          <div className={styles.block}>
            <div className={styles.title}>Почта</div>
            <div className={styles.info}>Unigi@gmail.com</div>
          </div>
          <div className={styles.block}>
            <div className={styles.title}>Телефон</div>
            <div className={styles.info}>+7 996 268-06-58</div>
          </div>
        </div>
      </div>



      {/* BASEMENT */}
      <div className={styles.basement}>
        <div className={styles.block}>
          <div className={styles.name}>Unigi</div>
          <div className={styles.rights}>© Copyright 2022</div>
          <div className={styles.social_networks}>
            <div className={styles.discord}>
              <image src={discord} />
            </div>
            <div className={styles.telegram}>
              <image src={telegram} />
            </div>
          </div>
        </div>

      </div>


    </div>
 

  )
}
