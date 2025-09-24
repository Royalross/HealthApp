'use client';

import AppointmentScheduler from '@/app/appointments/AppointmentScheduler';
import MyAppointmentsList from '@/app/appointments/MyAppointmentsList';
import { useAuth } from '@/app/providers/AuthProvider';
import { Card, CardContent } from '@/components/ui/card';

export default function PatientDashboardPage() {
  const { user, loading } = useAuth();

  return (
    <div className="">
      <div className="space-y-3 md:col-span-1">
        <h2 className="text-base font-semibold">Book an Appointment</h2>
        <AppointmentScheduler />
      </div>

      <div className="">
        {loading ? (
          <Card className="h-full">
            <CardContent className="text-muted-foreground p-6 text-sm">Loading…</CardContent>
          </Card>
        ) : user?.id ? (
          <MyAppointmentsList meId={user.id} />
        ) : (
          <Card className="h-full">
            <CardContent className="text-muted-foreground p-6 text-sm">
              Sign in to view your appointments.
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
