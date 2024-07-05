import ArticleSearchBar from "../../components/ArticleSearchBar";
import LeagueSelector from "../../components/LeagueSelector";
import Layout from "../../components/Layout";
import NewsList from "../../components/NewsList";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";

export default function News() {
    return (
        <Layout>
            <LeagueSelector/>
            <ArticleSearchBar/>
            <div className="h-8"></div>
            <NewsList/>
        </Layout>
    )
}