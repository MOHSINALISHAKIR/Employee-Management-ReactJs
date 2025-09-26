import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-5 bg-[#1C1C1C] mt-7 rounded">
        <form className="flex flex-wrap items-start justify-between w-full ">
          <div className="w-1/2 bg-[#1C1C1C]">
            <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Make a title" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Employee name" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Design Or Dev" />
          </div>
          </div>
          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent  border border-gray-500" name="" id="" cols="30" rows="10"></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-800 rounded mt-4 w-full">Create Task</button>

          </div>
          
        </form>
      </div>
  )
}

export default CreateTask