import { Line } from "react-chartjs-2";

function Chart() {
    const spendingsData = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [{
            label: "Earnings",
            data: [20000, 10000, 15000, 38000, 27000, 25000],
            fill: true,
            borderColor: "#6439ff",
            backgroundColor: (canvas) => {
                const ctx = canvas.chart.ctx, 
                    gradient = ctx.createLinearGradient(0, 0, 0, 360);

                gradient.addColorStop(1, "rgba(100, 57, 255, 0.6)");
                gradient.addColorStop(0, "rgba(237, 233, 249, 0.6)");

                return gradient;
            },
            steppedLine: false,
            lineTension: 0.4
        }, {
            label: "Spendings",
            data: [24000, 22000, 52000, 47000, 70000, 52000],
            fill: true,
            borderColor: "#ece8ff",
            backgroundColor: (canvas) => {
                const ctx = canvas.chart.ctx, 
                    gradient = ctx.createLinearGradient(0, 0, 0, 360);

                gradient.addColorStop(1, "rgba(223, 214, 249, 0.6)");
                gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)");

                return gradient;
            },
            steppedLine: false,
            lineTension: 0.4
        }]
    },
        spendingsOptions = {
            responsive: true, 
            maintainAspectRatio: false
        };

    return (
        <div className="chart box-border card-shadow w-[70%] ml-4 rounded-lg p-4 font-nunito">
            <h1 className="featured-title font-bold text-lg text-[#999]">Last 6 Months |spending|</h1>

            <div className="spendings-chart box-border mt-4">
                <Line
                    data={spendingsData}
                    options={spendingsOptions}
                    height={360}
                />
            </div>
        </div>
    );
}

export default Chart; 