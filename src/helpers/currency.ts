

export const parseCurrency = (value: number, currency = 'MXN'): string => {
  const currencyOptions = { style: 'currency', currency };
  const parse = new Intl.NumberFormat('es', currencyOptions).format(value);

  return parse;
};