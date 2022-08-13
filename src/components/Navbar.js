import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';

import UserAvatar from '../images/user_profile.jpg';

function Navbar() {
    return (
        <div className="navbar box-border h-[8%] flex justify-between items-center border-b-2 border-b-slate-300 px-4 bg-white sticky top-0 right-0 z-[1000]">
            <div className="saerch-box box-border flex border-2 border-slate-300 w-fit rounded-sm py-1 px-2">
                <input type="text" className="box-border focus:outline-none" placeholder="Search..." autoComplete='off' autoFocus />
                <SearchIcon />
            </div>

            <div className="left box-border flex items-center gap-6">
                <div className="language">
                    <LanguageIcon />
                    <span className="ml-2">English</span>
                </div>

                <DarkModeOutlinedIcon />

                <FullscreenExitOutlinedIcon />

                <div className="notifications relative w-fit">
                    <NotificationsNoneOutlinedIcon />
                    <div className="box-border absolute top-0 -right-1 bg-red-600 text-white h-4 w-4 rounded-full text-xs flex justify-center items-center">4</div>
                </div>

                <div className="chts relative w-fit">
                    <ChatBubbleOutlineIcon />
                    <div className="box-border absolute top-0 -right-1 bg-red-600 text-white h-4 w-4 rounded-full text-xs flex justify-center items-center">2</div>
                </div>

                <ListIcon />

                <img src={UserAvatar} alt="profile" className="w-9 rounded-full" />
            </div>
        </div>
    );
}

export default Navbar; 