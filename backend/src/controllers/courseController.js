export const courseController = {
  list(req, res) {
    return res.json({
      filters: req.query,
      courses: [
        { id: 'c_101', type: 'live', title: 'Python Foundations' },
        { id: 'c_102', type: 'recorded', title: 'UI/UX Design Sprint' }
      ]
    });
  },
  create(req, res) {
    return res.status(201).json({ message: 'Course created', course: req.body });
  }
};
