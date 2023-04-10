export const getSunTime = (sunrise, sunset, currentDate) => {
  const hourSunRise = new Date(sunrise * 1000).getHours();
  const hourSunSet = new Date(sunset * 1000).getHours();
  const currentHour = currentDate.getHours();

  if (currentHour >= hourSunRise && currentHour <= hourSunRise + 1)
    return 'sunrise';
  if (currentHour > hourSunRise && currentHour < hourSunSet) return 'day';
  if (currentHour === hourSunSet) return 'sunset';
  return 'night';
};
