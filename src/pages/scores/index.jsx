import LeagueSelector from "../../components/LeagueSelector";
import Layout from "../../components/Layout";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";
import ScoresTable from "../../components/ScoresTable";
import WeekSelector from "../../components/WeekSelector";

export default function Scores() {
    return(
        <Layout>
            <div className="flex md:flex-row flex-col gap-4">
            <div className="md:w-1/2">
            <LeagueSelector/>
            </div>
            <div className="md:w-1/2">
            <WeekSelector/>
            </div>
            </div>
            <div className="py-4"></div>
            <ScoresTable/>
        </Layout>
    )
}