import Sidebar from "../components/Sidebar.js";
import Navbar from "../components/Navbar.js";
import Widget from "../components/Widget.js";
import Featured from "../components/Featured.js";
import Chart from "../components/Chart.js";
import LatestTransactions from "../components/LatestTransactions.js";

function Home() {
    return (
        <div className="home box-border flex">
            <Sidebar />

            <div className="main-container h-screen w-[80%] xl:w-[85%]">
                <Navbar />

                <div className="home-supporter h-[92%] overflow-y-auto mx-4 scrollbar-hide">
                    <div className="widgets box-border grid grid-cols-4 gap-4 mt-4">
                        <Widget type="users" />
                        <Widget type="orders" />
                        <Widget type="earnings" />
                        <Widget type="balance" />
                    </div>

                    <div className="charts box-border flex mt-4">
                        <Featured />
                        <Chart />
                    </div>

                    <div className="listContainer box-border w-full p-4 mt-4 rounded-lg card-shadow mb-4 font-nunito">
                        <h1 className="list-title font-bold text-lg text-[#999]">Latest Transactions</h1>
                        <LatestTransactions />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home; 