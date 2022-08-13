import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";
import Chart from "../components/Chart.js";
import UserProfile from "../components/UserProfile.js";
import LatestTransactions from "../components/LatestTransactions.js";

function Single() {
    return (
        <div className="singlepage flex">
            <Sidebar />

            <div className="main-container h-screen w-[80%] xl:w-[85%]">
                <Navbar />

                <div className="single-supporter h-[92%] overflow-y-auto mx-4 scrollbar-hide">
                    <div className="top flex mt-4">
                        <UserProfile />
                        <Chart />
                    </div>

                    <div className="listContainer box-border w-full p-4 mt-4 rounded-lg card-shadow mb-4 font-nunito">
                        <h1 className="list-title font-bold text-lg text-[#999]">Latest Transactions</h1>
                        <LatestTransactions />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Single;