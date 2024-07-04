import ArticleSearchBar from "../../components/ArticleSearchBar";
import FeaturedLeagueSelector from "../../components/FeaturedLeagueSelector";
import Layout from "../../components/Layout";
import NewsList from "../../components/NewsList";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";

export default function News() {
    return (
        <Layout>
            <FeaturedLeagueSelector/>
            <ArticleSearchBar/>
            <NewsList/>
        </Layout>
    )
}