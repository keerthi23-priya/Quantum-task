const TestimonialCard = ({ name, location, text, rating = 5, avatar }) => {
  return (
    <div className="w-360px bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 h-full">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden" />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-white/50">{location}</p>
          </div>
        </div>

        <div className="flex gap-1 text-yellow-400 text-sm">
          {Array.from({ length: rating }).map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>
      </div>

      <p className="text-sm text-white/70 leading-relaxed">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;
