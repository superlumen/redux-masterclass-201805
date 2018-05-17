export const INC = "superlumen/counter/INC";

export const inc = () => {
  return {
    type: INC,
    payload: {}
  };
};
