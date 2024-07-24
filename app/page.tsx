
import JobCard from "./_components/JobCard";
import { IoMdNotifications, IoMdSearch } from "react-icons/io";
import JobDetailCard from "./_components/JobDetailCard";
import { ImPower } from "react-icons/im";
import NavBar from "./_components/NavBar";
import JobList from "./_components/JobList";
import { BsStars } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

export default async function Home() {
  const jobs: Job[] = await fetch('https://job.kunjappu.online/api/portal-jobs').then((res) => res.json());


  // const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  return (
    <div className="w-[100vw] h-[100vh] bg-white p-6 overflow-hidden ">
      <NavBar />
      <div className='flex flex-col gap-3 text-center h-full'>
        <div className="w-full px-96 flex flex-row gap-1">
          <div className=" flex flex-row items-center bg-gray-100 p-1 rounded-tl-3xl rounded-bl-3xl h-10 w-2/3 mb-3">
            <span className="text-gray-400 mr-2 text-lg">
              <IoMdSearch className='ml-1' />
            </span>
            <input
              type="text"
              className="bg-transparent outline-none text-gray-900 text-sm placeholder-gray-400 w-full"
              placeholder="Search jobs here..."
            />
          </div>
          <div className=" flex flex-row items-center bg-gray-100 py-1 px-3 rounded-tr-3xl rounded-br-3xl h-10 w-1/3 mb-3 text-sm text-gray-400">
            <span className="text-gray-400 mr-2 text-lg">
              <IoLocationOutline />
            </span>
            Location
          </div>


        </div>
        {/* <button className="text-black bg-gray-100 p-2 rounded-lg w-20">Add Job</button> */}

        <h1 className='text-sm flex flex-row text-green-700 font-medium text-center justify-center items-center mb-2'>
          <span className="text-green-700 mr-2 text-xs"><ImPower /></span>
          Upload your CV-let employers find you
        </h1>
        <div className="flex flex-row justify-between">
          <div className='w-full flex font-semibold justify-center flex-row text-sm gap-6 items-center text-black'>
            <div className="text-black flex flex-row gap-1 items-center"><span>< BsStars /></span>For you</div>
            <p>Search</p>
            <p>Your Activity</p>
          </div>

        </div>
        <hr className='w-full' />
        <div className="flex flex-row w-full gap-5 h-full overflow-hidden px-20 pt-3">
          {/* <div className="flex flex-col w-1/3 h-full gap-3 overflow-y-auto pb-20">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} selectedJob={selectedJob} setSelectedJob={setSelectedJob} />
            ))}
          </div> */}
          <JobList jobs={jobs} />
          <div className="flex flex-col h-full w-2/3 ">
            <JobDetailCard job={jobs[2]} key={jobs[2].id} />
          </div>
        </div>
      </div>
    </div>
  );
}
