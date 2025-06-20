import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./PatrnersSwieper.module.scss";
import Adidas from "@/shared/assets/Adidas-logo.png";
import Nike from "@/shared/assets/nike logo.png";
import Reebok from "@/shared/assets/reebok logo.png";
import Cadilac from "@/shared/assets/cadilac logo.jpg";

import { Flex } from "@/shared/ui/Flex";
import { Card } from "@/shared/ui/Card";

const items = [
  {
    id: 1,
    img: Adidas,
  },
  {
    id: 2,
    img: Nike,
  },
  {
    id: 3,
    img: Reebok,
  },
  {
    id: 4,
    img: Cadilac,
  },
  {
    id: 5,
    img: Adidas,
  },
  {
    id: 6,
    img: Nike,
  },
  {
    id: 7,
    img: Reebok,
  },
  {
    id: 8,
    img: Cadilac,
  },
  {
    id: 9,
    img: Adidas,
  },
  {
    id: 10,
    img: Nike,
  },
  {
    id: 11,
    img: Reebok,
  },
  {
    id: 12,
    img: Cadilac,
  },
];

function PatrnersSwieper() {
  return (
    <Swiper
      allowTouchMove={false}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      className={styles.swiperBlock}
      direction="horizontal"
      loop
      modules={[Autoplay]}
      slidesPerView={2}
      spaceBetween={16}
      speed={3000}
      breakpoints={{
        768: {
          
          slidesPerView: 4,
        },
      }}
    >
      {items.map(({ id, img }) => (
        <SwiperSlide key={id}>
          <Card>
            <Flex align="center" justify="center" addClass={styles.imgWrapper}>
              <img src={img} alt="image logo" />
            </Flex>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(PatrnersSwieper);
