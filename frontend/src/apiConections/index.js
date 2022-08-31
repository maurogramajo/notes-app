const url = 'http://localhost:3001/core/notes';

export const sendGetNote = async () => {
  console.info('GETTING...');
  const data = await fetch(url, { method: 'GET' }).then((res) => res.json());
  return data;
};

export const sendPutNote = async (payload) => {
  console.info('CREATING...', payload);
  const data = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  return data;
};

export const sendPatchNote = async (payload) => {
  console.info('UPDATING...', payload);
  const data = await fetch(url, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then((res) => res.json());
  return data;
};
