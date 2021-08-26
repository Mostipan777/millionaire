export const formatedValue = (value: number) => {
  const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${newValue}`;
};