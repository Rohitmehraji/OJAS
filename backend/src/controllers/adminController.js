export const adminController = {
  overview(req, res) {
    return res.json({
      users: 120340,
      teachersPendingApproval: 138,
      grossRevenue: 980000,
      activeLiveClasses: 3140
    });
  },
  moderateTeacher(req, res) {
    return res.json({ message: 'Teacher review status updated', payload: req.body });
  },
  analytics(req, res) {
    return res.json({
      retention: 0.67,
      conversionRate: 0.14,
      regions: ['NA', 'EU', 'APAC', 'LATAM']
    });
  }
};
