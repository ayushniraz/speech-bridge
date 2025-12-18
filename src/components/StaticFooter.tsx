const StaticFooter = () => {
  return (
    <>
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
          <p>Transcribe</p>
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
          <p>Translate</p>
        </a>
      </div>

      <a
        href="javascript:void(0);"
        className="mt-6 flex items-ceter justify-cener gap-2 text-sm font-semibold tracking-wide  hover:text-black transition"
      >
        <span>Crafted with ❤️</span>
        <span className="opacity-60">|</span>
        <span className="hover:underline">GitHub</span>
        <span className="opacity-60">|</span>
        <span className="hover:underline">Email</span>
      </a>
    </>
  );
};

export default StaticFooter;
