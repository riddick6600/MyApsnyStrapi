module.exports = {
  apps: [
    {
      name: "MyApsnyStrapi",
      cwd: "/var/www/html/MyApsnyStrapi/",
      script: "npm start",
      autorestart: true,
      env: {
        PORT: "1337",
        NODE_ENV: "production",
      },
    },
  ],
};
