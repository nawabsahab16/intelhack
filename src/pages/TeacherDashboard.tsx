import { jsPDF } from 'jspdf';
import { Card } from '../components/ui/Card';
import { AttendanceTable } from '../components/teacher/AttendanceTable';
import { AttendanceReport } from '../components/teacher/AttendanceReport';
import { AttendanceStats } from '../components/teacher/AttendanceStats';
import { TrendChart } from '../components/teacher/TrendChart';
import { StudentList } from '../components/teacher/StudentList';
import { useAuthStore } from '../store/authStore';

const mockStudents = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice@example.com',
    studentId: 'STU001',
    department: 'Computer Science',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob@example.com',
    studentId: 'STU002',
    department: 'Computer Science',
  },
  {
    id: '3',
    name: 'Charlie Brown',
    email: 'charlie@example.com',
    studentId: 'STU003',
    department: 'Computer Science',
  },
];

const mockSubjects = [
  {
    id: '1',
    name: 'Mathematics',
    code: 'MATH101',
    teacher: 'Dr. Smith',
    semester: 1,
  },
];

// Generate mock attendance data for the past 30 days
const generateMockAttendanceData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    
    const attendance = Math.floor(Math.random() * (100 - 60) + 60); // Random attendance between 60-100%
    
    data.push({
      date: date.toISOString().split('T')[0],
      attendance,
    });
  }
  
  return data;
};

const mockAttendanceTrends = generateMockAttendanceData();

const mockStudentPerformance = mockStudents.map((student) => ({
  student,
  attendanceCount: Math.floor(Math.random() * 20) + 10, // Random attendance between 10-30
  totalClasses: 30,
}));

export function TeacherDashboard() {
  const { user } = useAuthStore();
  const [selectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [attendance, setAttendance] = useState<Record<string, boolean>>(() =>
    mockStudents.reduce((acc, student) => {
      acc[student.id] = false;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleToggleAttendance = (studentId: string) => {
    setAttendance((prev) => ({
      ...prev,
      [studentId]: !prev[studentId],
    }));
  };

  const handleSaveAttendance = () => {
    console.log('Saving attendance:', { date: selectedDate, attendance });
  };

  const handleDownloadReport = () => {
    const doc = new jsPDF();
    
    doc.setFontSize(20);
    doc.text('Attendance Report', 20, 20);
    
    doc.setFontSize(12);
    doc.text(`Subject: ${mockSubjects[0].name} (${mockSubjects[0].code})`, 20, 40);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 50);
    
    const tableData = mockStudents.map((student) => [
      student.studentId,
      student.name,
      attendance[student.id] ? 'Present' : 'Absent',
    ]);
    
    doc.autoTable({
      head: [['Student ID', 'Name', 'Status']],
      body: tableData,
      startY: 60,
    });
    
    doc.save('attendance-report.pdf');
  };

  const presentCount = Object.values(attendance).filter(Boolean).length;
  const absentCount = mockStudents.length - presentCount;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Welcome, {user?.name}</h1>
      </div>

      <AttendanceStats
        totalStudents={mockStudents.length}
        presentCount={presentCount}
        absentCount={absentCount}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TrendChart data={mockAttendanceTrends} />
        <StudentList students={mockStudentPerformance} />
      </div>

      <Card>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Mark Attendance</h2>
          <div className="flex gap-4">
            <input
              type="date"
              value={selectedDate}
              className="px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
            />
            <button
              onClick={handleSaveAttendance}
              className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
            >
              Save Attendance
            </button>
          </div>
        </div>

        <AttendanceTable
          students={mockStudents}
          date={selectedDate}
          attendance={attendance}
          onToggleAttendance={handleToggleAttendance}
        />
      </Card>

      <h2 className="text-xl font-semibold mt-8 mb-4">Attendance Reports</h2>
      <div className="grid grid-cols-1 gap-6">
        {mockSubjects.map((subject) => (
          <AttendanceReport
            key={subject.id}
            subject={subject}
            records={[]}
            onDownloadReport={handleDownloadReport}
          />
        ))}
      </div>
    </div>
  );
}

function useState(arg0: string): [any] {
  throw new Error('Function not implemented.');
}
