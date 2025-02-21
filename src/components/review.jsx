import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
`;

const Heading = styled.h1`
  font-size: 3em;
  text-align: center;
  margin-bottom: 20px;
  color: #febb12;
  margin-top: 7px;
`;

const ReviewWrapper = styled.div`
  overflow: hidden;
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(37, 37, 37, 255);
  border-radius: 10px;
  padding: 20px;
`;

const ReviewContainer = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
`;

const CardContainer = styled.div`
  flex: 0 0 25%;
  max-width: 25%;
  height: 300px;
  background-color: #444;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 20px;
  font-size: 16px;
  color: #febb12;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: rgba(37, 37, 37, 255);
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    margin: 10px 0;
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const CardName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const CardReview = styled.div`
  text-align: center;
  font-size: 14px;
  color: #ccc;
`;

const Card = ({ name, review, imageSrc, onMouseEnter, onMouseLeave }) => {
  return (
    <CardContainer 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave}
      aria-labelledby={`card-name-${name}`} 
      aria-describedby={`card-review-${name}`}
    >
      <CardImage 
        src={imageSrc} 
        alt={`Review from ${name}`} 
      />
      <CardName id={`card-name-${name}`}>{name}</CardName>
      <CardReview id={`card-review-${name}`}>{review}</CardReview>
    </CardContainer>
  );
};

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const reviewContainerRef = useRef(null);

  const cards = [
    { name: 'Manav Ranjan', review: '"Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain."', imageSrc: './images/Student1.jpg' },
    { name: 'Shahwaz Alam', review: '"I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended!"', imageSrc: './images/student3.jpg' },
    { name: 'Vaihavb', review: 'Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.', imageSrc: './images/Student4.jpg' },
    { name: 'Tripti Sharma', review: 'I am thankful to have found Prem on Instagram, conducting live market classes from Bihar. Stock Archery real-time sessions are insightful and interactive, offering a thorough understanding of market dynamics.', imageSrc: './images/student5.png' },
    { name: 'Deepak Kumar', review: 'Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha', imageSrc: './images/student6.png' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (reviewContainerRef.current) {
        const isMobile = window.innerWidth <= 768;
        const cardWidth = isMobile ? reviewContainerRef.current.clientWidth : reviewContainerRef.current.clientWidth / 4;
        reviewContainerRef.current.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  useEffect(() => {
    let interval;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 4000);
    }

    return () => clearInterval(interval);
  }, [isPaused, cards.length]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  // Function to handle mouse scroll
  const handleWheel = (event) => {
    if (reviewContainerRef.current) {
      const isMobile = window.innerWidth <= 768;
      const cardWidth = isMobile ? reviewContainerRef.current.clientWidth : reviewContainerRef.current.clientWidth / 4;
      const delta = event.deltaY > 0 ? 1 : -1;
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + delta + cards.length) % cards.length;
        reviewContainerRef.current.style.transform = `translateX(-${newIndex * cardWidth}px)`;
        return newIndex;
      });
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (reviewContainerRef.current) {
      reviewContainerRef.current.addEventListener('wheel', handleWheel);
    }
    return () => {
      if (reviewContainerRef.current) {
        reviewContainerRef.current.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <PageContainer>
      <Heading>Testimonials</Heading>
      <ReviewWrapper>
        <ReviewContainer ref={reviewContainerRef}>
          {cards.map((card, index) => (
            <Card
              key={index}
              {...card}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </ReviewContainer>
      </ReviewWrapper>
    </PageContainer>
  );
};

export default Review;
