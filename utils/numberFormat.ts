// format number
export const formatNumber = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: "decimal",
  }).format(amount);
};

// format currency
export const formatCurrency = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EGP",
  }).format(amount);
};
// date format
export const formatDate = (date: string, locale: string) => {
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "full",
  }).format(new Date(date));
};
