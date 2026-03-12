export const liveController = {
  createSession(req, res) {
    return res.status(201).json({
      message: 'Live classroom session created',
      capabilities: ['video', 'screen-share', 'whiteboard', 'code-editor', 'chat', 'polls', 'recording']
    });
  }
};
