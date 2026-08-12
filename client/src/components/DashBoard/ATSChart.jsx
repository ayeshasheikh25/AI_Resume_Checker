import { useAIResumeHook } from "@/hook/aiResumeHook";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function ATSChart() {
    const {chartData} = useAIResumeHook()
    const data = chartData()
    console.log(data)
  return (
    <div className="w-full p-4  md:max-w-md lg:max-w-6xl mx-auto">
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl bg-gradient-to-tr from-green-500 via-gray-500 to-pink-500 bg-clip-text text-transparent font-semibold mb-5">
        ATS Score Progress
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="date" />

          <YAxis domain={[0, 10]} />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="score"
            stroke="#16a34a"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    </div>
  );
}