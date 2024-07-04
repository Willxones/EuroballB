export default function ScoreCard() {
    return(
        <>
        <div className="px-3 py-2 bg-gray-50 rounded-lg w-full md:w-64">
				<div className="pb-3 font-semibold">Friday, 26 September, 2024</div>
				<div className="flex flex-row gap-2">
					<div className="flex flex-col my-auto gap-2">
						<div className="flex gap-2">
							<img
								src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/bal.png&scale=crop&cquality=40&location=origin&w=64&h=64"
								alt="Team Logo"
								className="h-6 w-6"
							/>
							<p>Baltimore Ravens</p>
                            
						</div>
						<div className="flex gap-2">
							<img
								src="https://a.espncdn.com/combiner/i?img=/i/teamlogos/nfl/500/scoreboard/kc.png&scale=crop&cquality=40&location=origin&w=64&h=64"
								alt="Team Logo"
								className="h-6 w-6"
							/>
							<p>Kansas City Chiefs</p>
						</div>
					</div>
					<div className="flex flex-col gap-2 ml-auto">
                        <p>23</p>
                        <p className="font-bold">56</p>
                    </div>
				</div>
			</div>
		</>
    )
}