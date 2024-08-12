import { CronJob } from 'cron/dist/job'

export class CronMannager {
  private jobs: CronJob[] = []

  public addJob(schedule: string, jobFunction: () => void): void {
    const job = new CronJob(schedule, jobFunction)
    this.jobs.push(job)
    job.start()
  }
}
