
import { Card } from '../ui/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { formatDate } from '../../lib/utils';

interface TrendChartProps {
  data: Array<{
    date: string;
    attendance: number;
  }>;
}

export function TrendChart({ data }: TrendChartProps) {
  const formattedData = data.map((item) => ({
    ...item,
    date: formatDate(item.date),
  }));

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Attendance Trends</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={formattedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              angle={-45}
              textAnchor="end"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              domain={[0, 100]}
              label={{
                value: 'Attendance %',
                angle: -90,
                position: 'insideLeft',
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="attendance"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={{ r: 4 }}
              name="Attendance %"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}