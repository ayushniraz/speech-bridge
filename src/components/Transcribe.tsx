import { useEffect } from "react";
import { useNavigate } from "react-router";


const Transcribe = ({ recordedUrl }: any) => {
    const navigate = useNavigate();
    useEffect(() => {
      
        if(!recordedUrl) {
            navigate("/");
        }
    
     
    }, [])
    
  return (
    <>
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
    </>
  );
};

export default Transcribe;
