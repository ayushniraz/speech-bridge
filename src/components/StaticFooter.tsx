const StaticFooter = () => {
    return <>
    <a
                href="javascript:void(0);"
                className="mb-6 flex items-center gap-2.5 text-center text-sm font-bold uppercase md:mb-10 md:mb-12"
              >
                <p>Terms & Conditions</p>
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
                  <p>Github</p>
                </a>
              </div>
    </>
}


export default StaticFooter;