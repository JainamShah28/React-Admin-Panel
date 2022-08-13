import MoreVertIcon from '@mui/icons-material/MoreVert';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function Featured() {
    const revenueData = {
        datasets: [{
            data: [70, 30],
            backgroundColor: ["#6439ff", "#ece8ff"],
            borderRadius: 50,
            offset: 5
        }]
    },
        revenueOptions = {
            cutout: "85%",
            responsive: true, 
            maintainAspectRatio: false
        };

    return (
        <div className="featured card-shadow w-[30%] rounded-lg font-nunito p-4">
            <div className="top box-border flex justify-between items-center text-[#999]">
                <h1 className="featured-title font-bold text-lg">Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>

            <div className="bottom box-border mt-4">
                <div className="top revenue-chart box-border relative w-fit mx-auto">
                    <Doughnut
                        data={revenueData}
                        options={revenueOptions}
                    />

                    <h3 className="doughnut-label absolute top-[42%] left-[42%] text-2xl">70%</h3>
                </div>

                <div className="middle box-border flex flex-col items-center justify-center mt-4">
                    <p className="text-slate-600 font-medium">Total sales made today</p>
                    <p className="font-medium text-3xl mt-4">$420</p>
                    <p className="text-[#999] text-sm mt-4 text-center px-4">Previous transactions processing. Last payment may not be included.</p>
                </div>

                <div className="bottom box-border grid grid-cols-3 mt-4">
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-sm text-slate-600 font-semibold">Target</p>
                        <span className="flex justify-center items-center mt-2 text-sm text-[#999]">
                            <KeyboardArrowDownRoundedIcon fontSize="small" />
                            $12.4k
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p className="text-sm text-slate-600 font-semibold">Last Week</p>
                        <span className="flex justify-center items-center mt-2 text-sm text-yellow-600 font-bold">
                            <KeyboardArrowUpRoundedIcon fontSize="small" />
                            $12.4k
                        </span>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <p className="text-sm text-slate-600 font-semibold">Last Month</p>
                        <span className="flex justify-center items-center mt-2 text-sm text-[#999]">
                            <KeyboardArrowDownRoundedIcon fontSize="small" />
                            $12.4k
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featured;