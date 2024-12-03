import React from 'react';
import '../App.css';
import three_dot_menu from '../assets/three_dot_menu.svg';
import Img_High_priority from '../assets/Img_High_Priority.svg'
import Img_Low_Priority from '../assets/Img_Low_Priority.svg'
import Img_Medium_Priority from '../assets/Img_Medium_Priority.svg'
import no_priority from '../assets/No-priority.svg'
import urgent_priority from '../assets/SVG_Urgent_Priority_grey.svg'
import add from '../assets/add.svg';
import to_do from '../assets/To-do.svg';
import backlog from '../assets/Backlog.svg';
import in_progress from '../assets/in-progress.svg';
import done from '../assets/Done.svg';

const priorityColors = {
  'Urgent': '#d9534f',  // Urgent - Red
  'High': '#f8d7da',  // High - Light Red
  'Medium': '#fff3cd',  // Medium - Yellow
  'Low': '#d4edda',  // Low - Green
  'No priority': '#ccc',     // No priority - Grey
};

const priorityLogoMap = {
  "Urgent": urgent_priority,
  "High": Img_High_priority,
  "Medium": Img_Medium_Priority,
  "Low": Img_Low_Priority,
  "No priority": no_priority,
}
const priorityMap = {
  4: 'Urgent',
  3: 'High',
  2: 'Medium',
  1: 'Low',
  0: 'No priority',
};

const statusMap = {
  "Todo": 1,
  "In progress": 2,
  "Backlog": 3,
  "Done": 4,
}
const statusLogoMap = {
  "Todo": to_do,
  "In progress": in_progress,
  "Backlog": backlog,
  "Done": done
}



const TicketCard = ({ ticket, header }) => {
  // console.log("ticket: -------", ticket, header)
  return (
    <div
      className="ticket-card"
      style={{ borderLeft: `5px solid ${priorityColors[ticket.priority]}` }}
    >
      <span className='ticket-id'>{ticket.id} </span>
      <span className='ticket-title'>
        {!statusMap[header] && <img src={statusLogoMap[ticket.status]} alt="Services Icon" className="priority" />}
        {ticket.title}
      </span>
      <div className='ticket-tags'>

        <img src={priorityMap[header] ? three_dot_menu : priorityLogoMap[ticket.priority]} alt="Services Icon" className="priority" />
        {ticket.tag.map((tag) => (
          <span className='tag'>{tag}</span>
        ))}
      </div>
      {/* <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p> */}
    </div>
  );
};

export default TicketCard;
