const express = require("express");
const client = require("prom-client");

const app = express();
const PORT = 3000;

/* ===============================
   Prometheus Metrics Setup
================================*/

// Create registry
const register = new client.Registry();

// Collect default system metrics
client.collectDefaultMetrics({
    register
});

// Custom HTTP request counter
const httpRequestCounter = new client.Counter({
    name: "http_requests_total",
    help: "Total number of HTTP requests",
    labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestCounter);


/* ===============================
   Routes
================================*/

app.get("/", (req, res) => {
    httpRequestCounter.inc({
        method: req.method,
        route: "/",
        status: 200
    });

    res.send("Mini DevOps Project Running 🚀");
});


/* Prometheus Metrics Endpoint */
app.get("/metrics", async (req, res) => {
    res.set("Content-Type", register.contentType);
    res.end(await register.metrics());
});


/* ===============================
   Server Start
================================*/

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});