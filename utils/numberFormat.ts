export const formatNumber = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(amount);
};

export const formatCurrency = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EGP",
  }).format(amount);
};
