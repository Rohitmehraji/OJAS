export default function StatCard({ label, value, helper }) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-sm border border-slate-200">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-semibold mt-1">{value}</p>
      {helper ? <p className="text-xs text-slate-400 mt-2">{helper}</p> : null}
    </div>
  );
}
