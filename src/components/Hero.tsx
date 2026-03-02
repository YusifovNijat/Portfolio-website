import Nijat from "../assets/Nijat.png";

export default function Hero() {
  return (
    <section className="hero">

      <main className="container heroMain">
        <h1 className="heroTitle">
          Data Analyst, Business Analyst & Coding Hobbyist
        </h1>

        <p className="heroSubtitle">
          I turn messy data into clear insights and dashboards, and I build small apps for fun.
        </p>

<div className="heroAvatar">
  <img src={Nijat} alt="Nijat Avatar" />
</div>
      </main>
    </section>
  );
}