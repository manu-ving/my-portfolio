export default function WorkExperience() {
    const experiences = [
      {
        company: "MAJAN FARMS",
        role: "Accountant",
        duration: "Nov 2024 – Mar 2025",
        location: "Dubai, UAE & Oman",
        tools: "Tally, Microsoft Excel",
        responsibilities: [
          "Played a key role in setting up the accounting system for a newly established LLP company.",
          "Created the chart of accounts and implemented initial bookkeeping processes.",
          "Handled journal entries, bank reconciliations, and daily expense tracking.",
          "Prepared and managed financial statements ensuring regulatory compliance.",
          "Coordinated with auditors and consultants for setting financial practices.",
          "Maintained vendor and customer records for invoicing and payments.",
          "Supported budgeting and forecasting during the startup phase.",
          "Collaborated with management on financial strategies for growth."
        ],
      },
      {
        company: "Fair Exports India Pvt Ltd",
        role: "Assistant Accountant",
        duration: "Sep 2023 – Aug 2024",
        location: "Calicut, India",
        tools: "SAP, Microsoft Excel",
        responsibilities: [
          "Created sales and purchase invoices, including e-invoices.",
          "Maintained and tracked daily cash balances.",
          "Recorded day-to-day expenses accurately.",
          "Managed stock and inventory.",
          "Tracked international consignments.",
          "Prepared export documentation."
        ],
      },
      {
        company: "MJ Associates Tax Consultancy",
        role: "Accountant",
        duration: "Aug 2022 – Sep 2023",
        location: "Tirur, Malappuram",
        tools: "Tally, Microsoft Excel",
        responsibilities: [
          "Maintained full accounting records for client companies.",
          "Filed GST returns and ensured timely compliance.",
          "Stayed updated with current accounting standards.",
          "Handled daily accounting processes for accurate financial reporting.",
          "Created detailed debtors and creditors lists, maintaining clear communication with stakeholders."
        ],
      }
    ];
  
    return (
      <section className="max-w-4xl mx-auto px-6 py-12 text-white">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">
          Work Experience
        </h2>
  
        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="group transition-all duration-300 hover:scale-[1.01]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-white/80">
                    {exp.company} – {exp.location}
                  </p>
                </div>
                <span className="text-sm text-white/60">{exp.duration}</span>
              </div>
  
              <p className="text-sm text-white/60 mb-2">Tools: {exp.tools}</p>
  
              <ul className="list-disc list-inside space-y-1 text-white/90 text-base pl-2">
                {exp.responsibilities.map((item, index) => (
                  <li key={index} className="transition duration-300 hover:text-white">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
  