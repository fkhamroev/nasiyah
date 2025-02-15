import { NavLink } from "react-router-dom";
import Check from "../../assets/main/check_circle.svg";
import X from "../../assets/main/x_circle.svg";

type Props = {
  price: number;
  rate: string;
  pricing_text: string;
  btn_text: string;
  btn_link: string;
  list: { text: string; isChecked: boolean }[];
};

const PricingList = ({
  price,
  rate,
  pricing_text,
  btn_text,
  btn_link,
  list,
}: Props) => {
  return (
    <div className="h-full flex flex-col items-center md:max-w-[340px] w-full rounded-2xl border border-[#E4E7EC] bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
      {price > 0 ? (
        <div className="text-[#101828] md:text-[48px] text-[36px] font-semibold leading-[60px] pt-[40px] md:px-[40px] px-[24px] pb-[16px] text-center">
          {price}{" "}
          <span className="text-[24px] font-medium ml-1">000 UZS</span>
        </div>
      ) : (
        <div className="text-[#101828] text-[48px] font-semibold leading-[60px] pt-[40px] px-[40px] pb-[16px] text-center">
          {price} UZS
        </div>
      )}
      <div className="p-[32px] mb-[8px]">
        <h3 className="text-[#101828] text-[20px] font-semibold leading-[30px] mb-1 text-center">
          {rate}
        </h3>
        <div className="text-[#475467] text-[16px] font-normal leading-[24px] text-center">
          {pricing_text}
        </div>
        <ul className="p-[32px] space-y-2">
          {list.map((item, index) => (
            <li key={index} className="flex items-center gap-[12px] ">
              {item.isChecked ? (
                <img src={Check} alt="check_svg" />
              ) : (
                <img src={X} alt="x_svg" />
              )}
              <span className="text-gray-600 text-[16px] leading-[24px]">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
        <NavLink
          className="max-w-[260px] w-full block p-[16px] text-center rounded-lg border-2 border-[rgba(255,255,255,0.12)] bg-[#28A745] shadow-[inset_0_0_0_1px_rgba(16,24,40,0.18),inset_0_-2px_0_0_rgba(16,24,40,0.05),0_1px_2px_0_rgba(16,24,40,0.05)] text-white text-[16px] font-semibold leading-[24px]"
          to={btn_link}
        >
          {btn_text}
        </NavLink>
      </div>
    </div>
  );
};

export default PricingList;
