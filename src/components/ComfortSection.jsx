import React from 'react';

const ComfortSection = () => {
  return (
    <section 
      className="flex items-center justify-center min-h-screen px-8 bg-gradient-to-b from-[#d7b999] to-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 
            className="text-[64px] font-bold text-left text-white"
            style={{ fontFamily: "'Rock Salt', cursive" }}
          >
            COMFORT
          </h2>
          <p className="text-lg mt-4 text-black text-left">
            Wearing comfortable devices during exercise helps your body stay relaxed and stress-free.
            The right gear supports your movements and enhances your overall workout experience.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img 
            src="https://tse1.mm.bing.net/th/id/OIP.FvUKBzPbXb-VLDw8N3Zi1AHaFc?pid=Api&P=0&h=220" 
            alt="Comfort Model" 
            className="w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
