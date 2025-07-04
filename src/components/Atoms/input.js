import React from "react"

const Input = ({ placeholder, onChange, type, name, value, required }) => {
  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required={required}
      className="px-2 py-2 rounded-lg bg-bg bg-opacity-20 border-transparent flex-1 appearance-none text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-purple focus:border-transparent sm:width-full md:width-full xxs:text-sm"
    ></input>
  )
}

export default Input
