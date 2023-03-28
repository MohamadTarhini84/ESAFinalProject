import React from 'react';

function Channel() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto px-8 max-w-7xl">
        <div className="flex justify-between items-center py-4 border-b border-gray-800">
          <h1 className="text-white text-3xl font-bold">Counter-Strike 2</h1>
          <div className="flex items-center space-x-4">
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Filters
            </button>
            <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
              Channels
            </button>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 py-4">
          <div className="col-span-3 grid grid-cols-2 gap-4">
            <div className="bg-gray-800 p-4 rounded">
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/fffef111-8289-4969-9f84-d22d7f50e13f-profile_image-70x70.png"
                  alt="Channel Logo"
                />
                <div className="ml-2">
                  <h2 className="text-white text-lg font-bold">Channel Name</h2>
                  <p className="text-gray-400">1234 viewers</p>
                </div>
              </div>
              <img
                className="w-full h-48 object-cover rounded"
                src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%202-188x250.jpg"
                alt="Game thumbnail"
              />
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold mb-2">Stream Title</h3>
                <p className="text-gray-400">Stream Description</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <div className="flex items-center mb-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://static-cdn.jtvnw.net/jtv_user_pictures/fffef111-8289-4969-9f84-d22d7f50e13f-profile_image-70x70.png"
                  alt="Channel Logo"
                />
                <div className="ml-2">
                  <h2 className="text-white text-lg font-bold">Channel Name</h2>
                  <p className="text-gray-400">1234 viewers</p>
                </div>
              </div>
              <img
                className="w-full h-48 object-cover rounded"
                src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike%202-188x250.jpg"
                alt="Game thumbnail"
              />
              <div className="mt-4">
                <h3 className="text-white text-lg font-bold mb-2">Stream Title</h3>
                <p className="text-gray-400">Stream Description</p>
              </div>
            </div>
            {/* Repeat the above section to add more streams */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Channel;