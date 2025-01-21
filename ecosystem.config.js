module.exports = {
  apps: [
    {
      name: 'back',       // The name of your app
      script: 'npm start',          // Command to start serving the React app (using 'serve')
      args: '-l 3001', // Arguments to serve the 'build' folder on port 3000
      env: {
        NODE_ENV: 'production', // Set the environment to production
      },
      log_date_format: 'YYYY-MM-DD HH:mm Z',
    },
  ],
};
