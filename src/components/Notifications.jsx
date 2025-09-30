import React from 'react'

const Notifications = ({count,onClick}) => {
  return (
    <div>
      <button onClick={onClick} className="p-2 bg-white border border-darkgreywhite hover:bg-gray-100 w-50 h-50 flex justify-center items-center rounded-full transition-colors">
             <img width={21} height={21} src={"src/assets/icons/notification_icon.svg"} alt="Notifications"/>
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {count}
            </span>
          </button>
    </div>
  )
}

export default Notifications
