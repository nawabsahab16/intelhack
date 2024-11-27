import { Check, X } from 'lucide-react';
import { Student } from '../../types';

interface AttendanceTableProps {
  students: Student[];
  date: string;
  attendance: Record<string, boolean>;
  onToggleAttendance: (studentId: string) => void;
}

export function AttendanceTable({
  students,
  attendance,
  onToggleAttendance,
}: AttendanceTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-gray-800">
            <th className="px-4 py-3 text-left text-sm font-medium">Student ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
            <th className="px-4 py-3 text-center text-sm font-medium">Status</th>
            <th className="px-4 py-3 text-center text-sm font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-4 py-3 text-sm">{student.studentId}</td>
              <td className="px-4 py-3 text-sm">{student.name}</td>
              <td className="px-4 py-3 text-sm text-center">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    attendance[student.id]
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                      : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}
                >
                  {attendance[student.id] ? 'Present' : 'Absent'}
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-center">
                <button
                  onClick={() => onToggleAttendance(student.id)}
                  className={`p-1 rounded-full ${
                    attendance[student.id]
                      ? 'text-green-600 hover:bg-green-100 dark:hover:bg-green-900'
                      : 'text-red-600 hover:bg-red-100 dark:hover:bg-red-900'
                  }`}
                >
                  {attendance[student.id] ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <X className="h-5 w-5" />
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}