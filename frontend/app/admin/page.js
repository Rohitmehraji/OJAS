import StatCard from '../../components/StatCard';

const controls = ['Users', 'Courses', 'Teachers', 'Payments', 'Reports', 'Platform analytics'];

export default function AdminPage() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6">
      <h2 className="text-3xl font-bold">Admin Panel</h2>
      <div className="grid md:grid-cols-4 gap-4">
        <StatCard label="Total Users" value="120,340" />
        <StatCard label="Pending Teachers" value="138" />
        <StatCard label="Gross Revenue" value="$980K" />
        <StatCard label="Active Live Classes" value="3,140" />
      </div>
      <div className="grid md:grid-cols-3 gap-3">
        {controls.map((control) => <div key={control} className="bg-white border rounded-xl p-4">{control}</div>)}
      </div>
    </div>
  );
}
