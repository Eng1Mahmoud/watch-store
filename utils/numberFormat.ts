// format number
export const formatNumber = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
    style: "decimal",
  }).format(amount);
};

// format currency
export const formatCurrency = (amount: number, locale: string) => {
  return new Intl.NumberFormat(locale === "ar" ? "ar-EG" : "en-US", {
    style: "currency",
    currency: locale === "ar" ? "EGP" : "USD",
  }).format(amount);
};
// date format
export const formatDate = (date: string, locale: string) => {
  return new Intl.DateTimeFormat(locale === "ar" ? "ar-EG" : "en-US", {
    dateStyle: "full",
  }).format(new Date(date));
};
