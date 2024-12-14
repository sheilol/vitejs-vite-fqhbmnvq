import React, { useState } from 'react';

const EventModal = ({ selectedDay, addEvent, onClose }) => {
  const [eventName, setEventName] = useState('');

  const handleAddEvent = () => {
    if (eventName) {
      addEvent({ name: eventName, day: selectedDay });
      setEventName('');
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-lg font-bold mb-2">
          Add Event for Day {selectedDay}
        </h2>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <button
          onClick={handleAddEvent}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          Add Event
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EventModal;
