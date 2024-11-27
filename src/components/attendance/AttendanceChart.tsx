
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface AttendanceChartProps {
  present: number;
  total: number;
}

export function AttendanceChart({ present, total }: AttendanceChartProps) {
  const absent = total - present;
  const data = [
    { name: 'Present', value: present },
    { name: 'Absent', value: absent },
  ];

  const COLORS = ['#0ea5e9', '#ef4444'];

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={entry.name} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}