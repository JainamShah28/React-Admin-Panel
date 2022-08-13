import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import { DataGrid } from '@mui/x-data-grid';

import { Link } from 'react-router-dom';

function List() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 70
        },
        {
            field: 'user',
            headerName: 'User',
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg box-border flex items-center">
                        <img className="w-8 h-8 rounded-full mr-4" src={params.row.img} alt={params.row.username} />
                        {params.row.username}
                    </div>
                )
            }
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 280
        },
        {
            field: 'age',
            headerName: 'Age',
            width: 100
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus px-2 py-1 rounded-md text-xs ${params.row.status === "pending" ? "text-green-400 bg-[#bdbd031a]" : (params.row.status === "active" ? "text-green-700 bg-[#00800027]" : "text-red-700 bg-[#9cba9c27]")}`}>{params.row.status}</div>
                )
            }
        }
    ],
        rows = [
            {
                id: 1,
                username: "Snow",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                status: "active",
                email: "1snow@gmail.com",
                age: 35,
            },
            {
                id: 2,
                username: "Jamie Lannister",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "2snow@gmail.com",
                status: "passive",
                age: 42,
            },
            {
                id: 3,
                username: "Lannister",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "3snow@gmail.com",
                status: "pending",
                age: 45,
            },
            {
                id: 4,
                username: "Stark",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "4snow@gmail.com",
                status: "active",
                age: 16,
            },
            {
                id: 5,
                username: "Targaryen",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "5snow@gmail.com",
                status: "passive",
                age: 22,
            },
            {
                id: 6,
                username: "Melisandre",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "6snow@gmail.com",
                status: "active",
                age: 15,
            },
            {
                id: 7,
                username: "Clifford",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "7snow@gmail.com",
                status: "passive",
                age: 44,
            },
            {
                id: 8,
                username: "Frances",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "8snow@gmail.com",
                status: "active",
                age: 36,
            },
            {
                id: 9,
                username: "Roxie",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "snow@gmail.com",
                status: "pending",
                age: 65,
            },
            {
                id: 10,
                username: "Roxie",
                img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
                email: "snow@gmail.com",
                status: "active",
                age: 65,
            },
        ],
        actionColumn = [{
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: () => {
                return (
                    <div className="flex items-center gap-3">
                        <Link to="/users/123" className="viewBtn rounded-md text-[#00008b] border-[1px] border-dotted border-[#00008b98] px-2 py-1">View</Link>
                        <button className="deleteBtn rounded-md text-[#dc143c] border-[1px] border-dotted border-[#dc143c99] px-2 py-1">Delete</button>
                    </div>
                );
            }
        }];

    return (
        <div className="list box-border flex">
            <Sidebar />

            <div className="main-container h-screen w-[80%] xl:w-[85%]">
                <Navbar />

                <div className="list-supporter h-[92%] overflow-y-auto mx-4 scrollbar-hide flex flex-col items-end">
                    <Link to="new" className="bg-slate-400 py-2 rounded-md hover:bg-slate-500 text-white font-bold w-32 flex justify-center mt-4">
                        Add new user
                    </Link>

                    <div className="data-table box-border w-full h-[81%] mt-4 mb-4">
                        <DataGrid
                            rows={rows}
                            columns={columns.concat(actionColumn)}
                            pageSize={8}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;