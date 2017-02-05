const MONTHS = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "September",
  "10": "October",
  "11": "November",
  "12": "December"
};

export const formatDate = (time) => {
  time = time.split("-");
  const year = time[0];
  const month = MONTHS[time[1]];
  const day = time[2].slice(0,2);

  return month + " " + day + ", " + year;
};
