import Image from "next/image";

const AvatarRight = () => {
  return (
    <div className=" xl:flex xl:max-w-none -scale-x-100">
      <Image
        src="/teste3.png"
        width={640}
        height={580}
        alt="AvatarRight Imagem"
        className="translate-z-0 w-full h-full "
      />
    </div>
  );
};

export default AvatarRight;
