const HOST = "https://contacts-api-learn.herokuapp.com/api/contacts";

export const request = async (method = 'GET', body = null) => {
  const info = await fetch(HOST, {
    method,
    body,
  });

  return await info.json();
};