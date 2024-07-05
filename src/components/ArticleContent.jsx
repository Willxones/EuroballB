import ArticleHTML from "./ArticleHTML";

const article = {
    id: 'zzzzzzzzzzx',
    title: 'Our Predictions for the 2024 GFL Season',
    headerImage: 'https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg',
    content: '<p>kjfdskfndsk</p> <p><img src="https://firebasestorage.googleapis.com/v0/b/euroball-app.appspot.com/o/Articles%2Fzzzzzzzzzzzzzzzzzzzy%2Fcontent%2FQuG5M9hgzkffEPYJhBUt-football.jpeg?alt=media&amp;token=6a86059f-2330-4957-a9a6-096c8dd5a28f" alt="football.jpeg" width="1000" height="667" />ccxcv,dnvkxcnv</p> <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Touchdown for the Sea Devils 🙌<br><br>📺 Watch <a href="https://twitter.com/hashtag/HSDatFGY?src=hash&amp;ref_src=twsrc%5Etfw">#HSDatFGY</a> live NOW with the ELF Game Pass <a href="https://t.co/lfLXqxYqfk">pic.twitter.com/lfLXqxYqfk</a></p>&mdash; European League of Football (@ELF_Official) <a href="https://twitter.com/ELF_Official/status/1807462917173854242?ref_src=twsrc%5Etfw">June 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    _createdBy: {
        displayName: "Will Jones (Co-Founder)",
        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIsWgURuqyixqyN3YWF4IDYlrHtuVIlK6CI2lw372rIDrPcaXLz=s96-c",
        timestamp: "July 3, 2024 at 11:46:07 PM UTC+1"
    },
    league: 'European League of Football'
}

export default function ArticleContent() {
    function seperateAuthorAndRole(authorString) {
        const nameRolePattern = /(.*)\s\((.*)\)/;
        const match = authorString.match(nameRolePattern);

        if (match) {
            const name = match[1];
            const role = match[2];
            return { name, role };
        }
    }
    function extractDate(dateString) {
        const datePattern = /^(.*) at/;
        const match = dateString.match(datePattern);
      
        if (match) {
          return match[1].trim();
        }
      
        return '';
      }
    return(
        <>
        <div>
            <img className="w-full h-60 md:h-80 lg:h-[550px] object-cover rounded-lg shadow-lg" src={article.headerImage} alt="Article Image"/>
            <div className="pt-10 pb-5">
                <h1 className="text-2xl lg:text-5xl font-semibold">{article.title}</h1>
            </div>
            <div className="flex gap-4 lg:text-lg text-xs">
                <div className="flex">
                    <img src={article._createdBy.photoURL} className="lg:h-12 lg:w-12 h-6 w-6 rounded-full mr-3" alt="Author Image"/>
                <div>
                    <h3 className="font-medium">{seperateAuthorAndRole(article._createdBy.displayName).name}</h3>
                    <h4 className="text-gray-600">{seperateAuthorAndRole(article._createdBy.displayName).role}</h4>
                </div>
                </div>
                <div className="mr-0 ml-auto">
                    <p className="font-medium">{article.league}</p>
                    <p className="text-gray-500">{extractDate(article._createdBy.timestamp)}</p>
                </div>
            </div>
            <div className="mt-5">
                <ArticleHTML content={article.content}/>
            </div>
        </div>
        </>
    )
}