export function getWeeksBetweenDates(startDate, endDate) {
    // Function to get the UTC week number of a date
    function getUTCWeekNumber(date) {
      const d = new Date(date);
      d.setUTCHours(0, 0, 0, 0);
      d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
      return weekNumber;
    }

    const weeks = [];
    const currentDate = new Date(startDate);
  
    while (currentDate <= endDate) {
      // Get the UTC week number for the current date
      const weekNumber = getUTCWeekNumber(currentDate);
  
      // Add the week number to the array if it's not already included
      if (!weeks.includes(weekNumber)) {
        weeks.push(weekNumber);
      }
  
      // Move to the next day
      currentDate.setUTCDate(currentDate.getUTCDate() + 1);
    }
    return weeks;
  }

// module.export(getWeek)