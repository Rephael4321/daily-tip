import { FC } from "react";

type Props = {
  tip: string;
};

const TipDisplay: FC<Props> = ({ tip }) => {
  if (!tip) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 transition-all">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">הטיפ שלך להיום:</h2>
      <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">
        {tip}
      </p>
    </div>
  );
};

export default TipDisplay;
