import ArticlePreview from "./ArticlePreview"
import { Link } from "react-router-dom";

export default function NewsListArticle({article}) {
    function extractDate(dateString) {
        const datePattern = /^(.*) at/;
        const match = dateString.match(datePattern);
      
        if (match) {
          return match[1].trim();
        }
      
        return '';
      }
    return(
        <article key={article.id} className="relative isolate flex flex-col gap-8 lg:flex-row overflow-hidden">
                <Link to={`/article/${article.id}`}>
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0 h-auto lg:h-36">
                    <img
                      src={article.headerImage}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  </Link>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={article._createdBy.timestamp} className="text-gray-500">
                        {extractDate(article._createdBy.timestamp)}
                      </time>
                      <p
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600"
                      >
                        {article.league}
                      </p>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <Link to={`/article/${article.id}`}>
                          <span className="absolute inset-0" />
                          {article.title}
                        </Link>
                      </h3>
                      <div className="lg:mt-3 mt-5 text-sm leading-6 text-gray-600 "><ArticlePreview htmlContent={article.content}/></div>
                    </div>
                    
                  </div>
                </article>
    )
}