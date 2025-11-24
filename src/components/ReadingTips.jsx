import MyContainer from "./MyContainer";

const readingTips = [
  {
    title: "Set a Reading Goal",
    description:
      "Decide how many pages or chapters you want to read each day to build consistency and focus in your reading habit.",
    icon: "🎯",
  },
  {
    title: "Create a Reading Schedule",
    description:
      "Allocate a specific time daily for reading, preferably in a quiet, comfortable space free from distractions.",
    icon: "🕒",
  },
  {
    title: "Take Notes While Reading",
    description:
      "Highlight key points, make notes or summaries to improve comprehension and retention of what you read.",
    icon: "📝",
  },
  {
    title: "Discuss What You Read",
    description:
      "Sharing insights with friends or in online communities helps deepen understanding and encourages critical thinking.",
    icon: "💬",
  },
];

const ReadingTips = () => {
  return (
    <div className="bg-primary py-20">
      <MyContainer>
        <h2
          data-aos="fade-right"
          className="text-center text-3xl text-green-500 font-bold mb-12"
        >
          Reading Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {readingTips.map((tip) => (
            <div
              key={tip.title}
              data-aos="fade-up"
              className="card bg-accent-content shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <div className="text-5xl mb-4">{tip.icon}</div>
              <h3 className="text-lg text-green-500 font-semibold mb-2">{tip.title}</h3>
              <p className="text-base-200 text-justify mt-2">{tip.description}</p>
            </div>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default ReadingTips;
