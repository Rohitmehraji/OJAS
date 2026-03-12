export const studentController = {
  dashboard(req, res) {
    return res.json({
      enrolledCourses: 9,
      liveClassesToday: 2,
      completedAssignments: 31,
      certificates: 4
    });
  },
  discoverTeachers(req, res) {
    return res.json({
      filters: req.query,
      teachers: [
        { id: 't_001', name: 'Aarav Sharma', skills: ['Math', 'Coding'], rating: 4.8 },
        { id: 't_002', name: 'Mia Chen', skills: ['Robotics', 'Python'], rating: 4.9 }
      ]
    });
  },
  bookClass(req, res) {
    return res.status(201).json({ message: '1-to-1 class booked', booking: req.body });
  }
};
