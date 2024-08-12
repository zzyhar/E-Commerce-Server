"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CronMannager = void 0;
const job_1 = require("cron/dist/job");
class CronMannager {
    constructor() {
        this.jobs = [];
    }
    addJob(schedule, jobFunction) {
        const job = new job_1.CronJob(schedule, jobFunction);
        this.jobs.push(job);
        job.start();
    }
}
exports.CronMannager = CronMannager;
