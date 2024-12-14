import React from 'react';

const CalendarGrid = ({ events, setSelectedDay, setShowModal }) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-7 gap-2 p-4">
      {days.map((day) => (
        <div
          key={day}
          className="border p-4 text-center cursor-pointer hover:bg-gray-200"
          onClick={() => {
            setSelectedDay(day);
            setShowModal(true);
          }}
        >
          {day}
        </div>
      ))}
    </div>
  );
};

export default CalendarGrid;
