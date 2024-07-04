import ScoreCard from "./ScoreCard";

export default function ScoresTable() {
	return (
        <>
        <div className="md:flex-row flex-col flex justify-evenly gap-4">
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
        <ScoreCard/>
        </div>
        </>
	);
}
