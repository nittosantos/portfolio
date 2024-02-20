import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src="/teste1.png"
        width={640}
        height={500}
        alt="Avatar Imagem"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
