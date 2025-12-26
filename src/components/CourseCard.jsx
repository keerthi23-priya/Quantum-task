const CourseCard = ({ title, desc, days, price, tag }) => {
  return (
    <div className="
      w-340px
      bg-black/40 backdrop-blur-xl
      border border-white/10
      rounded-2xl
      p-6
      h-full
      flex flex-col justify-between
    ">
      
      <div>
        <h3 className="text-lg font-medium mb-2">{title}</h3>

        <p className="text-sm text-white/70 mb-6">
          {desc}
        </p>

        <div className="flex justify-between items-center text-xs text-white/60 mb-4">
          <span>{days}</span>
          <span className="bg-white/10 px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>

        <div className="text-2xl font-semibold mb-6">
          ${price}
        </div>
      </div>

      <button className="w-full py-3 bg-[#09AF9B] text-black text-sm rounded-md flex items-center justify-center gap-2 hover:opacity-90 transition">
        View details <span>→</span>
      </button>
    </div>
  );
};

export default CourseCard;
