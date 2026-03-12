export const marketplaceController = {
  home(req, res) {
    return res.json({
      trendingCourses: ['AI for Kids', 'Public Speaking Mastery', 'Full Stack Bootcamp'],
      topTeachers: ['Mia Chen', 'David Osei'],
      categories: ['Coding', 'Language', 'Music', 'Business'],
      skillTracks: ['K-12 Coding', 'Career Switch to Tech', 'English Fluency'],
      featuredMentors: ['Sofia Alvarez', 'Kenji Tanaka']
    });
  }
};
