export const formatNumber = (number) => {
  return number.toLocaleString("nl-BE", { minimumFractionDigits: 2 });
}