import React from 'react';
import "./DropdownComponent.scss";
import Todo from "../../assets/images/icon-todo.svg"
import Calendar from "../../assets/images/icon-calendar.svg"
import Reminder from "../../assets/images/icon-reminders.svg"
import Planning from "../../assets/images/icon-planning.svg"

const DropdownComponent = ({ index }) => {
  return (
    <>
      {
        index == 1 &&
        <ul className='dropdown-list'>
          <li className='dropdown-item'><span><img src={Todo} alt="Todo" /></span>Todo List</li>
          <li className='dropdown-item'><span><img src={Calendar} alt="Calendar" /></span>Calender</li>
          <li className='dropdown-item'><span><img src={Reminder} alt="Reminder" /></span>Reminders</li>
          <li className='dropdown-item'><span><img src={Planning} alt="Planning" /></span>Planning</li>
        </ul>
      }
      {
        index == 2 &&
        <ul className='dropdown-list'>
          <li className='dropdown-item'>History</li>
          <li className='dropdown-item'>Our Team</li>
          <li className='dropdown-item'>Blog</li>
        </ul>
      }
    </>
  )
}

export default DropdownComponent