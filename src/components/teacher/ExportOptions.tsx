import { FileDown } from 'lucide-react';
import { exportToPDF, exportToExcel } from '../../lib/exportUtils';
import { Student, AttendanceRecord } from '../../types';

interface ExportOptionsProps {
  students: Student[];
  attendance: Record<string, boolean>;
  records: AttendanceRecord[];
  date: string;
  subject: string;
}

export function ExportOptions({
  students,
  attendance,
  records,
  date,
  subject,
}: ExportOptionsProps) {
  return (
    <div className="flex gap-4">
      <button
        onClick={() => exportToPDF(students, attendance, date, subject)}
        className="flex items-center gap-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
      >
        <FileDown className="h-4 w-4" />
        Export PDF
      </button>
      <button
        onClick={() => exportToExcel(students, records, subject)}
        className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
      >
        <FileDown className="h-4 w-4" />
        Export Excel
      </button>
    </div>
  );
}