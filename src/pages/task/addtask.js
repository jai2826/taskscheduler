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

    const data = {
      id: tasks.length || 0 + 1,
      time: timeRange.start + " - " + timeRange.end,
      msg: taskmsg,
    };
    setTasks((prev) => [...prev, data]);
    router.push("/");
  };

  return (
    <div className=" h-screen w-full p-10 border justify-center flex pt-20">
      <form
        className="flex flex-col h-full w-4/5  border p-10 rounded-md items-center space-y-10"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="space-y-2 flex flex-col w-2/5">
          <h1 className="text-2xl font-semibold">Enter the Time</h1>
          <div className="flex space-x-6 items-center">
            <div className="flex space-x-4 h-fit ">
              <label htmlFor="starttime">Start Time</label>
              <input
                className="border"
                type="time"
                name="starttime"
                onChange={(e) => handleStartTime(e)}
              />
            </div>
            <div className="flex space-x-4 h-fit">
              <label htmlFor="endtime">End Time</label>
              <input
                className="border"
                onChange={(e) => handleEndTime(e)}
                type="time"
                name="endtime"
              />
            </div>
          </div>
        </div>
        <div className="space-y-2 flex flex-col justify-items-start w-2/5">
          <label htmlFor="task" className="text-2xl font-semibold ">
            Enter the Task
          </label>
          <div className="flex space-x-4 h-fit">
            <textarea
              className="border w-full"
              onChange={(e) => handleTask(e)}
              name="task"
            />
          </div>
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
