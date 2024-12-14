import React from 'react';

const EventList = ({ events, deleteEvent }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Events</h2>
      {events.length > 0 ? (
        <ul>
          {events.map((event, index) => (
            <li key={index} className="flex justify-between p-2 border-b">
              <span>{event.name}</span>
              <button
                onClick={() => deleteEvent(index)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default EventList;
