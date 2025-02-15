type Props = {
  image: string;
  title: string;
  subtitle: string;
  opacity?: string;
};

const InfoComponent = ({  image, title, subtitle, opacity }: Props) => {
  return (
    <div
      className={`${opacity} rounded-md border border-white bg-white/90 backdrop-blur-md p-4 w-[320px]`}
    >
      <div className="flex items-center gap-[12px]">
        <img
          className="w-[40px] h-[40px] rounded-full"
          src={image}
          alt="avatar"
        />
        <div className="flex flex-col">
          <h1 className="text-[#6941C6] text-[14px] font-medium leading-[20px]">
            {title}
          </h1>
          <p className="text-[#101828] text-[14px] font-normal leading-[20px]">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoComponent;
