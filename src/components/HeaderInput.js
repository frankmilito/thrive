import React from "react"

const HeaderInput = ({userInput, setUserInput}) => {
  return (
    <div class="text-center mb-20">
      <div class="flex justify-center">
        <img
          class="h-64  rounded-lg object-cover"
          src="https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png"
          alt="bird avatar"
        />
      </div>

      <h2 class="mt-10 mb-5 text-5xl font-bold font-heading text-indigo-300">
        GitHub User Finder
      </h2>
      <div className="mt-1 flex justify-center">
        <input
          type="text"
          name="email"
          id="email"
          className="shadow-sm text-center focus:ring-indigo-500 p-2 focus:border-indigo-500  sm:text-sm border-gray-300 w-full rounded-md lg:w-1/2"
          placeholder="Search For User"
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
        />
      </div>
    </div>
  )
}

export default HeaderInput
