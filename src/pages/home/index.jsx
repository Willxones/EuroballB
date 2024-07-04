import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedScoresGrid from "../../components/FeaturedScoresGrid";
import FeaturedStandings from "../../components/FeaturedStandings";
import Layout from "../../components/Layout";
import RecentArticles from "../../components/RecentArticles";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";

export default function Home() {
    return (
        <Layout>
            <FeaturedScoresGrid/>
            <FeaturedArticle/>
            <RecentArticles/>
            <FeaturedStandings/>
        </Layout>
    )
}