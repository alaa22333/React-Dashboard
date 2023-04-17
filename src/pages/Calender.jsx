import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { formatDate } from "@fullcalendar/core";
import { scheduleData } from "../utilis/dashboardData";
import { Box } from "@mui/system";
import { Card, Typography } from "@material-tailwind/react";
import { createEventId } from "../utilis/dashboardData";
import useAuth from "../custom-hooks/useAuth";
import { NavBar } from "../Components";
import { useStateContext } from "../Contexts/stateContext";
import "aos/dist/aos.css";
import Aos from "aos";

const Calender = () => {
  const [currentEvents, setCurrentEvents] = React.useState(null);
 useEffect(() => {
      Aos.init({ delay: 200, duration: 1500 });
    }, []);
    const handleWindowResize = () => {
      const calendar = calendarComponentRef.current.getApi();
      calendar.changeView(window.innerWidth < 765 ? 'listWeek' : 'dayGridMonth');
      calendar.setOption('header', getHeaderProps());  
  };
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();
   
    if (title) {
      let event = {
        id: createEventId(),
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };
      calendarApi.addEvent(event);
      localStorage.setItem("data", JSON.stringify([...scheduleData, event]));
    }
  };
  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
      let arr = JSON.parse(localStorage.getItem("data"));
      const newArr = arr.filter((item) => item.id !== selected.event.id);
      localStorage.setItem("data", JSON.stringify(newArr));
    }
  };
  const { currentUser } = useAuth();
  const { colorTheme } = useStateContext();

  return (
    <>
      {currentUser && (
        <div>
          <NavBar name="Calendar" type="Apps" />
        </div>
      )}
      <div
        className="content  "
        data-aos="fade-up"
      
      >
        <Typography
          variant="h3"
          className=" pb-5 dark:text-white "
          style={{ color: colorTheme }}
        >
          Calendar
        </Typography>
        <Card className="  py-4 px-1  ">
          <Box
            sx={{
              "& .fc-v-event .fc-direction-ltr  ": {
             
                color: "#1e293b",
                fontFamily: "poppins",
                background: "#1e293b",
              },
              "&.fc-event-title": {
                fontWeight: "400",
                
              }
            
            }}
          >
            <FullCalendar
              height="70vh"
              defaultView={window.innerWidth < 765 ? 'listWeek' : 'dayGridMonth'}
              views={{
                listWeek: { buttonText: 'week' }
            }}
            windowResize={handleWindowResize}
              plugins={[
                dayGridPlugin,
                timeGridPlugin,
                interactionPlugin,
                listPlugin,
              ]}
              headerToolbar={{
                left: "prev,next today",
                center: "title",
                right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
              }}
              allDaySlot={false}
              initialView="timeGridWeek"
              slotDuration={"01:00:00"}
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              initialEvents={
                JSON.parse(localStorage.getItem("data")) || scheduleData
              }
              eventsSet={(events) => {
                setCurrentEvents(events);
              }}
            />
          </Box>
        </Card>
      </div>
    </>
  );
};

export default Calender;
