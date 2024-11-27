import { Card } from '../components/ui/Card';
import { AttendanceChart } from '../components/attendance/AttendanceChart';
import { useAuthStore } from '../store/authStore';
import { SubjectAttendance } from '../components/attendance/SubjectAttendance';

// Mock data - Replace with actual API calls
const mockSubjects = [
  {
    id: '1',
    name: 'Mathematics',
    code: 'MATH101',
    teacher: 'Dr. Smith',
    semester: 1,
  },
  {
    id: '2',
    name: 'Physics',
    code: 'PHY101',
    teacher: 'Dr. Johnson',
    semester: 1,
  },
];

const mockAttendance = [
  {
    id: '1',
    studentId: '1',
    subjectId: '1',
    date: '2024-02-28',
    status: 'present',
    markedBy: 'Dr. Smith',
  },
  // Add more mock records
];

export function StudentDashboard() {
  const { user } = useAuthStore();

  const totalClasses = mockAttendance.length;
  const presentClasses = mockAttendance.filter(
    (record) => record.status === 'present'
  ).length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <h2 className="text-lg font-semibold mb-4">Overall Attendance</h2>
          <AttendanceChart present={presentClasses} total={totalClasses} />
        </Card>

        <Card>
          <h2 className="text-lg font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Classes
              </p>
              <p className="text-2xl font-bold">{totalClasses}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Present Classes
              </p>
              <p className="text-2xl font-bold">{presentClasses}</p>
            </div>
          </div>
        </Card>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-4">Subject-wise Attendance</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockSubjects.map((subject) => (
          <SubjectAttendance
          key={subject.id}
          subject={subject}
          records={mockAttendance.filter((r) => r.subjectId === subject.id)}
          />
        ))}
      </div>
    </div>
  );
}