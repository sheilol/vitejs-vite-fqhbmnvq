import React from 'react';

const Dialog = ({ open, onClose, children }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 shadow-lg">
        {children}
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-gray-300 text-sm rounded hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export { Dialog };
