export const incrementNumber = (intNumber: number) => ({
  type: 'PLUS',
  payload: intNumber,
});

export const decrementNumber = () => {
  return {
    type: 'MINUS',
  };
};

export const resetNumber = () => {
  return {
    type: 'RESET',
  };
};
