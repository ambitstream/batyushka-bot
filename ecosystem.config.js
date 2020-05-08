module.exports = {
  apps: [{
    name: "b-bot",
    script: "./app.js",
    instances: 1,
    exec_mode: "cluster"
  }]
}
