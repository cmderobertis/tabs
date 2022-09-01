import React, { useState } from "react"

const Tabs = (props) => {
  const { setContent } = props
  const tabArr = ["Cam", "Nis", "Yosh", "Ken"]
  const contentArr = [
    "Coding is cool",
    "RegEx is awesome",
    "Try MongoDB",
    "I finished the MERN stack in O(logn) time",
  ]
  const [tabs, setTabs] = useState(tabArr)

  const handleClick = (e, index) => {
    setContent(contentArr[index])
  }

  return (
    <>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className="btn mb-2"
          onClick={(e) => handleClick(e, index)}
        >
          {tab}
        </button>
      ))}
    </>
  )
}

export default Tabs
