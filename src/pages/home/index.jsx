import FeaturedArticle from "../../components/FeaturedArticle";
import FeaturedScoresGrid from "../../components/FeaturedScoresGrid";
import Layout from "../../components/Layout";

export default function Home() {
    return (
        <Layout>
            <FeaturedScoresGrid/>
            <FeaturedArticle/>
        </Layout>
    )
}