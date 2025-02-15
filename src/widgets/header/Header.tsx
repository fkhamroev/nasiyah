import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UZFlag from "../../assets/logo/uz.svg";
import RUFlag from "../../assets/logo/ru.svg";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { useClickOutside } from "../../shared/hooks/useClickOutside";
import logo from "../../assets/logo/logo.svg";
import { motion, AnimatePresence } from "framer-motion";
import app_store from "../../assets/footer/app_store.svg";
import google_play from "../../assets/footer/google_play.svg";

const Header = () => {
  const mobileMenuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  const { t, i18n } = useTranslation();
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(dropdownRef, () => {
    if (isLangOpen) setIsLangOpen(false);
  });

  useClickOutside(mobileMenuRef, () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  });

  const changeLanguage = (lng: string) => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
      localStorage.setItem("i18nextLng", lng);
      setIsLangOpen(false);
    }
  };

  const languages = {
    uz: { flag: UZFlag, label: "UZB" },
    ru: { flag: RUFlag, label: "RUS" },
  };

  const currentLang = i18n.language as keyof typeof languages;
  const navItems = ["main", "features", "download", "pricing"];

  return (
    <nav className="container mx-auto my-[18px]">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between mx-[32px] py-[10px]">
        <div className="flex items-center gap-[32px]">
          {navItems.map((key) => (
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
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-[#FFFFFF] rounded-[8px] border border-[#D0D5DD] hover:border-[#101828] hover:shadow-[0_0_10px_rgba(16,24,40,0.1)] transition-all duration-300 shadow-[0_1px_2px_rgba(16,24,40,0.05)]"
          >
            <img
              src={languages[currentLang].flag}
              alt={currentLang}
              className="w-[20px] h-[20px] object-cover rounded-full"
            />
            <span className="font-medium">{languages[currentLang].label}</span>
            {isLangOpen ? (
              <ChevronUp className="w-4 h-4" color="#667085" />
            ) : (
              <ChevronDown className="w-4 h-4" color="#667085" />
            )}
          </button>

          {isLangOpen && (
            <div className="absolute right-0 mt-2 bg-[#FFFFFF] rounded-lg border border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
              {Object.entries(languages).map(([code, { flag, label }]) => (
                <button
                  key={code}
                  onClick={() => changeLanguage(code)}
                  className={`flex items-center gap-2 cursor-pointer w-full px-4 py-2 hover:bg-gray-50 ${
                    code === currentLang ? "bg-gray-50" : ""
                  }`}
                >
                  <img
                    src={flag}
                    alt={code}
                    className="w-[20px] h-[20px] object-cover rounded-full"
                  />
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between mx-[16px] py-[10px]">
        <NavLink to="/" className="flex items-center gap-[7px]">
          <img src={logo} alt="logo" className="w-[32px] h-[32px]" />
          <span className="text-[#101828] font-inter text-[17.067px] font-extrabold leading-[21.333px]">
            NASIYAH
          </span>
        </NavLink>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
        >
          <Menu className="w-6 h-6" color="#101828" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 bg-white z-50 p-6 flex flex-col"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img
                  src={logo}
                  alt=""
                  className="w-[32px] object-cover h-[32px]"
                />
                <div className="text-[#101828] font-inter text-[17.067px] font-extrabold leading-[21.333px] tracking-[-0.341px] w-[320px]">
                  NASIYAH
                </div>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
              >
                <X className="w-6 h-6" color="#101828" />
              </button>
            </div>
            <div className="text-[#98A2B3] text-[16px] font-medium leading-[24px] mb-[8px]">
              Menu
            </div>
            <ul className="flex flex-col justify-center items-start gap-[24px]">
              {navItems.map((key) => (
                <li key={key}>
                  <NavLink
                    className={({ isActive }) =>
                      `font-inter text-[30px] font-semibold leading-[38px] ${
                        isActive ? "text-[#101828]" : "text-[#101828]"
                      } hover:text-[#101828] transition-all duration-300`
                    }
                    to={`/${key}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t(`nav.${key}`)}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-[#FFFFFF] rounded-[8px] border border-[#D0D5DD] hover:border-[#101828] hover:shadow-[0_0_10px_rgba(16,24,40,0.1)] transition-all duration-300 shadow-[0_1px_2px_rgba(16,24,40,0.05)] w-full"
                >
                  <img
                    src={languages[currentLang].flag}
                    alt={currentLang}
                    className="w-[20px] h-[20px] object-cover rounded-full"
                  />
                  <span className="font-medium">
                    {languages[currentLang].label}
                  </span>
                  {isLangOpen ? (
                    <ChevronUp className="w-4 h-4 ml-auto" color="#667085" />
                  ) : (
                    <ChevronDown className="w-4 h-4 ml-auto" color="#667085" />
                  )}
                </button>

                {isLangOpen && (
                  <div className="absolute left-0 right-0 mt-2 bg-[#FFFFFF] rounded-lg border border-[#D0D5DD] shadow-[0_1px_2px_rgba(16,24,40,0.05)]">
                    {Object.entries(languages).map(
                      ([code, { flag, label }]) => (
                        <button
                          key={code}
                          onClick={() => {
                            changeLanguage(code);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`flex items-center gap-2 cursor-pointer w-full px-4 py-2 hover:bg-gray-50 ${
                            code === currentLang ? "bg-gray-50" : ""
                          }`}
                        >
                          <img
                            src={flag}
                            alt={code}
                            className="w-[20px] h-[20px] object-cover rounded-full"
                          />
                          <span className="font-medium">{label}</span>
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[16px] mt-[24px]">
              <div className="text-[#6941C6] text-[16px] font-medium leading-[24px]">
                {t("footer.upload")}
              </div>
              <NavLink to={"/download"}>
                <img src={app_store} alt="" />
              </NavLink>
              <NavLink to={"/download"}>
                <img src={google_play} alt="" />
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
