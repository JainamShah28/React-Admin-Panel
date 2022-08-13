import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

function Widget({ type }) {
    let data;

    switch (type) {
        case "users":
            data = {
                title: "users",
                count: 20,
                link: "See all users",
                icon: <PersonOutlineIcon style={{
                    color: "crimson"
                }} />
            }
            break;
        case "orders":
            data = {
                title: "orders",
                count: 260,
                link: "View all orders",
                icon: <ShoppingCartOutlinedIcon style={{
                    color: "green"
                }} />
            }
            break;
        case "earnings":
            data = {
                title: "earnings",
                count: "4.6k",
                link: "View net earnings",
                icon: <AttachMoneyOutlinedIcon style={{
                    color: "green"
                }} />
            }
            break;
        case "balance":
            data = {
                title: "balance",
                count: "7.8k",
                link: "See details",
                icon: <AccountBalanceWalletOutlinedIcon style={{
                    color: "purple"
                }} className="rounded-md" />
            }
            break;
    }
    return (
        <div className="box-border card-shadow w-full flex justify-between p-4 rounded-lg h-36">
            <div className="left box-border flex flex-col justify-between">
                <p className="widget-title uppercase text-[#999] text-sm font-semibold">{data.title}</p>
                <p className="widget-count text-3xl">{(data.title === "earnings" || data.title === "balance") && "$ "}{data.count}</p>
                <p className="widget-link cursor-pointer underline underline-offset-2 text-xs">{data.link}</p>
            </div>

            <div className="right box-border flex flex-col justify-between items-end">
                <div className="percantage box-border flex items-center">
                    <KeyboardArrowUpRoundedIcon style={{
                        fill: 'rgba(220, 38, 38, 1)'
                    }} />
                    <span className="ml-1 text-red-600 font-semibold">20%</span>
                </div>

                <div className={`widget-icon box-border w-7 h-7 flex justify-center items-center rounded-md ${type === "users" ? "bg-[#ff000033]" : ""} ${type === "orders" ? "bg-[#32e33233]" : ""} ${type === "earnings" ? "bg-[#00800033]" : ""} ${type === "balance" ? "bg-[#80008033]" : ""}`}>
                    {data.icon}
                </div>
            </div>
        </div>
    )
}

export default Widget; 