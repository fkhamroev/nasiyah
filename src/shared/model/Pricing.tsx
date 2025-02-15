import { useTranslation } from "react-i18next";

export const usePricingCards = () => {
  const { t } = useTranslation();

  return [
    {
      price: 165,
      rate: t('pricing.pro.rate'),
      pricing_text: t('pricing.pro.payment_text'),
      btn_text: t('pricing.pro.btn_text'),
      btn_link: '/pro',
      list: [
        { text: t('pricing.features.debt_book'), isChecked: true },
        { text: t('pricing.features.contracts'), isChecked: true },
        { text: t('pricing.features.payments'), isChecked: true },
        { text: t('pricing.features.analytics'), isChecked: true },
        { text: t('pricing.features.dashboard'), isChecked: true },
      ],
    },
    {
      price: 0,
      rate: t('pricing.free.rate'),
      pricing_text: t('pricing.free.payment_text'),
      btn_text: t('pricing.free.btn_text'),
      btn_link: '/free',
      list: [
        { text: t('pricing.features.debt_book'), isChecked: true },
        { text: t('pricing.features.contracts'), isChecked: false },
        { text: t('pricing.features.payments'), isChecked: false },
        { text: t('pricing.features.analytics'), isChecked: false },
        { text: t('pricing.features.dashboard'), isChecked: true },
      ],
    },
  ];
};