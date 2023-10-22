import moment from "moment/moment";

export const convertDateToMonthAndYear = (dateString) => {
  const date = moment(dateString);
  return date.format("MM/YYYY");
};
