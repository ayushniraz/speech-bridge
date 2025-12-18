const Recorder = ({
  isRecording,
  startRecording,
  stopRecording,
  formatTime,
  seconds,
}: any) => {
  return (
    <>
      <div className="rounded-xl border-2 border-black bg-white p-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-lg border-2 border-black px-3 py-1.5 font-mono text-sm">
              {isRecording && (
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              )}
              {formatTime(seconds)}
            </div>

            <p className="text-sm font-medium text-gray-700">
              {isRecording ? "Recording..." : "Idle"}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={startRecording}
              disabled={isRecording}
              className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
            >
              Record 🎙️
            </button>

            <button
              onClick={stopRecording}
              disabled={!isRecording}
              className="rounded-lg border-2 border-black px-4 py-2 text-sm font-semibold disabled:opacity-40"
            >
              Stop ⏹️
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recorder;
