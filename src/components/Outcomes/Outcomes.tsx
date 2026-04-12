import React from 'react';

const outcomes = [
  {
    num: '01',
    title: 'Strategic Clarity',
    text: 'Defined a precise problem space within a broad theme using structured research methods and prioritization frameworks.',
  },
  {
    num: '02',
    title: 'User Insight',
    text: "Deep understanding of hybrid and remote worker behaviors, mapped against Dell's established user archetypes.",
  },
  {
    num: '03',
    title: 'Concept Design',
    text: 'Generated and refined product concepts across the full focus cycle — Before, During, and After sessions.',
  },
  {
    num: '04',
    title: 'Ecosystem Fit',
    text: "Aligned solutions with Dell's product strategy and hardware ecosystem, ensuring viability within the company's design language.",
  },
];

const Outcomes: React.FC = () => {
  return (
    <section id="outcomes" className="outcomes">

      <div className="reveal">
        <p className="section-label">Outcomes</p>
        <h2 className="section-title">
          What<br />came out of it
        </h2>
      </div>

      <div className="outcomes__grid reveal">
        {outcomes.map((o) => (
          <div key={o.num} className="outcomes__card">
            <p className="outcomes__card-num">{o.num}</p>
            <h3 className="outcomes__card-title">{o.title}</h3>
            <p className="outcomes__card-text">{o.text}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Outcomes;