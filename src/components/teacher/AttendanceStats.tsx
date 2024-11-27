
import { Card } from '../ui/Card';
import { Users, UserCheck, UserX, Percent } from 'lucide-react';
import { calculateAttendancePercentage } from '../../lib/utils';

interface AttendanceStatsProps {
  totalStudents: number;
  presentCount: number;
  absentCount: number;
}

export function AttendanceStats({
  totalStudents,
  presentCount,
  absentCount,
}: AttendanceStatsProps) {
  const attendancePercentage = calculateAttendancePercentage(presentCount, totalStudents);

  const stats = [
    {
      label: 'Total Students',
      value: totalStudents,
      icon: Users,
      color: 'text-blue-500',
    },
    {
      label: 'Present Today',
      value: presentCount,
      icon: UserCheck,
      color: 'text-green-500',
    },
    {
      label: 'Absent Today',
      value: absentCount,
      icon: UserX,
      color: 'text-red-500',
    },
    {
      label: 'Attendance Rate',
      value: `${attendancePercentage}%`,
      icon: Percent,
      color: 'text-purple-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex items-center p-4">
          <div className={`p-3 rounded-full ${stat.color} bg-opacity-10`}>
            <stat.icon className={`h-6 w-6 ${stat.color}`} />
          </div>
          <div className="ml-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stat.label}
            </p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}