import Image from "next/image";

const Avatar = () => {
  return (
    <div className="flex max-w-none opacity-50 md:opacity-75 xl:opacity-100">
      <Image
        src="/teste3.png"
        width={737}
        height={678}
        alt="Avatar Imagem"
        className="translate-z-0 w-full h-full -scale-x-100 object-contain"
      />
    </div>
  );
};

export default Avatar;
