"use client";
import { HoverEffect } from "./ui/card-hover-effect";
import { ColourfulText } from "./ui/colorful-text";

export  default function Organization() {
  return (
    <div className="w-full mx-auto px-8">
      <h2 className="text-3xl font-bold mb-4"><ColourfulText text="Organization" /></h2>
      <HoverEffect items={organizations} />
    </div>
  );
}
const organizations = [
  {
    "name": "Dlytica Inc.",
    "logo": "/images/dlytica-logo.png", 
    "role": "Data Science Intern"
  },
  {
    "name": "Oasis Infobyte",
    "logo": "/oasis.png",
    "role": "Data Science Intern"
  },
  {
    "name": "The Sparks Foundation",
    "logo": "/sparks.jpg", 
    "role": "Data Science & Business Analytics Intern"
  },
  {
    "name": "CSITAN",
    "logo": "/csit.png", 
    "role": ["Joint Secretary", "Executive Member"]
  },
  {
    "name": "Pathao",
    "logo": "/pathao.png", 
    "role": "Campus Ambassador"
  },
  {
    "name": "Hult Prize at Amrit Campus",
    "logo": "/hult.jpg", 
    "role": "Startups Coordinator"
  },
  {
    "name": "E-Cell IIT, Bombay",
    "logo": "/ecell.png", 
    "role": "Campus Executive Intern"
  },
  {
    "name": "LOCUS",
    "logo": "/locus.png", 
    "role": "Campus Executive"
  }
];
