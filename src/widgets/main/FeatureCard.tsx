type Props = {
  svg: string;
  title: string;
  subtitle: string;
  soon?: string;
};

const FeatureCard = ({ svg, title, subtitle, soon }: Props) => {
  return (
    <div className="flex flex-col gap-[20px] items-start min-w-[240px] align-self-stretch">
      <img src={svg} alt="svg-card" className="" />
      <div className="flex flex-col gap-[10px] items-start">
        <div className="flex gap-[10px]">
          <h3 className="text-[#101828] text-[20px] font-semibold leading-[30px]">
            {title}
          </h3>
          {soon ? (
            <p className="text-[#667085] text-[16px] font-semibold leading-[18px]">
              {`(${soon})`}
            </p>
          ) : (
            ""
          )}
        </div>
        <p className="text-[#667085] text-[16px] font-normal leading-[24px]">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
