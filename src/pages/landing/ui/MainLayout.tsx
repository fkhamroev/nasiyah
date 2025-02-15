import { useState, useEffect } from "react";
import Header from "../../../widgets/header/Header";
import logo from "../../../assets/logo/logo.svg";
import phone_banner_uz from "../../../assets/banner/phone_banner_uz.svg";
import phone_banner_ru from "../../../assets/banner/phone_banner_ru.svg";
import phone_banner_uz_mobile from "../../../assets/banner/phone_banner_uz_resp.svg";
import phone_banner_ru_mobile from "../../../assets/banner/phone_banner_ru_resp.svg";
import banner_bg from "../../../assets/banner/Background pattern.png";
import PricingList from "../../../widgets/main/PricingList";
import { useTranslation } from "react-i18next";
import feature_phone_uz from "../../../assets/main/feature_phone_uz.svg";
import feature_phone_ru from "../../../assets/main/feature_phone_ru.svg";
import feature_phone_ru_resp from "../../../assets/main/feature_iphone_ru_resp.svg";
import feature_phone_uz_resp from "../../../assets/main/feature_iphone_uz_resp.svg";
import FeatureCard from "../../../widgets/main/FeatureCard";
import { useFeatures } from "../../../shared/model/Features";
import { useInfoCards } from "../../../shared/model/InfoCards";
import InfoComponent from "../../../widgets/general/InfoComponent";
import { NavLink } from "react-router";
import app_store from "../../../assets/main/app_store.svg";
import google_play from "../../../assets/main/google_play.svg";
import banner_iphone_uz from "../../../assets/main/banner_iphone_uz.svg";
import banner_iphone_ru from "../../../assets/main/banner_iphone_ru.svg";
import banner_iphone_uz_resp from "../../../assets/main/banner_iphone_uz_resp.svg";
import banner_iphone_ru_resp from "../../../assets/main/banner_iphone_ru_resp.svg";
import hand_draw from "../../../assets/main/hand_draw.svg";
import Footer from "../../../widgets/footer/Footer";
import insta from "../../../assets/footer/insta.svg";
import telegram from "../../../assets/footer/tg.svg";

const MainLayout = () => {
  const { t, i18n } = useTranslation();
  const features = useFeatures();
  const infoCards = useInfoCards();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getBannerImage = () => {
    switch (i18n.language) {
      case "ru":
        return isMobile ? phone_banner_ru_mobile : phone_banner_ru;
      case "uz":
        return isMobile ? phone_banner_uz_mobile : phone_banner_uz;
      default:
        return isMobile ? phone_banner_uz_mobile : phone_banner_uz;
    }
  };
  const getBannerIphoneImage = () => {
    switch (i18n.language) {
      case "ru":
        return isMobile ? banner_iphone_ru_resp : banner_iphone_ru;
      case "uz":
        return isMobile ? banner_iphone_uz_resp : banner_iphone_uz;
      default:
        return isMobile ? banner_iphone_uz_resp : banner_iphone_uz;
    }
  };
  const getFeaturePhoneImage = () => {
    switch (i18n.language) {
      case "ru":
        return isMobile ? feature_phone_ru_resp : feature_phone_ru;
      case "uz":
        return isMobile ? feature_phone_uz_resp : feature_phone_uz;
      default:
        return isMobile ? feature_phone_uz_resp : feature_phone_uz;
    }
  };
  return (
    <>
      <Header />
      <section
        style={{
          backgroundImage: `url(${banner_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[0px] md:py-[64px]"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="py-[64px] md:py-0">
              <div className="flex items-center gap-[17.78px] ">
                <div className="flex flex-col gap-[24px] md:max-w-[624px]">
                  <div className="hidden md:flex items-center gap-[17.78px]">
                    <img src={logo} alt="logo" />
                    <h1 className="text-[42.67px] font-extrabold leading-[53.33px] text-[#101828] tracking-[-2%] align-top">
                      NASIYAH
                    </h1>
                  </div>
                  <h1 className="text-[#101828] text-[36px] md:text-[48px] font-semibold md:font-bold leading-[44px] md:leading-[60px] tracking-[-0.72px] md:tracking-[-0.96px]">
                    {t(`banner.${"title"}`)}
                  </h1>
                  <p className="text-[#475467] text-[18px] md:text-[20px] font-normal leading-[28px] md:leading-[30px]">
                    {t(`banner.${"subtitle"}`)}
                  </p>
                  <button
                    className="group max-w-[303px] w-full flex items-center justify-center gap-[10px] text-[16px] md:text-[18px] font-semibold leading-[24px] md:leading-[28px] cursor-pointer mt-[24px] text-center py-[16px] rounded-[10px] bg-[#28A745] border-[2px] text-white shadow-[inset_0px_0px_0px_1px_rgba(16,24,40,0.18),_inset_0px_-2px_0px_0px_rgba(16,24,40,0.05),_0px_1px_2px_0px_rgba(16,24,40,0.05)] 
  transition-all duration-300 ease-in-out hover:bg-[#24963D]"
                  >
                    {t(`banner.${"banner_btn"}`)}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-all duration-300 ease-in-out group-hover:translate-x-[2px]"
                    >
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={getBannerImage()}
                alt="phone"
                className="md:h-[640px] md:max-w-[560px] md:w-full w-[375px] object-contain"
              />
              <div className="hidden md:flex flex-col gap-[12px] absolute bottom-0 left-[-100px]">
                {infoCards.map((card, index) => (
                  <InfoComponent
                    key={index}
                    image={card.image}
                    title={card.title}
                    subtitle={card.subtitle}
                    opacity={card.opacity}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 my-[96px]">
        <div className="flex flex-col items-start md:items-center md:max-w-[768px] mx-auto">
          <h1 className="font-semibold text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-[#28A745] md:text-center mb-[16px]">
            {t(`main.${"features"}`)}
          </h1>
          <h1 className="font-semibold text-[30px] md:text-[36px] leading-[38px] md:leading-[44px] text-[#101828] md:text-center mb-[36px]">
            {t(`main.${"features_title"}`)}
          </h1>
          <div className="md:text-center text-[18px] md:text-[20px] leading-[28px] md:leading-[30px] text-[#475467] md:align-self-stretch">
            {t(`main.${"features_subtitle"}`)}
          </div>
        </div>
        <div className="block md:grid md:grid-cols-3 gap-[96px] mt-8 md:mx-[32px] mb-[96px]">
          <div className="hidden md:flex md:flex-col gap-8">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard
                key={index}
                svg={feature.svg}
                title={feature.title}
                subtitle={feature.subtitle}
                soon={feature.soon}
              />
            ))}
          </div>
          <div className="hidden md:block">
            <img
              src={getFeaturePhoneImage()}
              alt="feature_phone"
              className="w-full h-auto object-contain "
            />
          </div>
          <div className="hidden md:flex md:flex-col gap-[48px]">
            {features.slice(3, 6).map((feature, index) => (
              <FeatureCard
                key={index}
                svg={feature.svg}
                title={feature.title}
                subtitle={feature.subtitle}
                soon={feature.soon}
              />
            ))}
          </div>
          {/* Mobile layout */}
          <div className="md:hidden flex flex-col gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                svg={feature.svg}
                title={feature.title}
                subtitle={feature.subtitle}
                soon={feature.soon}
              />
            ))}
          </div>
          <div className="md:hidden block mt-8">
            <img
              src={getFeaturePhoneImage()}
              alt="feature_phone"
              className="w-full h-auto pt-[48px]"
            />
          </div>
        </div>
      </section>
      <section className="rounded-3xl bg-[#28A745] shadow-xl container mx-auto px-4 my-[48px] md:my-[96px] md:min-h-[480px] grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-[48px] md:p-[64px] p-[24px]">
          <div>
            <h1 className="text-[#FFFFFF] text-[36px] font-semibold leading-[44px] tracking-[-0.72px] mb-[20px]">
              {t(`main.${"main_banner_title"}`)}
            </h1>
            <div className="text-[#FFFFFF] text-[20px] font-normal leading-[30px]">
              {t(`main.${"main_banner_subtitle"}`)}
            </div>
          </div>
          <div className="flex justify-between md:justify-normal items-center md:gap-[12px]">
            <NavLink to="/app-store">
              <img src={app_store} alt="" />
            </NavLink>
            <NavLink to="/google-play">
              <img src={google_play} alt="" />
            </NavLink>
          </div>
        </div>
        <div className="flex justify-center md:justify-end pt-[20px] md:pt-[40px] md:pr-[63px] relative">
          <img src={getBannerIphoneImage()} alt="" />
          <div className="hidden lg:flex md:hidden flex-col gap-[12px] absolute bottom-[40px] left-[-20px]">
            {infoCards.map((card, index) => (
              <InfoComponent
                key={index}
                image={card.image}
                title={card.title}
                subtitle={card.subtitle}
                opacity={card.opacity}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:py-[96px] py-[64px] border-t border-b border-gray-200">
        <div className="flex flex-col md:flex-row justify-center md:gap-[64px] w-full">
          <div className="w-full md:w-[440px]">
            <div className="text-[#28A745] md:text-[16px] text-[14px] md:leading-[24px] leading-[20px] font-semibold mb-[12px]">
              {t(`main.main_info_subtitle`)}
            </div>
            <h1 className="text-[#101828] md:text-[36px] text-[30px] md:leading-[44px] leading-[38px] font-semibold tracking-[-0.72px] md:mb-[20px] mb-[16px]">
              {t(`main.main_info_title`)}
            </h1>
            <div className="text-[#475467] text-[18px] leading-[28px] font-normal">
              {t(`main.${"main_info_description"}`)}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="relative">
              <PricingList
                price={165}
                rate={t("pricing.pro.rate")}
                pricing_text={t("pricing.pro.payment_text")}
                btn_text={t("pricing.pro.btn_text")}
                btn_link="/pro"
                list={[
                  { text: t("pricing.features.debt_book"), isChecked: true },
                  { text: t("pricing.features.contracts"), isChecked: true },
                  { text: t("pricing.features.payments"), isChecked: true },
                  { text: t("pricing.features.analytics"), isChecked: true },
                  { text: t("pricing.features.dashboard"), isChecked: true },
                ]}
              />
              <div className="absolute md:top-[-40px] top-[-10%] right-[30%] pt-[20px] md:pt-[0] transform translate-x-1/2">
                <div className="text-[#28A745] ml-[60px] text-[14px] font-semibold leading-[20px]">
                  {t(`main.${"hand_draw"}`)}
                </div>
                <img src={hand_draw} alt="" />
              </div>
            </div>
            <PricingList
              price={0}
              rate={t("pricing.free.rate")}
              pricing_text={t("pricing.free.payment_text")}
              btn_text={t("pricing.free.btn_text")}
              btn_link="/free"
              list={[
                { text: t("pricing.features.debt_book"), isChecked: true },
                { text: t("pricing.features.contracts"), isChecked: false },
                { text: t("pricing.features.payments"), isChecked: false },
                { text: t("pricing.features.analytics"), isChecked: false },
                { text: t("pricing.features.dashboard"), isChecked: false },
              ]}
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto px-4 md:py-[64px] py-[48px] flex flex-col items-center border-b border-gray-200">
        <h1 className="text-[#101828] md:text-[30px] text-[24px] md:leading-[38px] leading-[32px] font-semibold md:mb-[16px] mb-[8px] text-center">
          {t(`main.${"main_info_title_2"}`)}
        </h1>
        <p className="text-[#475467] md:text-[20px] text-[16px] md:leading-[30px] leading-[24px] font-normal md:mb-[48px] mb-[32px] text-center">
          {t(`main.${"main_info_description_2"}`)}
        </p>
        <NavLink
          className={
            "rounded-lg text-[#FFFFFF] text-[16px] leading-[24px] font-semibold py-[12px] px-[18px] border-2 border-[rgba(255,255,255,0.12)] bg-[#101828] shadow-[inset_0_0_0_1px_rgba(16,24,40,0.18),inset_0_-2px_0_0_rgba(16,24,40,0.05),0_1px_2px_0_rgba(16,24,40,0.05)] hover:bg-[#1D2939] hover:shadow-[0_0_15px_rgba(16,24,40,0.1)] transform hover:scale-105 transition-all duration-300"
          }
          to="/free"
        >
          {t(`main.${"main_info_btn_2"}`)}
        </NavLink>
      </section>
      <Footer />
      <div className="container mx-auto px-4 pt-[32px] md:pb-[40px] pb-[24px] flex gap-[24px] md:gap-[0] md:justify-between flex-col-reverse md:flex-row md:items-center border-t border-gray-200">
        <div className="text-[#667085] text-[16px] font-normal leading-[24px]">
          {t(`footer.${"footer_copyright"}`)}
        </div>
        <div className="flex gap-[24px] items-center">
          <NavLink
            to={``}
            className="transform hover:scale-110 transition-all duration-300 hover:opacity-80"
          >
            <img src={insta} alt="instagram" />
          </NavLink>
          <NavLink
            to={``}
            className="transform hover:scale-110 transition-all duration-300 hover:opacity-80"
          >
            <img src={telegram} alt="telegram" />
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
