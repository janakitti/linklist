import Image from "next/image";

const WelcomeLayout = (props: any) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
    <div className="flex flex-col items-center justify-center hidden lg:flex">
      <Image
        src="/graphics/welcome-0.svg"
        alt="Graphic of phone"
        width={500}
        height={500}
      />
    </div>
    <div className="bg-light h-full">{props.children}</div>
  </div>
);

export default WelcomeLayout;
