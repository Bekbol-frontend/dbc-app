import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Flex } from "@/shared/ui/Flex";
import { Card } from "@/shared/ui/Card";
import styles from "./PatrnersSwieper.module.scss";

// Images
import BabyMarket from "@/shared/assets/partners-logo/Baby Market, посты.png";
import DBC from "@/shared/assets/partners-logo/DBC1.png";
import LOGO_APP_XALIQ from "@/shared/assets/partners-logo/LOGO APP XALIQ-02.png";
import LOGO from "@/shared/assets/partners-logo/LOGO.png";
import MTM from "@/shared/assets/partners-logo/MTM logo.png";
import TMG from "@/shared/assets/partners-logo/TMG.png";
import ALPAMIS_STOMA from "@/shared/assets/partners-logo/alpamis stoma.png";
import PHOTO1 from "@/shared/assets/partners-logo/photo_2024-04-23_12-08-52.jpg";
import PHOTO2 from "@/shared/assets/partners-logo/photo_2024-04-23_12-13-12.jpg";
import LOGO_RIVOZH from "@/shared/assets/partners-logo/ЛОГО РИВОЖ.png";

const items = [
  {
    id: 1,
    img: BabyMarket,
  },
  {
    id: 2,
    img: DBC,
  },
  {
    id: 3,
    img: LOGO_APP_XALIQ,
  },
  {
    id: 4,
    img: LOGO,
  },
  {
    id: 5,
    img: MTM,
  },
  {
    id: 7,
    img: TMG,
  },
  {
    id: 8,
    img: ALPAMIS_STOMA,
  },
  {
    id: 9,
    img: PHOTO1,
  },
  {
    id: 10,
    img: PHOTO2,
  },
  {
    id: 11,
    img: LOGO_RIVOZH,
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
          <Card addClass={styles.swiperCard}>
            <Flex align="center" justify="center" addClass={styles.imgWrapper}>
              <img src={img} alt="image logo" loading="lazy" />
            </Flex>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default memo(PatrnersSwieper);
