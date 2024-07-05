import { Link } from "react-router-dom"
import ArticlePreview from "./ArticlePreview";
export default function RecentlyViewedArticle({article}) {
    function extractDate(dateString) {
        const datePattern = /^(.*) at/;
        const match = dateString.match(datePattern);
      
        if (match) {
          return match[1].trim();
        }
      
        return '';
      }
    return(
        <article key={article.id} className="flex flex-col items-start justify-between">
                <Link to={`/article/${article.id}`}>
                <div className="relative w-full">
                  <img
                    src={article.headerImage}
                    alt=""
                    className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                </div>
                </Link>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={article._createdBy.timestamp} className="text-gray-500">
                      {extractDate(article._createdBy.timestamp)}
                    </time>
                    <p
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {article.league}
                    </p>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`/article/${article.id}`}>
                        <span className="absolute inset-0" />
                        {article.title}
                      </Link>
                    </h3>
                    <div className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"><ArticlePreview htmlContent={article.content}/></div>
                  </div>
                </div>
              </article>
    )
}