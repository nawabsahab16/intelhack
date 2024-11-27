import { useQuery } from '@tanstack/react-query';
import { api } from '../lib/api';

export function useAnalytics(filters: {
  subjectId?: string;
  startDate?: string;
  endDate?: string;
}) {
  return useQuery({
    queryKey: ['analytics', filters],
    queryFn: () => api.getAttendanceAnalytics(filters),
  });
}