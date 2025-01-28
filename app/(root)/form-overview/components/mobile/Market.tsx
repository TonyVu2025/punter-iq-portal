import React from "react";
import BettingCard from "./components/BettingCard";

const MOCK_DATA = [
  {
    isPremium: true,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  {
    isPremium: false,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  {
    isPremium: false,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  {
    isPremium: true,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  {
    isPremium: false,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  {
    isPremium: false,
    userImage: "/img/userAvatar.png",
    userName: "Peter Gelagotis",
    vcBalance: "$12,245",
    location: "Bendigo Race 02",
    raceNumber: "Race 02",
    time: "Tues",
    distance: "1600m",
    soft: 5,
    horseName: "1. Barney's Blaze (3)",
    jockeyName: "J. Jacob Opperman",
    bettingOdds: "$2.50",
    virtualCurrency: "$10.55",
    winPrize: "$155,899",
    timeLeft: "34m 42s",
  },
  // Duplicate the same data 5 more times for demonstration
  // In real application, this would be different data for each card
];

function Market() {
  // Duplicate the mock data to have 6 items
  const cards = MOCK_DATA;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, index) => (
          <BettingCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Market;
