import React, { useState } from 'react';
import './style.css'; 

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
    },
    {
      question: "How much does Netflix cost?",
      answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Kshs1800 to Kshs2500 a month. No extra costs, no contracts."
    },
    {
      question: "Where can I watch?",
      answer: "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players, and game consoles. You can also download your favorite shows with the iOS, Android, or Windows 10 app."
    },
    {
      question: "How do I cancel?",
      answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
      question: "What can I watch on Netflix?",
      answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    }
  ];

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Close if it's already open
    } else {
      setActiveIndex(index); // Open the clicked FAQ
    }
  };

  return (
    <section className="faq">
      <div className="inner-container">
        <div className="inner-title">
          <h1>Frequently Asked Questions</h1>
        </div>
        <ul>
          {faqs.map((faq, index) => (
            <li key={index} className={activeIndex === index ? 'show' : ''}>
              <h2 onClick={() => toggleFAQ(index)}>
                {faq.question} 
                <span className="icon">
                  {activeIndex === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                </span>
              </h2>
              {activeIndex === index && (
                <p>{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQ;
