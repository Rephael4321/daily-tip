import { FC } from "react";

type Props = {
  subject: string;
  setSubject: (val: string) => void;
  onSubmit: () => void;
  loading: boolean;
};

const TipForm: FC<Props> = ({ subject, setSubject, onSubmit, loading }) => (
  <div className="space-y-4">
    <label className="block text-xl font-semibold text-gray-900">
      בחר נושא לטיפ:
    </label>
    <input
      type="text"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      placeholder="למשל: זוגיות, מוטיבציה, ניהול זמן"
      className="w-full border border-gray-300 rounded-md p-3 text-right text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    />
    <button
      onClick={onSubmit}
      disabled={loading}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg font-medium transition disabled:opacity-50"
    >
      {loading ? "טוען..." : "קבל טיפ יומי"}
    </button>
  </div>
);

export default TipForm;
