import LeagueSelector from "../../components/LeagueSelector";
import Layout from "../../components/Layout";
import StandingsTable from "../../components/StandingsTable";

export default function Standings() {
    return(
        <Layout>
            <LeagueSelector/>
            <StandingsTable/>
        </Layout>
    )
}