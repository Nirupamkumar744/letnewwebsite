import React from 'react';

// Sample reviews with images
const reviews = [
  {
    name: "Dhiraj Kumar",
    review: "Prem sir ka experience aur energetic class environment se maine live trading mein confidence paya. Standoff strategies bahut helpful hain.",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949623/IMG_1438_1_-fotor-20240910115056_gxllgu.png"
  },
  {
    name: "Shahwaz Alam",
    review: "I learned so much about the stock market from Ankit Sir. His classes are clear and helpful. Highly recommended",
    rating: 4,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1724152416/student3_etfv4z.png"
  },
  {
    name: "Vaibhav",
    review: "Live market mein trading ka experience anokha tha. Ankit sir, Prem sir, aur Prabhas sir ke guidance meinmaine kaafi kuch seekha.",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949620/IMG_1437_1_-fotor-20240910115027_gsn1sa.png"
  },
  
  {
    name: "Prabhat",
    review: "Stock Archery ne mujhe trading ke basics aur advanced dono level pe mahir banaya. Bhagalpur jaise chote sheher mein aisa platform milna sach mein incredible ha",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949632/IMG_1435_1_-fotor-20240910114920_zyw0qu.png"
  },
  {
    name: "Rohan Kumar",
    review: "Stock Archery ke live classes kamaal ki hain! Real-time market ke sath trading seekhne ka maza hi kuch aur hai. Professionals ke sath trade karke bahut kuch naya seekhne ko mila. Bahut helpful aur informative sessions hain. Highly recommended.",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949620/IMG_1436_1_-fotor-20240910114957_i2uawi.png"
  },
  
  {
    name: "Dhiraj Ghosh",
    review: "Real-time trading se confidence badta hai aur strategies ko easily implement karne ka mauka milta hai. Instructors bhi bahut supportive hain. Ideal for trading beginners and experts alike!.",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725949622/fotor-2024091011483_bkic9l.png"
  },
  {
    name: "Abhinish Kumar",
    review: "Real-time trading se self-belief badh jaata hai aur strategies ko aasan se apply karne ka moka milta hai. Instructors bhi kaafi helpful hain. Beginners aur experts dono ke liye yeh perfect platform hai",
    rating: 5,
    image: "https://res.cloudinary.com/dyrn2eg1j/image/upload/v1725950247/fotor-202409101271_l8tdbd.png"
  }
 
];

const StudentReviews = () => {
  return (
    <div className="reviews-container">
      <style>
        {`
          body {
            background-color: rgba(37, 37, 37, 1);
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            color: #fff;
          }

          .reviews-container {
            padding: 20px;
            max-width: 1200px;
            margin: auto;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 3rem;
            color: #fff;
          }

          h1 span {
            color: #febb12;
          }

          .reviews {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .review-card {
            background-color: rgba(37, 37, 37, 1);
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            padding: 20px;
            box-sizing: border-box;
            text-align: center;
          }

          .review-card img {
            border-radius: 50%;
            width: 100px;
            height: 100px;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .review-card h2 {
            margin-top: 0;
            font-size: 2rem;
            color: #febb12;
          }

          .review-card p {
            font-size: 1.5rem;
            color: #FDD788;
          }

          .rating {
            margin-top: 10px;
            font-size: 1.5rem;
            color: #50C878;
          }

          @media (max-width: 1200px) {
            .reviews {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (max-width: 768px) {
            .reviews {
              grid-template-columns: repeat(2, 1fr);
            }

            h1 {
              font-size: 2.5rem;
             
            }
          }

          @media (max-width: 480px) {
            .reviews {
              grid-template-columns: 1fr;
            }

            h1 {
              
              font-size: 2.5rem;
            }
          }
        `}
      </style>
      <h1>Student <span>Reviews</span></h1>
      <div className="reviews">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <img src={review.image} alt={`${review.name}'s profile`} />
            <h2>{review.name}</h2>
            <p>{review.review}</p>
            <div className="rating">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentReviews;