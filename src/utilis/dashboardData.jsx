import { FaCircle, FaGlobeAfrica, FaUserFriends } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdAdsClick } from "react-icons/md";
import { HiShoppingCart, HiCurrencyDollar } from "react-icons/hi2";
import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { Avatar } from "@mui/material";
import { Button } from "@material-tailwind/react";
import avatar from "../assets/avatar.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.jpg";
export const themeColors = [
  {
    name: 'blueTheme',
    color: '#3b82f6',
  },
  {
    name: 'greenTheme',
    color: '#059669',
  },
  {
    name: 'purpleTheme',
    color: '#5b21b6',
  },
  {
    name: 'redTheme',
    color: '#881337',
  },
  {
    name: 'indigoTheme',
    color: '#dc2626',
  },
  {
    color: '#db2777',
    name: 'pink',
  },
];
export const todaysData = [
  {
    title: "Today's Money",
    price: "$53,000",
    percentage: "+55%",
    status: "green",
    icon: <HiCurrencyDollar />,
  },
  {
    title: "Today's Users",
    price: "2,300 ",
    percentage: "+3%",
    status: "green",
    icon: <FaGlobeAfrica />,
  },
  {
    title: "New Clients",
    price: "+3,462 ",
    percentage: " -2%",
    status: "red",
    icon: <MdOutlineWorkspacePremium />,
  },
  {
    title: "Sales",
    price: "$103,430  ",
    percentage: " +5%",
    status: "green",
    icon: <HiShoppingCart />,
  },
];
export const barChartData = {
  items: [
    {
      icon: { color: "primary", ele: <FaUserFriends /> },
      label: "users",
      progress: { content: "36K", percentage: 60 },
    },
    {
      icon: { color: "pink", ele: <MdAdsClick /> },
      label: "clicks",
      progress: { content: "2M", percentage: 90 },
    },
    {
      icon: { color: "orange", ele: <HiShoppingCart /> },
      label: "sales",
      progress: { content: "$435", percentage: 30 },
    },
    {
      icon: { color: "red", ele: <IoExtensionPuzzleSharp /> },
      label: "items",
      progress: { content: "43", percentage: 50 },
    },
  ],
};
export const dataBar = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

  datasets: [
    {
      label: "Sales",
      backgroundColor: "#000",
      borderColor: "#fff",
      borderWidth: 1,
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "#fff",
      maxBarThickness: 10,
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
    },
  ],
};
export const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 500,
        beginAtZero: true,
        padding: 15,
        font: {
          size: 14,
          family: "Roboto",
          style: "normal",
          lineHeight: 2,
        },
        color: "#fff",
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

export const lineChartData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Mobile apps",
      borderColor: "#ec4899",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      tension: 0.5,
      pointRadius: 0,
      borderWidth: 3,
      fill:false,
      maxBarThickness: 6,
      backgroundColor: "#1e293b",
    },
    {
      label: "Websites",
      borderColor: "#3b82f6",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
      fill: false,
      maxBarThickness: 6,
      backgroundColor: "#ec4899",
    },
  ],
};

export const optionsLine = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  interaction: {
    intersect: false,
    mode: "index",
  },
  scales: {
    y: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: false,
        borderDash: [5, 5],
      },
      ticks: {
        display: true,
        padding: 10,
        color: "#3b82f6",
        font: {
          size: 11,
          family: "poppins",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
    x: {
      grid: {
        drawBorder: false,
        display: true,
        drawOnChartArea: true,
        drawTicks: true,
        borderDash: [5, 5],
        innerHeight:'100vh'
      },
      ticks: {
        display: true,
        color: "#3b82f6",
        padding: 10,
        font: {
          size: 11,
          family: "poppins",
          style: "normal",
          lineHeight: 2,
        },
      },
    },
  },
};
//orders data
export const columnsOrders = [
  {
    field: "OrderItems",
    headerName: "Product",
    width: 350,
    renderCell: (params) => {
   
      return (
        <div className="flex gap-3 text-primary  items-center">
          <span className="w-9 h-8 rounded-full">
            <Avatar src={params.row.ProductImage} />
          </span>
          {params.row.OrderItems}
        </div>
      );
    },
    headerAlign: "left",
  },
  {
    field: "CustomerName",
    headerName: "Name",
    width: 400,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "id",
    headerName: "id",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
  {
    field: "TotalAmount",
    headerName: "Total",
    width: 300,
    editable: true,

    headerAlign: "center",
    align: "center",
  },
  {
    field: "status",
    headerAlign: "center",
    align: "center",
    headerName: "Status",
    width: 300,
    renderCell: (params) => {
   
      return (
        <Button
          type="button"
          style={{ background: params.row.StatusBg }}
          className="  capitalize  font-light py-1 w-24 text-white"
        >
          {params.row.Status}
        </Button>
      );
    },
  },
  {
    field: "Location",
    headerName: "Location",
    width: 200,
    headerAlign: "center",
    align: "center",
  },
];

export const ordersData = [
  {
    id: 10248,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 345653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3900047,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3983992,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 748975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "https://unsplash.com/photos/xUPbq8YHhD0",
  },
  {
    id: 943257,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1518715982419-9015401820ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 2982901,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 8459938254,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 84595922224,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 22,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9tYXRvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
  },
  {
    id: 84892,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3701083,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 21280,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 742008975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "https://unsplash.com/photos/xUPbq8YHhD0",
  },
  {
    id: 957,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1634224158735-f7e1954d3378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    id: 944895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 845954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8454,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 222,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 39033257,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 748970035,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "https://unsplash.com/photos/xUPbq8YHhD0",
  },
  {
    id: 943357,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1518715982419-9015401820ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 328343,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 8453334,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 84522254,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 111,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 3453,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 39045227,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 8988386,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 8975,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "https://unsplash.com/photos/xUPbq8YHhD0",
  },
  {
    id: 947337,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1518715982419-9015401820ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 93454895,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 8494940954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 843230754,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 1048,
    CustomerName: "Vinet",

    TotalAmount: 32.38,
    OrderItems: "Fresh Tomato",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 315653,
    CustomerName: "Carson Darrin",
    TotalAmount: 56.34,
    OrderItems: "Butter Scotch",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 390457,
    CustomerName: "Fran Perez",
    TotalAmount: 93.31,
    OrderItems: "Candy Gucci",
    Location: "New York",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1575224300306-1b8da36134ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 893486,
    CustomerName: "Anika Viseer",
    TotalAmount: 93.31,
    OrderItems: "Night Lamp",
    Location: "Germany",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 7489,
    CustomerName: "Miron Vitold",
    TotalAmount: 23.99,
    OrderItems: "Healthcare Erbology",
    Location: "Spain",
    Status: "rejected",
    StatusBg: "red",
    ProductImage: "https://unsplash.com/photos/xUPbq8YHhD0",
  },
  {
    id: 94757,
    CustomerName: "Omar Darobe",
    TotalAmount: 95.99,
    OrderItems: "Makeup Lancome Rouge",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://images.unsplash.com/photo-1518715982419-9015401820ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
  },
  {
    id: 95,
    CustomerName: "Lulia albu",
    TotalAmount: 17.99,
    OrderItems: "Skincare",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 8438273954,
    CustomerName: "Penjani",
    TotalAmount: 59.99,
    OrderItems: "Headphone",
    Location: "USA",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 8498390954,
    CustomerName: "Jie Yan",
    TotalAmount: 87.99,
    OrderItems: "Shoes",
    Location: "USA",
    Status: "pending",
    StatusBg: "#FB9678",
    ProductImage:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
  {
    id: 38489,
    CustomerName: "Miron",
    TotalAmount: 87.99,
    OrderItems: "Ice Cream",
    Location: "USA",
    Status: "active",
    StatusBg: "#03C9D7",
    ProductImage:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg",
  },
  {
    id: 24546,
    CustomerName: "Frank",
    TotalAmount: 84.99,
    OrderItems: "Pan Cake",
    Location: "Delhi",
    Status: "complete",
    StatusBg: "#8BE78B",
    ProductImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
  },
  {
    id: 874534,
    CustomerName: "Danai",
    TotalAmount: 122.99,
    OrderItems: "Watch",
    Location: "USA",
    Status: "canceled",
    StatusBg: "#FF5C8E",
    ProductImage:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
  },
];

//employees
export const employeesColumns = [
  {
    field: "Name",
    headerName: "Employee",
    width: "400",
    headerAlign: "left",
    renderCell: (params) => {

      return (
        <div className="flex gap-3  text-primary  items-center">
          <span className="w-9 h-8 rounded-full">
            <Avatar src={params.row.EmployeeImage} />
          </span>
          {params.row.Name}
        </div>
      );
    },
  },
  {
    field: "Title",
    headerName: "Designation",
    width: "300",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Country",
    headerName: "Country",
    width: "300",
    headerAlign: "center",
    align: "center",
  },

  {
    field: "HireDate",
    headerName: "Hire Date",
    width: "300",
    format: "yMd",
    headerAlign: "center",
    align: "center",
  },

  {
    field: "ReportsTo",
    headerName: "Reports To",
    width: "300",
    headerAlign: "center",
    align: "center",
  },
];

export const employeesData = [
  {
    id: 1,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 2,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 3,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 4,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 5,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 6,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 7,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 8,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 9,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 10,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 11,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 12,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 13,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 14,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 15,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 16,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 17,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 18,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 19
    ,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 20,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 21,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 22,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 23,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 24,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 25,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 26,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 27,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 28,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 29,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 30,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 31,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 32,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 33,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 34,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 35,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 36,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 37,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 38,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 39,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 40,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 41,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 42,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 43,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 44,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 45,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 46,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 47,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 48,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 49,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 50,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 51,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 52,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 53,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 54,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 55,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 56,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 57,
    Name: "Nancy Davolio",
    Title: "Sales Representative",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 58,
    Name: "Nasimiyu Danai",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar3,
  },
  {
    id: 59,
    Name: "Iulia Albu",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar4,
  },
  {
    id: 60,
    Name: "Siegbert Gottfried",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
  {
    id: 61,
    Name: "Omar Darobe",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 62,
    Name: "Penjani Inyene",
    Title: "Marketing Head",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar,
  },
  {
    id: 63,
    Name: "Miron Vitold",
    Title: "HR",
    HireDate: "01/02/2021",
    Country: "USA",
    ReportsTo: "Carson",
    EmployeeImage: avatar2,
  },
];

//users
export const userColumns = [
  {
    headerName: "Name",
    field: "CustomerName",
    width: "400",
    headerAlign: "left",
    renderCell: (params) => {
   
      return (
        <div className="flex gap-3  text-primary  items-center">
          <span className="w-9 h-8 rounded-full">
            <Avatar src={params.row.CustomerImage} />
          </span>
          {params.row.CustomerName}
        </div>
      );
    },
  },
  {
    field: "ProjectName",
    headerName: "Project Name",
    width: "500",
    headerAlign: "center",
    align: "center",
  },
  {
    field: "Status",
    headerName: "Status",
    width: "250",
    renderCell: (params) => {
      return (
        <div className="flex gap-3  items-center">
          <FaCircle style={{ color: `${params.row.StatusBg}` }} />

          {params.row.Status}
        </div>
      );
    },
    format: "yMd",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Weeks",
    headerName: "Weeks",
    width: "100",
    format: "C2",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Budget",
    headerName: "Budget",
    width: "200",
    format: "yMd",
    headerAlign: "center",
    align: "center",
  },

  {
    field: "Location",
    headerName: "Location",
    width: "200",
    headerAlign: "center",
    align: "center",
  },
];

export const usersData = [
  {
    id: 1001,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1002,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1003,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1004,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1005,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1006,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1007,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1008,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1009,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1010,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1011,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1012,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1013,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1014,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1015,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1016,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1017,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1018,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1019,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1020,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1021,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1022,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1023,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1024,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1025,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1026,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1027,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1028,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1029,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1030,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1031,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1032,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1033,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1034,

    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1035,

    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1036,
    CustomerName: "Nirav Joshi",
    CustomerEmail: "nirav@gmail.com",
    CustomerImage: avatar2,
    ProjectName: "Hosting Press HTML",
    Status: "Active",
    StatusBg: "#8BE78B",
    Weeks: "40",
    Budget: "$2.4k",
    Location: "India",
  },
  {
    id: 1037,

    CustomerName: "Sunil Joshi",
    CustomerEmail: "sunil@gmail.com",
    ProjectName: "Elite Admin",
    Status: "Active",
    CustomerImage: avatar3,

    StatusBg: "#8BE78B",
    Weeks: "11",
    Budget: "$3.9k",
    Location: "India",
  },
  {
    id: 1038,

    CustomerName: "Andrew McDownland",
    CustomerEmail: "andrew@gmail.com",
    ProjectName: "Real Homes WP Theme",
    Status: "Pending",
    CustomerImage: avatar4,
    StatusBg: "#FEC90F",
    Weeks: "19",
    Budget: "$24.5k",
    Location: "USA",
  },
  {
    id: 1039,
    CustomerName: "Christopher Jamil",
    CustomerEmail: "jamil@gmail.com",
    ProjectName: "MedicalPro WP Theme",
    Status: "Completed",
    CustomerImage: avatar,
    StatusBg: "#8BE78B",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
  {
    id: 1040,
    CustomerName: "Michael",
    CustomerEmail: "michael@gmail.com",
    ProjectName: "Weekly WP Theme",
    Status: "Cancel",
    CustomerImage: avatar2,
    StatusBg: "red",
    Weeks: "34",
    Budget: "$16.5k",
    Location: "USA",
  },
];
let eventGuid = 0;
export function createEventId() {
  return String(eventGuid++);
}

//calendar data
export const scheduleData = [
  {
    id: createEventId(),
    title: "Explosion of Betelgeuse Star",
    Location: "Space Center USA",
    start: "2023-04-10T04:00:00.000Z",
    end: "2023-04-10T05:30:00.000Z",
    backgroundColor: "#1aaa55",
  },
  {
    id: createEventId(),
    title: "Thule Air Crash Report",
    Location: "Newyork City",
    start: "2023-04-11T06:30:00.000Z",
    end: "2023-04-11T08:30:00.000Z",
    backgroundColor: "#357cd2",
  },
  {
    id: createEventId(),
    title: "Blue Moon Eclipse",
    Location: "Space Center USA",
    start: "2023-04-12T04:00:00.000Z",
    end: "2023-04-12T05:30:00.000Z",
    backgroundColor: "#7fa900",
  },
  {
    id: createEventId(),
    title: "Meteor Showers in 2021",
    Location: "Space Center USA",
    start: "2023-04-13T07:30:00.000Z",
    end: "2023-04-13T09:00:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "Milky Way as Melting pot",
    Location: "Space Center USA",
    start: "2023-04-14T06:30:00.000Z",
    end: "2023-04-14T08:30:00.000Z",
    backgroundColor: "#00bdae",
  },
  {
    id: createEventId(),
    title: "Mysteries of Bermuda Triangle",
    Location: "Bermuda",
    start: "2023-04-14T04:00:00.000Z",
    end: "2023-04-14T05:30:00.000Z",
    backgroundColor: "#f57f17",
  },
  {
    id: createEventId(),
    title: "Glaciers and Snowflakes",
    Location: "Himalayas",
    start: "2023-04-15T05:30:00.000Z",
    end: "2023-04-15T07:00:00.000Z",
    backgroundColor: "#1aaa55",
  },
  {
    id: createEventId(),
    title: "Life on Mars",
    Location: "Space Center USA",
    start: "2023-04-16T03:30:00.000Z",
    end: "2023-04-16T04:30:00.000Z",
    backgroundColor: "#357cd2",
  },
  {
    id: createEventId(),
    title: "Alien Civilization",
    Location: "Space Center USA",
    start: "2023-04-18T05:30:00.000Z",
    end: "2023-04-18T07:30:00.000Z",
    backgroundColor: "#7fa900",
  },
  {
    id: createEventId(),
    title: "Wildlife Galleries",
    Location: "Africa",
    start: "2023-04-20T05:30:00.000Z",
    end: "2023-04-20T07:30:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "Best Photography 2021",
    Location: "London",
    start: "2023-04-21T04:00:00.000Z",
    end: "2023-04-21T05:30:00.000Z",
    backgroundColor: "#00bdae",
  },
  {
    id: createEventId(),
    title: "Smarter Puppies",
    Location: "Sweden",
    start: "2023-04-08T04:30:00.000Z",
    end: "2023-04-08T06:00:00.000Z",
    backgroundColor: "#f57f17",
  },
  {
    id: createEventId(),
    title: "Myths of Andromeda Galaxy",
    Location: "Space Center USA",
    start: "2023-04-06T05:00:00.000Z",
    end: "2023-04-06T07:00:00.000Z",
    backgroundColor: "#1aaa55",
  },
  {
    id: createEventId(),
    title: "Aliens vs Humans",
    Location: "Research Center of USA",
    start: "2023-04-05T04:30:00.000Z",
    end: "2023-04-05T06:00:00.000Z",
    backgroundColor: "#357cd2",
  },
  {
    id: createEventId(),
    title: "Facts of Humming Birds",
    Location: "California",
    start: "2023-04-19T04:00:00.000Z",
    end: "2023-04-19T05:30:00.000Z",
    backgroundColor: "#7fa900",
  },
  {
    id: createEventId(),
    title: "Sky Gazers",
    Location: "Alaska",
    start: "2023-04-22T05:30:00.000Z",
    end: "2023-04-22T07:30:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "The Cycle of Seasons",
    Location: "Research Center of USA",
    start: "2023-04-11T00:00:00.000Z",
    end: "2023-04-11T02:00:00.000Z",
    backgroundColor: "#00bdae",
  },
  {
    id: createEventId(),
    title: "Space Galaxies and Planets",

    Location: "Space Center USA",
    start: "2023-04-11T11:30:00.000Z",
    end: "2023-04-11T13:00:00.000Z",
    backgroundColor: "#f57f17",
  },
  {
    id: createEventId(),
    title: "Lifecycle of Bumblebee",
    Location: "San Fransisco",
    start: "2023-04-14T00:30:00.000Z",
    end: "2023-04-14T02:00:00.000Z",
    backgroundColor: "#7fa900",
  },
  {
    id: createEventId(),
    title: "Alien Civilization",
    Location: "Space Center USA",
    start: "2023-04-14T10:30:00.000Z",
    end: "2023-04-14T12:30:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "Alien Civilization",
    Location: "Space Center USA",
    start: "2023-04-10T08:30:00.000Z",
    end: "2023-04-10T10:30:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "The Cycle of Seasons",
    Location: "Research Center of USA",
    start: "2023-04-12T09:00:00.000Z",
    end: "2023-04-12T10:30:00.000Z",
    backgroundColor: "#00bdae",
  },
  {
    id: createEventId(),
    title: "Sky Gazers",
    Location: "Greenland",
    start: "2023-04-15T09:00:00.000Z",
    end: "2023-04-15T10:30:00.000Z",
    backgroundColor: "#ea7a57",
  },
  {
    id: createEventId(),
    title: "Facts of Humming Birds",
    Location: "California",
    start: "2023-04-16T07:00:00.000Z",
    end: "2023-04-16T09:00:00.000Z",
    backgroundColor: "#7fa900",
  },
];

//kanban

export const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Database Setup",
          description: "Firebase Integration",
        },
        {
          id: 2,
          title: "Data Flow",
          description: "Setup Diagram with other developers",
        },
      ],
    },
    {
      id: 2,
      title: "TODO",
      cards: [
        {
          id: 9,
          title: "Data Table Page",
          description: "Server side Pagination",
        },
      ],
    },
    {
      id: 3,
      title: "Doing",
      cards: [
        {
          id: 10,
          title: "Full Calendar Extension",
          description: "Make new events and store in global states",
        },
        {
          id: 11,
          title: "Custom Kanban Board",
          description:
            "Setup react-kanban dep within Dashboard as seperate page",
        },
      ],
    },
    {
      id: 4,
      title: "Completed",
      cards: [
        {
          id: 12,
          title: "Vite Server Setup",
          description: "Configure required modules and starters",
        },
        {
          id: 13,
          title: "Modular structre",
          description:
            "Write css in form of modules to reduce the naming conflicts",
        },
      ],
    },
  ],
};
//charts page data

export const dataBarCarts = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],

  datasets: [
    {
      label: "Sales",
      backgroundColor: "#000",
      borderColor: "#fff",
      borderWidth: 1,
      tension: 0.4,
      borderWidth: 0,
      borderRadius: 4,
      borderSkipped: false,
      backgroundColor: "#3b82f6",
      maxBarThickness: 30,
      data: [450, 200, 100, 220, 500, 100, 400, 230, 500],
    },
  ],
};
export const optionsBarCarts = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: "#1e293b",
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: true,
          drawTicks: true,
        },
        ticks: {
          display: true,
          color: "#1e293b",
          padding: 10,
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
    },
  },
};
export const dataLineChart = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Mobile apps",
      borderColor: "#3b82f6",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
      fill: false,
      maxBarThickness: 6,
      backgroundColor: "#3b82f6",
    },
    {
      label: "Websites",
      borderColor: "#ec4899",
      data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 3,
      fill: false,
      maxBarThickness: 6,
      backgroundColor: "#ec4899",
    },
  ],
};

export const optionsLineChart = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: "",
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          color: "",
          padding: 20,
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
    },
  },
};

export const optionsPie = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};
export const dataPie = {
  labels: ["faceBook", "Twitter", "Instagram", "Youtubue"],

  datasets: [
    {
      label: "Apps",
      weight: 9,
      cutout: 0,
      tension: 0.4,
      pointRadius: 1,
      borderWidth: 2,
      backgroundColor: ["#3b82f6", "#ec4899", "#9ca3af", "#1e293b"],
      fill: false,
      data: [87, 260, 334, 286],
    },
  ],
};
export const optionsDoughnut = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: false,
          drawOnChartArea: false,
          drawTicks: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  },
};

export const dataDoughnut = {
  labels: ["faceBook", "Twitter", "Instagram", "Youtubue"],
  datasets: [
    {
      label: "Apps",
      weight: 9,

      tension: 0.9,
      pointRadius: 2,
      borderWidth: 2,
      backgroundColor: ["#3b82f6", "#ec4899", "#9ca3af", "#1e293b"],
      fill: false,
      data: [200, 160, 34, 286],
    },
  ],
};
export const optionsMixed = {
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    scales: {
      y: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: false,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          padding: 10,
          color: "#b2b9bf",
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
      x: {
        grid: {
          drawBorder: false,
          display: true,
          drawOnChartArea: true,
          drawTicks: true,
          borderDash: [5, 5],
        },
        ticks: {
          display: true,
          color: "#b2b9bf",
          padding: 10,
          font: {
            size: 11,
            family: "poppins",
            style: "normal",
            lineHeight: 2,
          },
        },
      },
    },
  },
};

export const mixedChartsData = {
  labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      type: "bar",
      label: "Mobile apps",
      borderColor: "#fff",
      data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
      tension: 0.4,
      pointRadius: 10,
      borderWidth: 1,
      fill: true,
      maxBarThickness: 8,
      backgroundColor: "#fff",

      weight: 10,

      fill: false,
    },
    {
      type: "line",
      label: "websites",
      tension: 0.6,
      pointRadius: 0,
      borderWidth: 4,
      borderColor: "#3b82f6",
      fill: true,
      data: [50, 40, 300, 220, 400, 250, 400, 230, 500],

      maxBarThickness: 8,
      backgroundColor: "#3b82f6",
    },
  ],
};

export const optionsArea={ 
   responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    
  },}
  export const dataArea={
   
      labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      datasets: [
    {
    label: "Websites",
    borderColor: "#3b82f6",
    data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
    tension: 0.4,
    pointRadius: 0,
    borderWidth: 3,
    fill: true,
    maxBarThickness: 6,
    backgroundColor: "#3b82f6",
  }]}
