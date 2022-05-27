export const investmentListServices = (type: 'stock' | 'crypto' | 'commodities') => {

  return fetch(`${process.env.REACT_APP_BACKEND_SERVER}${type}-list/`)
    .then((res) => res.json());
};

export const stockListServices = () => {

  return fetch(`${process.env.REACT_APP_BACKEND_SERVER}stock-list/`)
    .then((res) => res.json());
};