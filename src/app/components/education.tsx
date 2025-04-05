export default function Education() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-16 text-white">
        <h2 className="text-3xl font-bold mb-8 border-b border-white/20 pb-2">
          Education
        </h2>
  
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Education Icon or Image */}
          <div className="w-full md:w-1/3">
            <img
              src="https://images.unsplash.com/photo-1627556704302-624286467c65?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Use a relevant image (graduation cap, books, etc.)
              alt="Education"
              className="rounded-xl shadow-lg object-cover w-full max-h-[300px] grayscale hover:grayscale-0 transition duration-500"
            />
          </div>
  
          {/* Right Side: Education Info */}
          <div className="w-full md:w-2/3 space-y-5">
            <div>
              <h3 className="text-xl font-semibold">Bachelor of Commerce (B.Com) – Co-operation</h3>
              <p className="text-white/80">University of Calicut – Calicut, India</p>
              <p className="text-sm text-white/60">2018 – 2022</p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Professional Diploma in Computerized Financial Accounting (PDCFA)</h3>
              <p className="text-white/80">Private Institute – India</p>
              <p className="text-sm text-white/60">Completed</p>
            </div>
  
            <div>
              <h3 className="text-xl font-semibold">Advanced Diploma in Computerized Financial Accounting (ADCFA)</h3>
              <p className="text-white/80">Private Institute – India</p>
              <p className="text-sm text-white/60">Completed</p>
            </div>
  
         
          </div>
        </div>
      </section>
    );
  }
  