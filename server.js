const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

// Basic API endpoint
app.get('/api/status', (req, res) => {
  res.json({ status: 'up', message: 'Demo Node App is running smooth!' });
});

// Start server if main module
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;
