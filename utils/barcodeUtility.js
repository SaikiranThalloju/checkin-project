

export const generateBarcode = (name, email, password) => {
  const nameDigits = (name || '').slice(0, 2).toUpperCase();
  const emailDigits = (email || '').slice(0, 2).toUpperCase();
  const passwordDigits = (password || '').slice(0, 2).toUpperCase();
  return `${nameDigits}${emailDigits}${passwordDigits}`;
};


  