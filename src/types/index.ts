export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'teacher';
  department?: string;
  studentId?: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  department: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  teacher: string;
  semester: number;
}

export interface AttendanceRecord {
  id: string;
  studentId: string;
  subjectId: string;
  date: string;
  status: 'present' | 'absent';
  markedBy: string;
}