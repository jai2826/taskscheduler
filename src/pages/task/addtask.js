import AppContext from "@/components/AppContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Addtask = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const { tasks, setTasks } = context;
  const [timeRange, setTimeRange] = useState({
    start: "00:00",
    end: "00:00",
  });
  const [taskmsg, setTaskmsg] = useState("");
  const handleStartTime = async (e) => {
    setTimeRange((prev) => ({
      ...prev,
      start: e.target.value,
    }));
  };
  const handleEndTime = async (e) => {
    setTimeRange((prev) => ({
      ...prev,
      end: e.target.value,
    }));
  };
  const handleTask = async (e) => {
    setTaskmsg(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const length = tasks == null ? 0 : tasks.length + 1;
    const randomNum = Math.random()*1000000;
    const data = {
      id: Math.floor(randomNum),
      time: timeRange.start + " - " + timeRange.end,
      msg: taskmsg,
    };
    setTasks((prev) => [...prev, data]);
    router.push("/");
  };

  return (
    <div className=" h-screen w-full p-1 md:p-10 border justify-center flex pt-8 md:pt-12 lg:pt-16">
      <form
        className="flex flex-col h-full md:w-4/5  w-full border p-8 lg:p-10 rounded-md items-center space-y-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="space-y-2 flex flex-col w-full  lg:w-3/5 items-start">
          <h1 className="text-2xl font-semibold">Enter the Time</h1>
          <div className="flex flex-col md:flex-row md:space-x-6 items-start">
            <div className="flex space-x-4 h-fit ">
              <label className="w-20" htmlFor="starttime">
                Start Time
              </label>
              <input
                className="border w-20"
                type="time"
                name="starttime"
                onChange={(e) => handleStartTime(e)}
              />
            </div>
            <div className="flex space-x-4 h-fit">
              <label className="w-20" htmlFor="endtime">
                End Time
              </label>
              <input
                className="border w-20"
                onChange={(e) => handleEndTime(e)}
                type="time"
                name="endtime"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col w-full  lg:w-3/5 items-start">
          <label htmlFor="task" className="text-2xl font-semibold ">
            Enter the Name of the Task
          </label>
          <textarea
            className="border w-full h-20"
            onChange={(e) => handleTask(e)}
            name="task"
            
          />
        </div>
        <button
          className="hover bg-blue-200 border rounded-md py-2 px-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Addtask;
