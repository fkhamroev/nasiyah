import { useTranslation } from "react-i18next";
import avatar1 from "../../assets/banner/ava1.svg";
import avatar2 from "../../assets/banner/ava2.svg";
import avatar3 from "../../assets/banner/ava3.svg";
import avatar4 from "../../assets/banner/ava4.svg";


export const useInfoCards = () => {
  const { t } = useTranslation();

  return [
    {
      image: avatar1,
      title: t(`infoCards.card1.title`),
      subtitle: t(`infoCards.card1.subtitle`),
    },
    {
      image: avatar2,
      title: t(`infoCards.card2.title`),
      subtitle: t(`infoCards.card2.subtitle`),
    },
    {
      image: avatar3,
      title: t(`infoCards.card3.title`),
      subtitle: t(`infoCards.card3.subtitle`),
      opacity: "opacity-75",
    },
    {
      image: avatar4,
      title: t(`infoCards.card4.title`),
      subtitle: t(`infoCards.card4.subtitle`),
      opacity: "opacity-50",
    },
  ];
};
