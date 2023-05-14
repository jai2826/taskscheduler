import Link from "next/link"

const navbar = () => {
  return (
    <div className="p-4  bg-blue-200 sticky top-0 ">
        <ul className="flex">
            <li className="rounded-md p-2 mx-2 hover:bg-white"><Link href={'/'}> Schedule </Link></li>
            <li className="rounded-md p-2 mx-2 hover:bg-white"><Link href={'/task/addtask'}> Add Tasks </Link></li>
        </ul>
    </div>
  )
}
export default navbar