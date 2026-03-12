import StatCard from '../../components/StatCard';

const features = [
  'Search teachers', 'Browse courses', 'Book 1-to-1 classes', 'Join live classes', 'Purchase courses',
  'Chat with teachers', 'Track progress', 'Download resources', 'Get certificates'
];

export default function StudentPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Student Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard label="Enrolled Courses" value="9" />
        <StatCard label="Live Classes Today" value="2" />
        <StatCard label="Assignments Done" value="31" />
        <StatCard label="Certificates" value="4" />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {features.map((feature) => <div key={feature} className="bg-white border rounded-xl p-4">{feature}</div>)}
      </div>
    </div>
  );
}
