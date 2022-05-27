import { removeNulls } from 'helpers/object.helpers';

export const newsServices = () => {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER}news`)
    .then((res) => res.json())
    .then((res) => removeNulls(res));
};