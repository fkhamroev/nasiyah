import { useTranslation } from "react-i18next";
import card1 from "../../assets/main/card1.svg";
import card2 from "../../assets/main/card2.svg";
import card3 from "../../assets/main/card3.svg";
import card4 from "../../assets/main/card4.svg";
import card5 from "../../assets/main/card5.svg";
import card6 from "../../assets/main/card6.svg";

export const useFeatures = () => {
  const { t } = useTranslation();
  
  return [
    {
      svg: card1,
      title: t(`featuresCards.card1.title`),
      subtitle: t(`featuresCards.card1.subtitle`),
    },
    {
      svg: card2,
      title: t(`featuresCards.card2.title`),
      subtitle: t(`featuresCards.card2.subtitle`),
    },
    {
      svg: card3,
      title: t(`featuresCards.card3.title`),
      subtitle: t(`featuresCards.card3.subtitle`),
    },
    {
      svg: card4,
      title: t(`featuresCards.card4.title`),
      subtitle: t(`featuresCards.card4.subtitle`),
    },
    {
      svg: card5,
      title: t(`featuresCards.card5.title`),
      subtitle: t(`featuresCards.card5.subtitle`),
      soon: t(`featuresCards.card5.soon`),
    },
    {
      svg: card6,
      title: t(`featuresCards.card6.title`),
      subtitle: t(`featuresCards.card6.subtitle`),
      soon: t(`featuresCards.card6.soon`),
    },
  ];
};