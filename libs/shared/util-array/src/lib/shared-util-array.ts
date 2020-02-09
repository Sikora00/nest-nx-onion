export const addOrReplace = <T = any>(
  array: T[],
  item: T,
  identifier = 'id'
): T[] => {
  const newArray = [...array];
  const i = array.findIndex(_item => _item[identifier] === item[identifier]);
  if (i > -1) newArray[i] = item;
  else newArray.push(item);
  return newArray;
};
