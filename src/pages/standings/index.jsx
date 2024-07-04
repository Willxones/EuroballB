import FeaturedLeagueSelector from "../../components/FeaturedLeagueSelector";
import Layout from "../../components/Layout";
import StandingsTable from "../../components/StandingsTable";

export default function Standings() {
    return(
        <Layout>
            <FeaturedLeagueSelector/>
            <StandingsTable/>
        </Layout>
    )
}