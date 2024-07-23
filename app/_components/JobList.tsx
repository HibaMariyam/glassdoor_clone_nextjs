'use client'
import React, { useState } from 'react'
import JobCard from './JobCard';

const JobList = ({
    jobs
}: {
    jobs: Job[]
}) => {

    const [selectedJob, setSelectedJob] = useState<Job | null>(null)
    return (

        <div className="flex flex-col w-1/3 h-full gap-3 overflow-y-auto pb-20">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            ))}
        </div>
    )
}

export default JobList
