import AppContext from "@/components/AppContext";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

const Tasks = () => {
  const router = useRouter();
  const context = useContext(AppContext);
  const { tasks, setTasks } = context;
  const [data, setData] = useState()
  useEffect(() => {
    let testdata = tasks.find((item) => item.id == router.query.id);
    setData(testdata)
  }, [])
  

  const deleteTask = (id) => {
    const updatedArray = tasks.filter(obj => obj.id !== id);
    setTasks(updatedArray);
    router.push('/');
  };

  return (
    <div className="flex flex-col border h-screen  bg-white items-center">
      <div className="flex flex-col w-full  sm:w-3/5 items-center justify-center border p-10 pt-20 mt-10">
        <div className="w-full lg:w-4/5 flex sm:flex-row flex-col items-center justify-start">
          <h1 className="sm:w-2/3 lg:w-1/2 font-semibold text-xl">Id of the task :</h1>
          {data && <p className="  ">{data.id}</p>}
        </div>
        <div className="w-full lg:w-4/5 flex  sm:flex-row flex-col items-center justify-start">
          <h1 className="sm:w-2/3 lg:w-1/2 font-semibold text-xl">
            Timing of the task :
          </h1>
          {data && <p className="  lg:w-1/2">{data.time}</p>}
        </div>
        <div className="w-full lg:w-4/5 flex  sm:flex-row flex-col items-center justify-start">
          <h1 className="sm:w-2/3 lg:w-1/2 font-semibold text-xl">The task :</h1>
          {data && <p className="  lg:w-1/2">{data.msg}</p>}
        </div>
      <button className="border px-4 py-2 hover:bg-blue-200 my-4 rounded-md" onClick={()=>deleteTask(data.id)}>Delete</button>
      </div>
    </div>
  );
};
export default Tasks;
