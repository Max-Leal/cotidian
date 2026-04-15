import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const slides = [
  {
    id: "1",
    image:
      "https://s2-techtudo.glbimg.com/Hs7XHIzJBn-xKtxY1wvwOYSY-0c=/0x0:626x329/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2024/t/3/AQPvU5RGCtGNiw5HwAuw/meta.jpeg",
    alt: "Imagem de divulgação do Cotidian",
  },
  {
    id: "2",
    image:
      "https://img.freepik.com/premium-vector/hand-drawn-hawaii-holiday-illustration_52683-174830.jpg?size=626&ext=jpg",
    alt: "Ilustração promocional do Cotidian",
  },
];

export const SliderComponent = () => {
  return (
    <section className="min-h-0 overflow-hidden rounded-2xl border border-text/10 bg-white shadow-sm">
      <div className="h-full min-h-[180px] w-full">
        <Swiper
          modules={[Autoplay]}
          loop
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-full w-full [&_.swiper-slide]:h-full [&_.swiper-wrapper]:h-full"
        >
          {slides.map((item) => (
            <SwiperSlide key={item.id} className="h-full">
              <div className="relative h-full min-h-[148px] w-full overflow-hidden rounded-xl bg-background">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
