import ArticleContent from "../../components/ArticleContent";
import Layout from "../../components/Layout";
import RecentlyViewedArticles from "../../components/RecentlyViewedArticles";

export default function Article() {
    return (
        <Layout>
            <ArticleContent/>
            <RecentlyViewedArticles/>
        </Layout>
    )
}