
import React from 'react';

interface Props {
  onBack: () => void;
}

const ChatSession: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="fixed inset-0 lg:left-[300px] flex flex-col bg-background-light z-30">
      <header className="bg-white border-b px-3 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center flex-1 min-w-0 mr-2">
          <button onClick={onBack} className="mr-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
            <span className="material-icons text-2xl">arrow_back</span>
          </button>
          <div className="flex-1 min-w-0">
            <h1 className="text-base font-bold truncate">Individual Name</h1>
            <div className="flex items-center text-xs text-gray-500 mt-0.5 space-x-2">
              <span className="flex items-center">
                <span className="material-icons text-[14px] mr-0.5">location_on</span> New Delhi
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <button className="p-2 text-primary hover:bg-gray-100 rounded-full">
            <span className="material-icons text-2xl">call</span>
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <span className="material-icons text-2xl">more_vert</span>
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
        <div className="flex justify-center">
          <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">Yesterday</span>
        </div>

        <div className="flex flex-col items-start">
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[80%]">
            <p className="text-sm">Hello, is this item still available?</p>
          </div>
          <span className="text-[10px] text-gray-400 mt-1 pl-1">10:30 AM</span>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-blue-100 p-3 rounded-2xl rounded-tr-none shadow-sm max-w-[80%]">
            <p className="text-sm">Yes sir, we have 5 units in stock ready for dispatch.</p>
          </div>
          <span className="text-[10px] text-gray-400 mt-1 pr-1">10:32 AM</span>
        </div>
      </main>

      <footer className="bg-white border-t p-3 flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <button className="p-2 text-gray-500">
            <span className="material-icons transform rotate-45">attach_file</span>
          </button>
          <div className="flex-1 bg-gray-100 rounded-3xl flex items-center px-4 py-2">
            <input type="text" placeholder="Type a message..." className="w-full bg-transparent border-none focus:ring-0 text-sm" />
            <button className="p-1 text-gray-500">
              <span className="material-icons-outlined">camera_alt</span>
            </button>
          </div>
          <button className="p-3 bg-primary text-white rounded-full shadow-lg">
            <span className="material-icons text-[20px]">send</span>
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatSession;
