import StatCard from '../../components/StatCard';

const actions = [
  'Create courses', 'Schedule live classes', 'Upload recorded lessons', 'Track student progress',
  'Manage bookings', 'View earnings', 'Withdraw money', 'Chat with students', 'Create assignments', 'Manage course materials'
];

export default function TeacherPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Teacher Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard label="Monthly Earnings" value="$4,820" helper="80% revenue share" />
        <StatCard label="Active Courses" value="5" />
        <StatCard label="Upcoming Classes" value="12" />
        <StatCard label="New Messages" value="9" />
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        {actions.map((action) => <div key={action} className="bg-white border rounded-xl p-4">{action}</div>)}
      </div>
    </div>
  );
}
