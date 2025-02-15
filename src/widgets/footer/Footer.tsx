import { useTranslation } from "react-i18next";
import logo from "../../assets/logo/logo.svg";
import { NavLink } from "react-router-dom";
import app_store from "../../assets/footer/app_store.svg";
import google_play from "../../assets/footer/google_play.svg";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-[48px] md:py-[64px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="w-full md:w-auto">
          <NavLink
            className={"flex items-center gap-[7px] mb-[24px] md:mb-[32px]"}
            to="/"
          >
            <img src={logo} alt="" className="w-[32px] object-cover h-[32px]" />
            <div className="text-[#101828] font-inter text-[17.067px] font-extrabold leading-[21.333px] tracking-[-0.341px]">
              NASIYAH
            </div>
          </NavLink>
          <div className="text-[#475467] text-[16px] leading-[24px] mb-[32px] md:mb-0">
            {t(`footer.${"text"}`)}
          </div>
          <div className="flex  md:flex-row gap-[32px] mt-[32px]">
            {["main", "features", "download", "pricing"].map((key) => (
              <NavLink
                key={key}
                className={({ isActive }) =>
                  `font-semibold text-[16px] leading-[24px] ${
                    isActive ? "text-[#101828]" : "text-[#475467]"
                  } hover:text-[#101828] hover:scale-105 transform transition-all duration-300`
                }
                to={`/${key}`}
              >
                {t(`nav.${key}`)}
              </NavLink>
            ))}
          </div>
        </div>
        
        <div className="flex flex-col gap-[16px] mt-[32px] md:mt-0">
          <div className="text-[#6941C6] text-[16px] font-medium leading-[24px]">
            {t("footer.upload")}
          </div>
          <div className="flex flex-row md:flex-col gap-[16px]">
            <NavLink to={"/download"}>
              <img src={app_store} alt="" className="h-[40px] md:h-auto" />
            </NavLink>
            <NavLink to={"/download"}>
              <img src={google_play} alt="" className="h-[40px] md:h-auto" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
