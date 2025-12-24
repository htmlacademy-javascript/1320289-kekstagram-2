const URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const ROUTE = {
  GET: '/data',
  POST: '',
};

const METHODS = {
  GET: 'GET',
  POST: 'POST',
};

const setupRequest = (method, errorMesssage, body = null) =>
  fetch(`${URL}${ROUTE[method]}`, { method, body })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(errorMesssage, error);
    });

const getData = () => setupRequest(METHODS.GET, 'Не удалось загрузить данные');

const sendData = (body) =>
  setupRequest(METHODS.POST, 'Ошибка загрузки файла', body);

export { getData, sendData };
