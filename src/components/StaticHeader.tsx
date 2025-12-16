const StaticHeader = () => {
    return <>
     <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
                <div className="mr-1 h-2 w-2 rounded-full bg-red-500"></div>
                <p className="text-sm">
                  Please allow browser permission for audio when prompted.
                </p>
              </div>
              <p className="text-sm text-gray-500 sm:text-xl">
              </p>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl md:mb-8">
                Speech Bridge...
              </h1>
              <p className="text-sm text-gray-500 sm:text-xl">
                Transcribe spoken audio in real time and instantly translate it
                into multiple languages — all directly in your browser, with no
                data sent to a server.
              </p>

              
    </>
}


export default StaticHeader;