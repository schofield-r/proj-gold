exports.formatDates = list => {
  return list.map(singleObj => {
    const newObj = { ...singleObj };
    const newDate = new Date(newObj.date_posted);
    newObj.date_posted = newDate;
    return newObj;
  });
};
