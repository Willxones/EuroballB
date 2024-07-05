import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedScoresGrid from "../../components/FeaturedScoresGrid";
import FeaturedStandings from "../../components/FeaturedStandings";
import Layout from "../../components/Layout";
import NewsList from "../../components/NewsList";
import RecentArticles from "../../components/RecentArticles";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";

export default function Home() {
    return (
        <Layout>
            <FeaturedScoresGrid/>
            <FeaturedArticle/>
            <p className="text-sm font-medium text-gray-500 mt-10">
              Recent News
            </p>
            <NewsList/>
            <FeaturedStandings/>
        </Layout>
    )
}