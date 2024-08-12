"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cron = void 0;
const job_1 = require("cron/dist/job");
class Cron {
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
exports.Cron = Cron;
