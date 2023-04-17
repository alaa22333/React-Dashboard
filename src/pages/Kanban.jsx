import { useState } from "react";
import { board } from "../utilis/dashboardData";
/* import Board, {
  moveCard,
  moveColumn,
  removeCard,
  addCard,
} from "@asseinfo/react-kanban";

import '@asseinfo/react-kanban/dist/styles.css' */

const Kanban = () => {


  
  /* const [boardData, setBoardData] = useState(
     {
      columns: [
        {
          id: 1,
          title: "Backlog",
          cards: [
            {
              id: 1,
              title: "Database Setup",
              description: "Firebase Integration"
            },
            {
              id: 2,
              title: "Data Flow",
              description: "Setup Diagram with other developers"
            },
          ]
        },
        {
          id: 2,
          title: "TODO",
          cards: [
            {
              id: 9,
              title: "Data Table Page",
              description: "Server side Pagination",
            }
          ]
        },
        {
          id: 3,
          title: "Doing",
          cards: [
            {
              id: 10,
              title: "Full Calendar Extension",
              description: "Make new events and store in global states"
            },
            {
              id: 11,
              title: "Custom Kanban Board",
              description: "Setup react-kanban dep within Dashboard as seperate page"
            }
          ]
        },
        {
          id: 4,
          title: "Completed",
          cards: [
            {
              id: 12,
              title: "Vite Server Setup",
              description: "Configure required modules and starters"
            },
            {
              id: 13,
              title: "Modular structre",
              description: "Write css in form of modules to reduce the naming conflicts"
            }
          ]
        }
      ]
    })

  const handleColumnMove = (_card, source, destination) => {
    const updatedBoard = moveColumn(boardData, source, destination);
    setBoardData(updatedBoard);
  };

  const handleCardMove = (_card, source, destination) => {
    const updatedBoard = moveCard(boardData, source, destination);
   setBoardData(updatedBoard);
  };
  return (
    <div className="content">
      <Board
       
        allowRenameColumn
        allowRemoveCard
        onCardDragEnd={handleCardMove}
        onColumnDragEnd={handleColumnMove}
        
      >{boardData}</Board>
    </div>
  ); */
};

export default Kanban;
