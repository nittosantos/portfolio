import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaQuoteLeft } from "react-icons/fa";

// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "Ana Silva",
    position: "Cliente",
    message:
      "Trabalho excepcional! O profissional superou todas as minhas expectativas com atenção aos detalhes e entrega pontual. Recomendo fortemente!",
  },
  {
    image: "/t-avt-2.png",
    name: "Maria Oliveira",
    position: "Cliente",
    message:
      "Fiquei impressionada com a qualidade e dedicação. O projeto foi desenvolvido com muito cuidado e o resultado final foi perfeito. Muito satisfeita!",
  },
  {
    image: "/t-avt-3.png",
    name: "João Santos",
    position: "Cliente",
    message:
      "Profissionalismo e expertise de alto nível. A comunicação foi excelente durante todo o processo e o trabalho entregue superou minhas expectativas.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar, name, position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                    />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote e message */}
              <div
                className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20
                xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20"
              >
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
