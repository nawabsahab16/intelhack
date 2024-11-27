
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';
import { Subject, AttendanceRecord } from '../../types';

interface AttendanceReportProps {
  subject: Subject;
  records: AttendanceRecord[];
  onDownloadReport: () => void;
}

export function AttendanceReport({
  subject,
  records,
  onDownloadReport,
}: AttendanceReportProps) {
  const data = records.reduce((acc, record) => {
    const date = new Date(record.date).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = { date, present: 0, absent: 0 };
    }
    record.status === 'present' ? acc[date].present++ : acc[date].absent++;
    return acc;
  }, {} as Record<string, { date: string; present: number; absent: number }>);

  const chartData = Object.values(data);

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subject.code}
          </p>
        </div>
        <button
          onClick={onDownloadReport}
          className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
        >
          Download Report
        </button>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="present" fill="#0ea5e9" name="Present" />
            <Bar dataKey="absent" fill="#ef4444" name="Absent" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}