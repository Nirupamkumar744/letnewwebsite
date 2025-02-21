import React, { useState } from "react";
import styled from "styled-components";
import { db } from "./components/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const [formData, setFormData] = useState({
    username: "",
    phonenumber: "",
    message: "",
    tradingExperience: "",
    city: "",
    occupation: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      username: form.username.value,
      phonenumber: form.phonenumber.value,
      message: form.message.value,
      tradingExperience: form.tradingExperience.value,
      city: form.city.value,
      occupation: form.occupation.value,
    };

    try {
      const today = new Date().toISOString().split("T")[0];
      await addDoc(collection(db, today), formData);
      alert("Message sent successfully!");
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error sending message, please try again.");
    }

    form.reset();
  };

  const Wrapper = styled.section`
    padding: 9rem 1rem 5rem 1rem;
    background-color: ${({ theme }) => theme.colors.background};

    @media (min-width: 768px) {
      padding: 9rem 2rem 5rem 2rem;
    }

    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 600px;
        margin: auto;
        padding: 2rem;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 10px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;

        &:hover {
          transform: translateY(-5px);
        }
      }

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        input,
        textarea {
          padding: 1rem;
          border: 1px solid ${({ theme }) => theme.colors.gray};
          border-radius: 5px;
          font-size: 1.2rem;
          width: 100%;
          transition: border-color 0.3s;

          &:focus {
            border-color: ${({ theme }) => theme.colors.yellow};
            outline: none;
          }
        }

        textarea {
          resize: vertical;
          min-height: 150px;
        }

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.3s;
          padding: 1rem;
          background-color: ${({ theme }) => theme.colors.yellow};
          color: #fff;
          border: none;
          font-size: 1.2rem;
          text-align: center;
          margin-top: 1rem;
          border-radius: 5px;

          &:hover {
            background-color: ${({ theme }) => theme.colors.darkYellow};
            transform: scale(1.05);
          }
        }
      }
    }

    iframe {
      border: 0;
    }
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact Us</h2>

      <div className="container">
        <div className="contact-form">
          <form onSubmit={handleSubmit} className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="Name"
              autoComplete="off"
              required
            />

            <input
              type="tel"
              name="phonenumber"
              placeholder="Phone Number"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              placeholder="Your message"
              autoComplete="off"
              required
            ></textarea>

            <input type="text" name="tradingExperience" placeholder="Trading Experience" />
            <input type="text" name="city" placeholder="City" />
            <input type="text" name="occupation" placeholder="Occupation" />

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;