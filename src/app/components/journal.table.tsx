export default function JournalEntry() {
  const entries = [
    {
      date: "2025-04-05",
      particulars: [
        { name: "Cash A/C", type: "Dr", amount: "10,000" },
        { name: "To Sales A/C", type: "Cr", amount: "10,000" },
      ],
      narration: "Being goods sold for cash",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-white">
      <h2 className="text-2xl font-bold mb-6 underline underline-offset-4">
        Journal Entry
      </h2>

      {entries.map((entry, index) => (
        <div
          key={index}
          className="mb-8 border border-white/20 rounded-lg p-4 bg-white/5 space-y-4"
        >
          {/* Date */}
          <div className="text-sm text-white/70">
            <span className="font-semibold">Date:</span> {entry.date}
          </div>

          {/* Header - only visible on md+ */}
          <div className="hidden md:grid grid-cols-12 text-sm font-semibold border-b border-white/30 pb-2">
            <div className="col-span-6">Particulars</div>
            <div className="col-span-3 text-right">Dr (₹)</div>
            <div className="col-span-3 text-right">Cr (₹)</div>
          </div>

          {/* Entry Rows */}
          <div className="space-y-2">
            {entry.particulars.map((p, idx) => (
              <div
                key={idx}
                className="md:grid md:grid-cols-12 md:items-center border-b border-dashed border-white/20 py-2"
              >
                {/* Particulars */}
                <div className="md:col-span-6">
                  <span className={`${p.type === "Cr" ? "pl-6" : ""}`}>
                    {p.type === "Cr" ? "To " : ""}
                    {p.name}
                  </span>
                </div>

                {/* Dr Amount */}
                <div className="md:col-span-3 md:text-right">
                  {p.type === "Dr" ? (
                    <span className="block md:hidden text-white/60 text-xs">
                      Dr (₹)
                    </span>
                  ) : null}
                  <span>{p.type === "Dr" ? p.amount : ""}</span>
                </div>

                {/* Cr Amount */}
                <div className="md:col-span-3 md:text-right">
                  {p.type === "Cr" ? (
                    <span className="block md:hidden text-white/60 text-xs">
                      Cr (₹)
                    </span>
                  ) : null}
                  <span>{p.type === "Cr" ? p.amount : ""}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Narration */}
          <div className="text-xs italic text-white/70 pt-2">
            ({entry.narration})
          </div>
        </div>
      ))}
    </div>
  );
}
