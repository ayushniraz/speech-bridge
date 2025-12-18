import { useEffect, useRef, useState } from "react";

import StaticFooter from "./StaticFooter";
import StaticHeader from "./StaticHeader";
import Transcribe from "./Transcribe";
import Recorder from "./Recorder";
import { Route, Routes, useNavigate } from "react-router";

const Header = () => {
  const [recordedUrl, setRecordedUrl] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const mediaStream = useRef<MediaStream | null>(null);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const chunks = useRef<Blob[]>([]);
  const timerRef = useRef<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (recordedUrl) {
      navigate("/transcribe");
    }
  }, [recordedUrl]);

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

  useEffect(() => {
    return () => {
      if (recordedUrl) URL.revokeObjectURL(recordedUrl);
    };
  }, [recordedUrl]);

  const formatTime = (s: number) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(
      2,
      "0"
    )}`;

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="flex flex-col gap-6">
            <StaticHeader />

            <div className="h-px w-full bg-black" />

            <Routes>
              <Route
                path="/"
                element={
                  <Recorder
                    isRecording={isRecording}
                    startRecording={startRecording}
                    stopRecording={stopRecording}
                    formatTime={formatTime}
                    seconds={seconds}
                  />
                }
              />
              <Route
                path="/transcribe"
                element={<Transcribe recordedUrl={recordedUrl} />}
              />
            </Routes>

            <StaticFooter />
          </div>

          <img
            className="h-96 w-full rounded-xl object-cover"
            src="/sideimg.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
