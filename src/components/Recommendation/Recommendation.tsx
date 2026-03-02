import "./Recommendation.css";

export default function Recommendation() {
  return (
    <section className="recommendationSection" id="recommendation">
      <div className="container">
        <h2 className="sectionTitle">Recommendation</h2>
        <p className="sectionSubtitle">
          A reference from my previous manager (NET24).
        </p>

        <div className="recommendationCard">
          <p className="recommendationQuote">
            “Nijat is an invaluable employee with diverse talents. He consistently
            demonstrated a strong ability to adapt to new tasks and responsibilities,
            worked independently with a high sense of responsibility, and often took
            initiative by proposing ideas that contributed positively to the company’s
            development. His communication is clear, transparent, and solution-oriented.
            Despite a demanding workload, he delivered results on time and handled
            high-pressure situations in a calm, professional manner.”
          </p>

          <div className="recommendationAuthor">
            <div className="authorName">Natalia Błaszczyk</div>
            <div className="authorRole">
              Business Operations Manager, NET24 (New Edu Trend)
            </div>
            <div className="authorMeta">Warsaw · 31.10.2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}