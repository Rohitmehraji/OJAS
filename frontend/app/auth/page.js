const methods = ['Email login', 'Google OAuth', 'Phone OTP', '2FA setup', 'Password reset', 'Email verification'];

export default function AuthPage() {
  return (
    <div className="max-w-3xl mx-auto p-8">
      <h2 className="text-2xl font-semibold">Secure Authentication</h2>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        {methods.map((item) => (
          <div key={item} className="bg-white border rounded-xl p-4">{item}</div>
        ))}
      </div>
    </div>
  );
}
