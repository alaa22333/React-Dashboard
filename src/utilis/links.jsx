
import { AiOutlineShoppingCart,AiOutlineCalendar,AiOutlineStock,AiOutlineAreaChart,AiOutlineBarChart} from 'react-icons/ai'
import { IoMdContacts} from 'react-icons/io'
import { RiContactsLine} from 'react-icons/ri'
import { BsKanban} from 'react-icons/bs'
import { GiLouvrePyramid} from 'react-icons/gi'
import {FiHome, FiPieChart}from 'react-icons/fi'
import {FaUserFriends}from'react-icons/fa'
import {MdLogin}from 'react-icons/md'

export const links = [   
  {links:[{name:'Dashboard',icon:<FiHome/>}]},
    {
      title: 'Pages',
      links: [
        {
          name: 'orders',
          icon: < AiOutlineShoppingCart />,
        },
        {
          name: 'employees',
          icon: <IoMdContacts />,
        },
        {
          name: 'Users',
          icon: <RiContactsLine />,
        },
      
          
          
            {
              name: 'Charts',
              icon: <AiOutlineStock />,
            },
           
         
      ],
    },
    {
      title: 'Apps',
      links: [
        {
          name: 'calendar',
          icon: < AiOutlineCalendar />,
        },
      
        
       
      ],
    },
   
    {
      title: 'User',
      links: [
        {
          name: 'Log Out',
          icon: <MdLogin/>,
        },
       
      ],
    },
  ];