export const formatPrice = (value: number) => {
  if (value >= 10000000) {
    const cr = (value / 10000000).toFixed(1).replace(/\.0$/, "");
    return `r${cr}Cr`;
  }
  if (value >= 100000) {
    const l = (value / 100000).toFixed(1).replace(/\.0$/, "");
    return `r${l}L`;
  }
  return `r${value.toLocaleString()}`;
};
