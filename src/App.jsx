import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import { Button } from './components/ui/button'; // Correct path

import './index.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (index) => {
    const newEvents = [...events];
    newEvents.splice(index, 1);
    setEvents(newEvents);
  };

  return (
    <div className="app">
      <h1 className="text-center text-2xl font-bold mt-4">Event Calendar</h1>
      <CalendarGrid
        events={events}
        setSelectedDay={setSelectedDay}
        setShowModal={setShowModal}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Shadcn UI Button Test</h1>
        <Button onClick={() => alert('Shadcn Button Clicked!')}>
          Click Me
        </Button>
      </div>
      {showModal && (
        <EventModal
          selectedDay={selectedDay}
          addEvent={addEvent}
          onClose={() => setShowModal(false)}
        />
      )}
      <EventList events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
