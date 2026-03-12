export const paymentController = {
  checkout(req, res) {
    return res.json({ message: 'Checkout session created', gateways: ['stripe', 'razorpay', 'paypal'] });
  },
  payout(req, res) {
    return res.json({ message: 'Withdrawal request submitted', split: { teacher: 80, platform: 20 } });
  }
};
