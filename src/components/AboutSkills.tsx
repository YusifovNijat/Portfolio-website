export default function AboutSkills() {
  return (
    <section className="aboutBand" id="skills">
      <div className="container aboutInner">
        <h2 className="aboutTitle">Hi, I’m Nijat. Nice to meet you.</h2>
        <p className="aboutText">
          I’m focused on analytics and business insights — turning questions into KPIs,
          dashboards, and clear recommendations. I also build small web tools as a hobby.
        </p>
      </div>

      <div className="container">
        <div className="skillCard">
          <div className="skillGrid">
            <div className="skillCol">
              <div className="skillIcon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                    <path d="M4 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M8 15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M12 15V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 15V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
</div>
              <h3 className="skillHeading">Data Analyst</h3>
              <p className="skillDesc fixedDesk">
                Dashboards, KPI tracking, and analysis that supports decisions.
              </p>
            <div className="toolBlock">
              <div className="skillLabel">Main tools</div>
              <div className="skillValue">PostgreSQL, Power BI, Excel, Python</div>
            </div>
            </div>

            <div className="skillCol skillColMiddle">
              <div className="skillIcon">
<svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="11" y="8" width="12" height="16" rx="2"
        stroke="currentColor" stroke-width="1.8"/>
        
  <path d="M14 8V6H20V8"
        stroke="currentColor" stroke-width="1.8"/>
        
  <path d="M14 14H20"
        stroke="currentColor" stroke-width="1.8"/>
        
  <path d="M14 18H20"
        stroke="currentColor" stroke-width="1.8"/>
</svg>
</div>
              <h3 className="skillHeading">Business Analyst</h3>
              <p className="skillDesc fixedDesk">
                Turning business needs into structured requirements and measurable outcomes.
              </p>
              <div className="skillLabel">Main tools</div>
              <div className="skillValue">CRM (Dynamics 365), Excel, PostgreSQL,Power BI, Jira, Miro</div>
            </div>

            <div className="skillCol">
              <div className="skillIcon">
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M9 18 3 12l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 6 21 12l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
</div>
              <h3 className="skillHeading">Developer (Hobby)</h3>
              <p className="skillDesc">
                Small apps and APIs to learn faster and ship ideas.
              </p>
                <div className="toolBlock">
              <div className="skillLabel">Main tools</div>
              <div className="skillValue">HTML, CSS, JavaScript, React, TypeScript, Java, Spring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}