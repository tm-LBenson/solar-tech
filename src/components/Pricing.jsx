import React from 'react'

const tiers = [
  { name: "Starter", price: "$0", desc: "Try basic features" },
  { name: "Pro", price: "$12", desc: "For daily multitaskers" },
  { name: "Enterprise", price: "$49", desc: "Full control and support - Fully Managed" },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="pricing"
    >
      {tiers.map((tier) => (
        <article
          className="card"
          key={tier.name}
        >
          <h3>{tier.name}</h3>
          <p className="card__price">{tier.price}</p>
          <p className="card__desc">{tier.desc}</p>
          <button className='card__btn'>Choose Plan</button>
        </article>
      ))}
    </section>
  );
}
