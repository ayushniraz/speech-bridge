import { useEffect, useRef, useState } from "react";
import StaticFooter from "./StaticFooter";
import StaticHeader from "./StaticHeader";

const Header = () => {
  const [recordedUrl, setRecordedUrl] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStream.current = stream;

      mediaRecorder.current = new MediaRecorder(stream);
      chunks.current = [];

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      mediaRecorder.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "audio/webm" });
        const url = URL.createObjectURL(blob);
        setRecordedUrl(url);
      };

      mediaRecorder.current.start();
      setIsRecording(true);
      setSeconds(0);

      timerRef.current = window.setInterval(() => {
        setSeconds((s) => s + 1);
      }, 1000);
    } catch (err) {
      console.error("Mic error:", err);
    }
  };

  const stopRecording = () => {
    mediaRecorder.current?.stop();
    mediaStream.current?.getTracks().forEach((t) => t.stop());

    if (timerRef.current) clearInterval(timerRef.current);
    setIsRecording(false);
  };

  // Cleanup blob URL
  useEffect(() => {
    return () => {
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
  }, [recordedUrl]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <StaticHeader />

            <div className="h-px w-full bg-black" />

            {/* Recorder Card */}
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

            {/* Audio Player */}
            {recordedUrl && (
              <div className="animate-fade-in rounded-xl border-2 border-black bg-white p-4">
                <p className="mb-2 text-sm font-semibold text-gray-800">
                  🎧 Recorded Audio
                </p>

                <audio controls src={recordedUrl} className="w-full" />

                <div className="mt-3 flex justify-between text-xs text-gray-500">
                  <span>Ready to play</span>
                  <a
                    href={recordedUrl}
                    download="recording.webm"
                    className="font-medium text-black underline"
                  >
                    Download
                  </a>
                </div>
              </div>
            )}

            <StaticFooter />
          </div>

          <img
            className="h-[420px] w-full rounded-xl object-cover"
            src="https://images.pexels.com/photos/34285778/pexels-photo-34285778.jpeg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
