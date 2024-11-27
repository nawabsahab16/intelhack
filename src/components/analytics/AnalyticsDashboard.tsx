import React from 'react';
import { Card } from '../ui/Card';
import { useAnalytics } from '../../hooks/useAnalytics';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface AnalyticsDashboardProps {
  subjectId?: string;
  startDate?: string;
  endDate?: string;
}

export function AnalyticsDashboard({
  subjectId,
  startDate,
  endDate,
}: AnalyticsDashboardProps) {
  const { data: analytics, isLoading } = useAnalytics({
    subjectId,
    startDate,
    endDate,
  });

  if (isLoading || !analytics) {
    return <div>Loading analytics...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <h3 className="text-lg font-semibold mb-2">Overall Attendance Rate</h3>
          <p className="text-3xl font-bold text-primary-500">
            {analytics.attendanceRate.toFixed(1)}%
          </p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2">Total Classes</h3>
          <p className="text-3xl font-bold">{analytics.totalRecords}</p>
        </Card>
        <Card>
          <h3 className="text-lg font-semibold mb-2">Students at Risk</h3>
          <p className="text-3xl font-bold text-red-500">
            {analytics.byStudent.filter((s) => s.rate < 75).length}
          </p>
        </Card>
      </div>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Attendance Trends</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={analytics.byDate}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="rate"
                stroke="#0ea5e9"
                name="Attendance Rate (%)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold mb-4">Student Performance</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={analytics.byStudent}
              layout="vertical"
              margin={{ left: 100 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" domain={[0, 100]} />
              <YAxis
                type="category"
                dataKey="student.name"
                width={100}
                tick={{ fontSize: 12 }}
              />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="rate"
                fill="#0ea5e9"
                name="Attendance Rate (%)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}