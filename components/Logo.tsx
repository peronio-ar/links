import Image from "next/image";
import LogoSvg from "../public/logo.svg";

const Logo = () => {
  return (
    <div
      className='absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%]
      bg-white rounded-full ring-2 ring-gray-900/5
      shadow-lg
    '
    >
      <Image width='150' height='150' alt='La Crypta Logo' src={LogoSvg} />
    </div>
  );
};

export default Logo;
