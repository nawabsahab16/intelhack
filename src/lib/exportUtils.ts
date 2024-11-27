import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { Student, AttendanceRecord } from '../types';

export function exportToPDF(
  students: Student[],
  attendance: Record<string, boolean>,
  date: string,
  subject: string
) {
  const doc = new jsPDF();

  doc.setFontSize(20);
  doc.text('Attendance Report', 20, 20);

  doc.setFontSize(12);
  doc.text(`Subject: ${subject}`, 20, 35);
  doc.text(`Date: ${new Date(date).toLocaleDateString()}`, 20, 45);

  const tableData = students.map((student) => [
    student.studentId,
    student.name,
    attendance[student.id] ? 'Present' : 'Absent',
  ]);

  (doc as any).autoTable({
    head: [['Student ID', 'Name', 'Status']],
    body: tableData,
    startY: 60,
    theme: 'grid',
    styles: { fontSize: 10 },
    headStyles: { fillColor: [14, 165, 233] },
  });

  doc.save(`attendance-report-${date}.pdf`);
}

export function exportToExcel(
  students: Student[],
  records: AttendanceRecord[],
  subject: string
) {
  const worksheet = XLSX.utils.aoa_to_sheet([
    ['Attendance Report'],
    ['Subject:', subject],
    [],
    ['Student ID', 'Name', 'Total Classes', 'Present', 'Absent', 'Percentage'],
  ]);

  const data = students.map((student) => {
    const studentRecords = records.filter((r) => r.studentId === student.id);
    const totalClasses = studentRecords.length;
    const presentCount = studentRecords.filter(
      (r) => r.status === 'present'
    ).length;
    const absentCount = totalClasses - presentCount;
    const percentage = ((presentCount / totalClasses) * 100).toFixed(2);

    return [
      student.studentId,
      student.name,
      totalClasses,
      presentCount,
      absentCount,
      `${percentage}%`,
    ];
  });

  XLSX.utils.sheet_add_aoa(worksheet, data, { origin: 'A5' });

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Attendance');

  XLSX.writeFile(workbook, `attendance-report-${subject}.xlsx`);
}