import { Card } from '../ui/Card';
import { Subject, AttendanceRecord } from '../../types';
import { calculateAttendancePercentage, cn, formatDate } from '../../lib/utils';

interface SubjectAttendanceProps {
  subject: Subject;
  records: AttendanceRecord[];
}

export function SubjectAttendance({ subject, records }: SubjectAttendanceProps) {
  const presentCount = records.filter((r) => r.status === 'present').length;
  const percentage = calculateAttendancePercentage(presentCount, records.length);

  return (
    <Card>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold">{subject.name}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {subject.code}
          </p>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold">{percentage}%</span>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {presentCount}/{records.length} classes
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-sm font-medium mb-2">Recent Records</h4>
        <div className="space-y-2">
          {records.slice(0, 5).map((record) => (
            <div
              key={record.id}
              className="flex justify-between items-center text-sm"
            >
              <span>{formatDate(record.date)}</span>
              <span
                className={cn(
                  'px-2 py-1 rounded-full text-xs',
                  record.status === 'present'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                )}
              >
                {record.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}