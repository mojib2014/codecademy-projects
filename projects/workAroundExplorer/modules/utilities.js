export const formatNumber = (num) => {
  let numStr = String(Math.floor(num));

  for (let i = numStr.length - 3; i > 0; i -= 3)
    numStr = numStr.slice(0, i) + "," + numStr.slice(i);

  return numStr;
};
