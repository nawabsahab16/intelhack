import { useState } from 'react';
import { Student, AttendanceRecord } from '../types';

export function useAttendance(students: Student[]) {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  
  const [attendance, setAttendance] = useState<Record<string, boolean>>(() =>
    students.reduce((acc, student) => {
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

  const handleDateChange = (date: string) => {
    setSelectedDate(date);
  
    setAttendance(
      students.reduce((acc, student) => {
        acc[student.id] = false;
        return acc;
      }, {} as Record<string, boolean>)
    );
  };

  const handleSaveAttendance = async () => {
   
    const attendanceRecords: AttendanceRecord[] = Object.entries(attendance).map(
      ([studentId, isPresent]) => ({
        id: crypto.randomUUID(),
        studentId,
        subjectId: '1', 
        date: selectedDate,
        status: isPresent ? 'present' : 'absent',
        markedBy: 'teacher-id', 
      })
    );

    console.log('Saving attendance records:', attendanceRecords);
  
  };

  return {
    selectedDate,
    attendance,
    handleToggleAttendance,
    handleDateChange,
    handleSaveAttendance,
  };
}