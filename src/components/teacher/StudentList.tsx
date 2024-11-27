
import { Card } from '../ui/Card';
import { Student } from '../../types';
import { calculateAttendancePercentage } from '../../lib/utils';

interface StudentListProps {
  students: Array<{
    student: Student;
    attendanceCount: number;
    totalClasses: number;
  }>;
}

export function StudentList({ students }: StudentListProps) {
  const sortedStudents = [...students].sort(
    (a, b) =>
      calculateAttendancePercentage(b.attendanceCount, b.totalClasses) -
      calculateAttendancePercentage(a.attendanceCount, a.totalClasses)
  );

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Student Performance</h3>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800">
              <th className="px-4 py-3 text-left text-sm font-medium">
                Student ID
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-4 py-3 text-center text-sm font-medium">
                Attendance
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {sortedStudents.map(({ student, attendanceCount, totalClasses }) => {
              const percentage = calculateAttendancePercentage(
                attendanceCount,
                totalClasses
              );
              return (
                <tr key={student.id}>
                  <td className="px-4 py-3 text-sm">{student.studentId}</td>
                  <td className="px-4 py-3 text-sm">{student.name}</td>
                  <td className="px-4 py-3 text-sm text-center">
                    {attendanceCount}/{totalClasses} ({percentage}%)
                  </td>
                  <td className="px-4 py-3 text-sm text-center">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        percentage >= 75
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                          : percentage >= 60
                          ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                          : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                      }`}
                    >
                      {percentage >= 75
                        ? 'Good'
                        : percentage >= 60
                        ? 'Average'
                        : 'At Risk'}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}