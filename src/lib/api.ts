import { Student, Subject, AttendanceRecord, User } from '../types';

let students: Student[] = [];
let subjects: Subject[] = [];
let attendanceRecords: AttendanceRecord[] = [];
let users: User[] = [];

const initializeMockData = () => {
 
   let students: Student[] = [
    { id: '1', name: 'Aaditya', email: 'aaditya@example.com', studentId: 'STU001', department: 'Computer Science' },
    { id: '2', name: 'Aarya', email: 'aarya@example.com', studentId: 'STU002', department: 'Computer Science' },
    { id: '3', name: 'Abhay', email: 'abhay@example.com', studentId: 'STU003', department: 'Computer Science' },
    { id: '4', name: 'Abhijeet', email: 'abhijeet@example.com', studentId: 'STU004', department: 'Electronics' },
    { id: '5', name: 'Abhinandan', email: 'abhinandan@example.com', studentId: 'STU005', department: 'Computer Science' },
    { id: '6', name: 'Abhinay', email: 'abhinay@example.com', studentId: 'STU006', department: 'Computer Science' },
    { id: '7', name: 'Abhishek', email: 'abhishek@example.com', studentId: 'STU007', department: 'Electronics' },
    { id: '8', name: 'Abimanyu', email: 'abimanyu@example.com', studentId: 'STU008', department: 'Computer Science' },
    { id: '9', name: 'Aditya', email: 'aditya@example.com', studentId: 'STU009', department: 'Computer Science' },
    { id: '10', name: 'Akhil', email: 'akhil@example.com', studentId: 'STU010', department: 'Electronics' },
    { id: '11', name: 'Akshat', email: 'akshat@example.com', studentId: 'STU011', department: 'Computer Science' },
    { id: '12', name: 'Anil', email: 'anil@example.com', studentId: 'STU012', department: 'Computer Science' },
    { id: '13', name: 'Avi', email: 'avi@example.com', studentId: 'STU013', department: 'Electronics' },
    { id: '14', name: 'Balaraam', email: 'balaraam@example.com', studentId: 'STU014', department: 'Computer Science' },
    { id: '15', name: 'Bharat', email: 'bharat@example.com', studentId: 'STU015', department: 'Computer Science' },
    { id: '16', name: 'Bhaskar', email: 'bhaskar@example.com', studentId: 'STU016', department: 'Electronics' },
    { id: '17', name: 'Bhaumik', email: 'bhaumik@example.com', studentId: 'STU017', department: 'Computer Science' },
    { id: '18', name: 'Bijay', email: 'bijay@example.com', studentId: 'STU018', department: 'Computer Science' },
    { id: '19', name: 'Brijesh', email: 'brijesh@example.com', studentId: 'STU019', department: 'Electronics' },
    { id: '20', name: 'Chandan', email: 'chandan@example.com', studentId: 'STU020', department: 'Computer Science' },
    { id: '21', name: 'Chetan', email: 'chetan@example.com', studentId: 'STU021', department: 'Computer Science' },
    { id: '22', name: 'Chirag', email: 'chirag@example.com', studentId: 'STU022', department: 'Electronics' },
    { id: '23', name: 'Chiranjeeve', email: 'chiranjeeve@example.com', studentId: 'STU023', department: 'Computer Science' },
    { id: '24', name: 'Daksh', email: 'daksh@example.com', studentId: 'STU024', department: 'Computer Science' },
    { id: '25', name: 'Daman', email: 'daman@example.com', studentId: 'STU025', department: 'Electronics' },
    { id: '26', name: 'Depen', email: 'depen@example.com', studentId: 'STU026', department: 'Computer Science' },
    { id: '27', name: 'Dev', email: 'dev@example.com', studentId: 'STU027', department: 'Computer Science' },
    { id: '28', name: 'Dhruv', email: 'dhruv@example.com', studentId: 'STU028', department: 'Electronics' },
    { id: '29', name: 'Divyanshu', email: 'divyanshu@example.com', studentId: 'STU029', department: 'Computer Science' },
    { id: '30', name: 'Ekambar', email: 'ekambar@example.com', studentId: 'STU030', department: 'Computer Science' },
    { id: '31', name: 'Ekansh', email: 'ekansh@example.com', studentId: 'STU031', department: 'Electronics' },
    { id: '32', name: 'Ekaraj', email: 'ekaraj@example.com', studentId: 'STU032', department: 'Computer Science' },
    { id: '33', name: 'Eklavya', email: 'eklavya@example.com', studentId: 'STU033', department: 'Computer Science' },
    { id: '34', name: 'Elilarasan', email: 'elilarasan@example.com', studentId: 'STU034', department: 'Electronics' },
    { id: '35', name: 'Falak', email: 'falak@example.com', studentId: 'STU035', department: 'Computer Science' },
    { id: '36', name: 'Gagan', email: 'gagan@example.com', studentId: 'STU036', department: 'Computer Science' },
    { id: '37', name: 'Gajendra', email: 'gajendra@example.com', studentId: 'STU037', department: 'Electronics' },
    { id: '38', name: 'Garv', email: 'garv@example.com', studentId: 'STU038', department: 'Computer Science' },
    { id: '39', name: 'Gaurav', email: 'gaurav@example.com', studentId: 'STU039', department: 'Computer Science' },
    { id: '40', name: 'Gautam', email: 'gautam@example.com', studentId: 'STU040', department: 'Electronics' },
    { id: '41', name: 'Hardik', email: 'hardik@example.com', studentId: 'STU041', department: 'Computer Science' },
    { id: '42', name: 'Harsh', email: 'harsh@example.com', studentId: 'STU042', department: 'Computer Science' },
    { id: '43', name: 'Hemant', email: 'hemant@example.com', studentId: 'STU043', department: 'Electronics' },
    { id: '44', name: 'Hridaya', email: 'hridaya@example.com', studentId: 'STU044', department: 'Computer Science' },
    { id: '45', name: 'Indivar', email: 'indivar@example.com', studentId: 'STU045', department: 'Computer Science' },
    { id: '46', name: 'Indra', email: 'indra@example.com', studentId: 'STU046', department: 'Electronics' },
    { id: '47', name: 'Indraneel', email: 'indraneel@example.com', studentId: 'STU047', department: 'Computer Science' },
    { id: '48', name: 'Ishaan', email: 'ishaan@example.com', studentId: 'STU048', department: 'Computer Science' },
    { id: '49', name: 'Ishwar', email: 'ishwar@example.com', studentId: 'STU049', department: 'Electronics' },
    { id: '50', name: 'Jai', email: 'jai@example.com', studentId: 'STU050', department: 'Computer Science' },
    { id: '51', name: 'Jaideep', email: 'jaideep@example.com', studentId: 'STU051', department: 'Computer Science' },
    { id: '52', name: 'Jatindra', email: 'jatindra@example.com', studentId: 'STU052', department: 'Electronics' },
  ]

  subjects = [
    { id: '1', name: 'Mathematics', code: 'MATH101', teacher: 'Dr. Smith', semester: 1 },
    { id: '2', name: 'Physics', code: 'PHY101', teacher: 'Dr. Johnson', semester: 1 },
    { id: '3', name: 'Chemistry', code: 'CHEM101', teacher: 'Dr. Adams', semester: 2 },
    { id: '4', name: 'Biology', code: 'BIO101', teacher: 'Dr. Taylor', semester: 2 },
    { id: '5', name: 'Programming', code: 'CS101', teacher: 'Dr. Brown', semester: 1 },
    { id: '6', name: 'Data Structures', code: 'CS201', teacher: 'Dr. White', semester: 3 },
    { id: '7', name: 'Electronics', code: 'ECE101', teacher: 'Dr. Green', semester: 2 },
    { id: '8', name: 'Discrete Math', code: 'MATH201', teacher: 'Dr. Black', semester: 3 },
  ];


  const generateAttendanceRecords = () => {
    const records: AttendanceRecord[] = [];
    const today = new Date();

    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);

      students.forEach((student) => {
        subjects.forEach((subject) => {
          if (Math.random() > 0.2) {
        
            records.push({
              id: crypto.randomUUID(),
              studentId: student.id,
              subjectId: subject.id,
              date: date.toISOString().split('T')[0],
              status: Math.random() > 0.15 ? 'present' : 'absent', // 85% chance of being present
              markedBy: subject.teacher,
            });
          }
        });
      });
    }

    return records;
  };

  attendanceRecords = generateAttendanceRecords();

   users = [
    { id: '1', name: 'Dr. Smith', email: 'smith@example.com', role: 'teacher' },
    { id: '2', name: 'Dr. Johnson', email: 'johnson@example.com', role: 'teacher' },
    { id: '3', name: 'Dr. Adams', email: 'adams@example.com', role: 'teacher' },
    { id: '4', name: 'Student 1', email: 'student1@example.com', role: 'student', studentId: 'STU001' },
    { id: '5', name: 'Student 2', email: 'student2@example.com', role: 'student', studentId: 'STU002' },
    { id: '6', name: 'Aaditya', email: 'aaditya@example.com', role: 'student', studentId: 'STU003' },
    { id: '7', name: 'Aarya', email: 'aarya@example.com', role: 'student', studentId: 'STU004' },
    { id: '8', name: 'Abhay', email: 'abhay@example.com', role: 'student', studentId: 'STU005' },
    { id: '9', name: 'Abhijeet', email: 'abhijeet@example.com', role: 'student', studentId: 'STU006' },
    { id: '10', name: 'Abhinandan', email: 'abhinandan@example.com', role: 'student', studentId: 'STU007' },
    { id: '11', name: 'Abhinay', email: 'abhinay@example.com', role: 'student', studentId: 'STU008' },
    { id: '12', name: 'Abhishek', email: 'abhishek@example.com', role: 'student', studentId: 'STU009' },
    { id: '13', name: 'Abimanyu', email: 'abimanyu@example.com', role: 'student', studentId: 'STU010' },
    { id: '14', name: 'Aditya', email: 'aditya@example.com', role: 'student', studentId: 'STU011' },
    { id: '15', name: 'Akhil', email: 'akhil@example.com', role: 'student', studentId: 'STU012' },
    { id: '16', name: 'Akshat', email: 'akshat@example.com', role: 'student', studentId: 'STU013' },
    { id: '17', name: 'Anil', email: 'anil@example.com', role: 'student', studentId: 'STU014' },
    { id: '18', name: 'Avi', email: 'avi@example.com', role: 'student', studentId: 'STU015' },
    { id: '19', name: 'Balaraam', email: 'balaraam@example.com', role: 'student', studentId: 'STU016' },
    { id: '20', name: 'Bharat', email: 'bharat@example.com', role: 'student', studentId: 'STU017' },
    { id: '21', name: 'Bhaskar', email: 'bhaskar@example.com', role: 'student', studentId: 'STU018' },
    { id: '22', name: 'Bhaumik', email: 'bhaumik@example.com', role: 'student', studentId: 'STU019' },
    { id: '23', name: 'Bijay', email: 'bijay@example.com', role: 'student', studentId: 'STU020' },
    { id: '24', name: 'Brijesh', email: 'brijesh@example.com', role: 'student', studentId: 'STU021' },
    { id: '25', name: 'Chandan', email: 'chandan@example.com', role: 'student', studentId: 'STU022' },
    { id: '26', name: 'Chetan', email: 'chetan@example.com', role: 'student', studentId: 'STU023' },
    { id: '27', name: 'Chirag', email: 'chirag@example.com', role: 'student', studentId: 'STU024' },
    { id: '28', name: 'Chiranjeeve', email: 'chiranjeeve@example.com', role: 'student', studentId: 'STU025' },
    { id: '29', name: 'Daksh', email: 'daksh@example.com', role: 'student', studentId: 'STU026' },
    { id: '30', name: 'Daman', email: 'daman@example.com', role: 'student', studentId: 'STU027' },
    { id: '31', name: 'Depen', email: 'depen@example.com', role: 'student', studentId: 'STU028' },
    { id: '32', name: 'Dev', email: 'dev@example.com', role: 'student', studentId: 'STU029' },
    { id: '33', name: 'Dhruv', email: 'dhruv@example.com', role: 'student', studentId: 'STU030' },
    { id: '34', name: 'Divyanshu', email: 'divyanshu@example.com', role: 'student', studentId: 'STU031' },
    { id: '35', name: 'Ekambar', email: 'ekambar@example.com', role: 'student', studentId: 'STU032' },
    { id: '36', name: 'Ekansh', email: 'ekansh@example.com', role: 'student', studentId: 'STU033' },
    { id: '37', name: 'Ekaraj', email: 'ekaraj@example.com', role: 'student', studentId: 'STU034' },
    { id: '38', name: 'Eklavya', email: 'eklavya@example.com', role: 'student', studentId: 'STU035' },
    { id: '39', name: 'Elilarasan', email: 'elilarasan@example.com', role: 'student', studentId: 'STU036' },
    { id: '40', name: 'Falak', email: 'falak@example.com', role: 'student', studentId: 'STU037' },
    { id: '41', name: 'Gagan', email: 'gagan@example.com', role: 'student', studentId: 'STU038' },
    { id: '42', name: 'Gajendra', email: 'gajendra@example.com', role: 'student', studentId: 'STU039' },
    { id: '43', name: 'Garv', email: 'garv@example.com', role: 'student', studentId: 'STU040' },
    { id: '44', name: 'Gaurav', email: 'gaurav@example.com', role: 'student', studentId: 'STU041' },
    { id: '45', name: 'Gautam', email: 'gautam@example.com', role: 'student', studentId: 'STU042' },
    { id: '46', name: 'Hardik', email: 'hardik@example.com', role: 'student', studentId: 'STU043' },
    { id: '47', name: 'Harsh', email: 'harsh@example.com', role: 'student', studentId: 'STU044' },
    { id: '48', name: 'Hemant', email: 'hemant@example.com', role: 'student', studentId: 'STU045' },
    { id: '49', name: 'Hridaya', email: 'hridaya@example.com', role: 'student', studentId: 'STU046' },
    { id: '50', name: 'Indivar', email: 'indivar@example.com', role: 'student', studentId: 'STU047' },
  ]
};

initializeMockData();

export const api = {

  login: async (email: string, _password: string): Promise<User> => {
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    const user = users.find((u) => u.email === email);
    if (!user) throw new Error('Invalid credentials');
    return user;
  },

  getStudents: async (): Promise<Student[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return students;
  },

  getSubjects: async (): Promise<Subject[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return subjects;
  },

  getAttendanceRecords: async (filters: {
    studentId?: string;
    subjectId?: string;
    startDate?: string;
    endDate?: string;
  }): Promise<AttendanceRecord[]> => {
    await new Promise((resolve) => setTimeout(resolve, 300));

    return attendanceRecords.filter((record) => {
      if (filters.studentId && record.studentId !== filters.studentId) return false;
      if (filters.subjectId && record.subjectId !== filters.subjectId) return false;
      if (filters.startDate && record.date < filters.startDate) return false;
      if (filters.endDate && record.date > filters.endDate) return false;
      return true;
    });
  },

  saveAttendance: async (records: Omit<AttendanceRecord, 'id'>[]): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newRecords = records.map((record) => ({
      ...record,
      id: crypto.randomUUID(),
    }));

    attendanceRecords = [...attendanceRecords, ...newRecords];
  },

  getAttendanceAnalytics: async (filters: {
    subjectId?: string;
    startDate?: string;
    endDate?: string;
  }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const relevantRecords = attendanceRecords.filter((record) => {
      if (filters.subjectId && record.subjectId !== filters.subjectId) return false;
      if (filters.startDate && record.date < filters.startDate) return false;
      if (filters.endDate && record.date > filters.endDate) return false;
      return true;
    });

    const totalRecords = relevantRecords.length;
    const presentRecords = relevantRecords.filter((r) => r.status === 'present').length;

    return {
      totalRecords,
      presentRecords,
      absentRecords: totalRecords - presentRecords,
      attendanceRate: (presentRecords / totalRecords) * 100,
      byStudent: students.map((student) => {
        const studentRecords = relevantRecords.filter((r) => r.studentId === student.id);
        const present = studentRecords.filter((r) => r.status === 'present').length;
        return {
          student,
          total: studentRecords.length,
          present,
          absent: studentRecords.length - present,
          rate: (present / studentRecords.length) * 100,
        };
      }),
      byDate: Object.entries(
        relevantRecords.reduce((acc, record) => {
          if (!acc[record.date]) {
            acc[record.date] = { total: 0, present: 0 };
          }
          acc[record.date].total++;
          if (record.status === 'present') {
            acc[record.date].present++;
          }
          return acc;
        }, {} as Record<string, { total: number; present: number }>)
      ).map(([date, data]) => ({
        date,
        rate: (data.present / data.total) * 100,
      })),
    };
  },
};
