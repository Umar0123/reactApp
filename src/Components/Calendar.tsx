import React from 'react';
import { Calendar, defaultCalendarStrings } from '@fluentui/react';

export const CalendarComponent: React.FunctionComponent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>();

  const onSelectDate = React.useCallback((date: Date, dateRangeArray?: Date[]): void => {
    setSelectedDate(date);
  }, []);  

  return (
    <div style={{ height: '360px' }}>
      <div>Selected date: {selectedDate?.toLocaleString() || 'Not set'}</div>

      <Calendar
        showWeekNumbers
        showGoToToday
        onSelectDate={onSelectDate}
        value={selectedDate}
        strings={defaultCalendarStrings}
      />
    </div>
  );
};
