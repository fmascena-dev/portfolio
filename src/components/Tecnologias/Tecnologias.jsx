import { FaCss3, FaHtml5, FaReact, FaVuejs } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiSass, SiStyledcomponents } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';
import styles from './Tecnologias.module.scss';

export default function Tecnologias() {
  return (
    <main id="tecnologias" className={styles.tecnologias}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        speed={1000}
        autoplay={{ delay: 1000 }}
        watchSlidesProgress={true}
        observeParents={true}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <FaHtml5 />
          <figcaption>HTML</figcaption>
          <p>
            Linguagem de marcação utilizada para estruturar e apresentar
            conteúdo na web.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <FaCss3 />
          <figcaption>CSS</figcaption>
          <p>
            Linguagem de estilo utilizada para estilizar os elementos da web.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SiSass />
          <figcaption>SCSS</figcaption>
          <p>
            Framework CSS que permite a criação de estilos reutilizáveis e
            escaláveis.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <SiStyledcomponents />
          <figcaption>Styled Components</figcaption>
          <p>
            Framework CSS que permite a criação de componentes reutilizáveis e
            escaláveis com a facilidade de estilizar componentes com Styled
            Components.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <IoLogoJavascript />
          <figcaption>JavaScript</figcaption>
          <p>
            Linguagem de programação que permite a criação de interatividade e
            funcionalidades em páginas web.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <FaReact />
          <figcaption>React</figcaption>
          <p>
            Biblioteca JavaScript criado pelo Facebook para a criação de
            interfaces reativas.
          </p>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <FaVuejs />
          <figcaption>Vue.js</figcaption>
          <p>
            Framework JavaScript criado pelo Vue.js para a criação de interfaces
            reativas.
          </p>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
