"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronManager = void 0;
const job_1 = require("cron/dist/job");
class CronManager {
    constructor() {
        this.jobs = [];
    }
    addJob(schedule, jobFunction) {
        const job = new job_1.CronJob(schedule, jobFunction);
        this.jobs.push(job);
        job.start();
    }
    stopAllJobs() {
        this.jobs.forEach((job) => job.stop());
    }
}
exports.CronManager = CronManager;
