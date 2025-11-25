import Image from "next/image";
import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[150px] h-[150px] md:w-[170px] md:h-[170px] xl:w-[185px] xl:h-[185px] flex justify-center items-center
        bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="Meus Projetos"
          className="animate-spin-slow w-full h-full max-w-[120px] max-h-[125px] md:max-w-[135px] md:max-h-[140px] xl:max-w-[141px] xl:max-h-[148px]"
        />
        <HiArrowRight className="absolute text-3xl md:text-3xl xl:text-4xl group-hover:text-accent transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
