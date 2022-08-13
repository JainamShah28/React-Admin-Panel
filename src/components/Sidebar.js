import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';

import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar box-border font-nunito border-r-2 border-r-slate-300 w-[20%] xl:w-[15%] h-screen overflow-y-auto overflow-x-hidden">
            <div className="top box-border border-b-2 border-b-slate-300 flex justify-center items-center h-[8%] sticky top-0 left-0 z-[1000] bg-white">
                <span className="text-[#6439ff] font-black text-2xl">admin</span>
            </div>

            <div className="center box-border flex flex-col justify-start gap-4 py-4">
                <div className="box-border main">
                    <h4 className="uppercase title">main</h4>
                    
                    <Link to="/" className="nav-link">
                        <DashboardIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }}/>
                        <span className="capitalize ml-2">dashboard</span>
                    </Link>
                </div>

                <div className="box-border lists">
                    <h4 className="uppercase title">lists</h4>
                    
                    <Link to="/users" className="nav-link">
                        <PersonOutlineOutlinedIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">users</span>
                    </Link>

                    <div className="nav-link">
                        <StoreIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">products</span>
                    </div>

                    <div className="nav-link">
                        <CreditCardIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">orders</span>
                    </div>

                    <div className="nav-link">
                        <LocalShippingIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">delivery</span>
                    </div>
                </div>

                <div className="box-border useful">
                    <h4 className="uppercase title">useful</h4>
                    
                    <div className="nav-link">
                        <AssessmentIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">stats</span>
                    </div>

                    <div className="nav-link">
                        <NotificationsNoneIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">notifications</span>
                    </div>
                </div>

                <div className="box-border service">
                    <h4 className="uppercase title">service</h4>
                    
                    <div className="nav-link">
                        <SettingsSystemDaydreamOutlinedIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">system health</span>
                    </div>

                    <div className="nav-link">
                        <PsychologyOutlinedIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">logs</span>
                    </div>

                    <div className="nav-link">
                        <SettingsApplicationsRoundedIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">settings</span>
                    </div>
                </div>

                <div className="box-border user">
                    <h4 className="uppercase title">user</h4>
                    
                    <div className="nav-link">
                        <AccountCircleOutlinedIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">profile</span>
                    </div>

                    <div className="nav-link">
                        <LogoutIcon fontSize="medium" style={{
                            fill: "#7451f8"
                        }} />
                        <span className="capitalize ml-2">logout</span>
                    </div>
                </div>
            </div>

            <div className="bottom box-border flex ml-4 pb-4">
                <div className="bg-white w-6 h-6 border-2 border-[#7451f8] rounded-md cursor-pointer"></div>
                <div className="bg-[#333] w-6 h-6 border-2 border-[#7451f8] rounded-md cursor-pointer ml-2"></div>
            </div>
        </div>
    )
}

export default Sidebar; 