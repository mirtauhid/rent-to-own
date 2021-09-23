import React from 'react'
import Question from './Question';

const data = [
  {
    question: "What’s the catch?",
    answer: "No catch. Selling on your own is simple AND rewarding.",
  },
  {
    question: "Are you a brokerage?",
    answer:
      "No. We’re a full-service real estate marketing platform designed to help you take control, sell privately, and save thousands of unnecessary commission in the process.",
  },
  {
    question: "Is rent-to-own right for me?",
    answer:
      "Absolutely so, as our solutions are matched to your needs. If you’re looking for more control over the sale of your property, are comfortable with web-based tools, and have no problem talking to people, you’ll probably be keen on our standard services. If you prefer taking more of a back-seat approach, depending where you live, we have a range of professional and premium service packages where a local Property Marketing Expert can help you navigate the entire selling process.",
  },
  {
    question: "What are your fees?",
    answer:
      "Our flat-fee services vary by location. Let us know where and what you’ll be selling, and we’ll match you right away with marketing packages and special offers available in your area.",
  },
  {
    question: "Do I have to pay up front?",
    answer:
      "Most of our package options (where available) feature a “List now, pay later” option.",
  },
  {
    question: "Am I on my own?",
    answer:
      "Never. All of our property marketing packages come with varying degrees of expert assistance and live support.",
  },
  {
    question: "Won’t an agent help me sell faster?",
    answer:
      "Not necessarily. Selling isn’t complicated – all you need is a well-described property that is priced in line with your local market, and exposure to buyers. We can help with all this.",
  },
  {
    question: "Will buyer's agents shun me if I sell privately?",
    answer:
      "No. Agents want to find the right home for their clients and if your property fits their needs, they will have a vested interest to bring them by. However, for their assistance in bringing you prospective buyers, they may negotiate a buyer-side commission before doing so. Any fees you agree to pay would be between you and the respective agent.",
  },
  {
    question: "Do I have to take calls?",
    answer:
      "No. You’ll communicate with buyers online while our support team handles telephone inquiries and bookings on your behalf. Whether, or when, you choose to give a buyer your number is entirely up to you.",
  },

  {
    question: "Who shows the house?",
    answer:
      "You know your property best and will most often conduct showings to private buyers on your own schedule. Alternatively, if you take advantage of our lockbox service (where available), buyer’s agents would be able to bring their clients by when you’re not around as well.",
  },

  {
    question: "If there is no franchise rep in my area, what are my options?",
    answer:
      "If full-service is not available in your area, we can still assist you virtually with our standard offering, which provides all the online tools and support you need to sell successfully on your own. Alternatively, if you’re interested in joining the Future of Real Estate®, perhaps you’d like to learn about franchise opportunities near you.",
  },

  {
    question: "How do showings work?",
    answer:
      "You have complete control over when you show the place, Once your availability is set, buyers can request showings directly online or via our support centre. Once a showing is booked, you greet the buyer at the appropriate time, and provide them a VIP tour like nobody else could. If you have a lockbox available, buyer’s agents will be able to show the place on their own as well.",
  },

  {
    question: "What about open houses?",
    answer:
      "From your seller dashboard, you can create an open house event anytime you choose. Once created, the event will be promoted on your listing, and be sent via alert to everyone who is following it too.",
  },

  {
    question: "I received an offer, now what?",
    answer:
      "Awesome! It's time to get your transaction details over to the professional who is helping you close your deal. If there's a buyer's agent in the mix, they will draft an Agreement of Purchase and Sale.",
  },

  {
    question: "I’m using an agent now, can I switch?",
    answer:
      "If your listing is expiring soon, you’re wise to consider switching to a private sale. This will allow you more control and pricing flexibility as you won’t have any selling commission to pay.",
  },

  {
    question: "Is it safe to upload my info?",
    answer:
      "Absolutely. Your data is secured with banking-level encryption (256-bit) and is never sold to third parties. You can view our privacy policy here.",
  },
];


const SellerFAQ = ({tab}) => {
    return (
      <div className={`mt-10 w-full mb-10`}>
        {data.map(({...item}) => {
          return <Question {...item}/>;
        })}
      </div>
    );
}

export default SellerFAQ
