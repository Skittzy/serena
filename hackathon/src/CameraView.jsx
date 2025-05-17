import React, { useEffect, useRef } from "react";
import "./CameraView.css";

export default function CameraView({ onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        alert("Camera access denied or unavailable: " + err.message);
      }
    };

    startCamera();

    // Stop camera on unmount
    return () => {
      const stream = videoRef.current?.srcObject;
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-overlay">
      <button className="camera-close-btn" onClick={onClose}>←</button>
      <video ref={videoRef} autoPlay playsInline className="camera-view" />
    </div>
  );
}
