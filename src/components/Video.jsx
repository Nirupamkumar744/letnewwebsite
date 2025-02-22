import React, { useRef, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: rgba(37, 37, 37, 1);
  color: #febb12;
  padding: 20px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const VideoWrapper = styled.div`
  flex: 1;
  background-color: #333;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;

  video {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 0;
  margin: 0;

  h2 {
    font-size: 4rem;
    color: #fff;
    margin: 0;
    padding: 0;

    span {
      color: #febb12;
    }
  }

  p {
    font-size: 2rem;
    text-align: justify;
    color: #fdd788;
    margin: 40px 0 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Video = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      video.muted = true; // Ensure autoplay works
      video.preload = "auto"; // Preload the video

      const playVideo = () => {
        video.play()
          .then(() => {
            setTimeout(() => {
              video.muted = false;
              video.volume = 0.1;
            }, 1000);
          })
          .catch((error) => {
            console.error("Autoplay failed:", error);
          });
      };

      if (video.readyState >= 3) {
        playVideo();
      } else {
        video.addEventListener("canplaythrough", playVideo, { once: true });
      }

      // Ensure looping works correctly
      video.addEventListener("ended", () => {
        video.currentTime = 0;
        video.play();
      });

      return () => {
        video.removeEventListener("canplaythrough", playVideo);
        video.removeEventListener("ended", () => {});
      };
    }
  }, []);

  return (
    <Container>
      <VideoWrapper>
        <video ref={videoRef} autoPlay loop playsInline preload="auto">
          <source src="/pro.mp4" type="video/mp4" />
          <source src="/pro.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </VideoWrapper>
      <TextContent>
        <h2>
          Bihar's <span>First</span> Trading <span>Floor</span>
        </h2>
        <p>
          Experience Bihar’s premier stock market institute where education meets action. 
          Our live trading classes allow students to learn and trade simultaneously in a real 
          market setting. Gain hands-on experience, guided by expert mentors, and master 
          strategies that work. Join us and elevate your trading skills with real-time practice.
        </p>
      </TextContent>
    </Container>
  );
};

export default Video;
