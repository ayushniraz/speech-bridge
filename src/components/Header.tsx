const Header = () => {
  return (
    <>
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-10 md:px-6 md:py-12">
          <div className="grid gap-12 sm:gap-12 md:grid-cols-2">
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center rounded-md bg-gray-300 px-3 py-1">
                <div className="mr-1 h-2 w-2 rounded-full bg-red-500"></div>
                <p className="text-sm">
                  Please allow browser permission for audio when prompted.
                </p>
              </div>
              <p className="text-sm text-gray-500 sm:text-xl">
                {/* A free, open-source, client-side speech-to-text and translation tool. */}
              </p>
              <h1 className="mb-6 text-4xl font-bold md:text-6xl md:mb-8">
                Speech Bridge...
              </h1>
              <p className="text-sm text-gray-500 sm:text-xl">
                Transcribe spoken audio in real time and instantly translate it
                into multiple languages — all directly in your browser, with no
                data sent to a server.
              </p>
              <div className="mb-8 mt-8 h-px w-full bg-black"></div>
              <div className="mb-6 flex flex-col gap-2 text-sm text-gray-500 sm:text-base md:mb-8">
                <div className=" inset-x-0  mx-auto flex w-28 flex-col items-center rounded-lg border-2 border-black bg-white p-4 sm:justify-between sm:px-8 md:flex-row md:py-3 lg:w-full">
                  <div className="flex items-center">
                    <img
                      src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                      alt=""
                      className="mr-4 inline-block h-8 w-8 rounded-full object-cover"
                    />
                    <p>
                      Recording...
                    </p>
                  </div>

                  <div className="mt-4 flex relative flex-row items-center justify-center gap-10 md:mt-0">
                    <a
                      href="javascript:void(0);"
                      className="flex gap-1.5 rounded-lg bg-black px-5 py-2 font-semibold text-white"
                    >
                      Record{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6 h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <a
                href="javascript:void(0);"
                className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 md:mb-12"
              >
                <p>All Achievements</p>
                <img
                  src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b1465d46adaf3f26099edf_arrow.svg"
                  alt=""
                  className="inline-block"
                />
              </a>
              <div className="flex flex-col gap-4 font-semibold sm:flex-row">
                <a
                  href="javascript:void(0);"
                  className="flex items-center gap-4 rounded-md bg-black px-6 py-3 text-white"
                >
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b147043fe6ab404e65635e_Envelope.svg"
                    alt=""
                    className="inline-block"
                  />
                  <p>Email Me</p>
                </a>
                <a
                  href="javascript:void(0);"
                  className="flex gap-4 rounded-md border border-solid border-black px-6 py-3"
                >
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b14704c8616ad7ba080fe0_Note.svg"
                    alt=""
                    className="inline-block"
                  />
                  <p>Resume</p>
                </a>
              </div>
            </div>
            <div className="min-h-[530px] overflow-hidden rounded-md bg-gray-100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
