import NewsListArticle from "./NewsListArticle"

const articles = [
    {
      id: 'zzzzzzzzzzx',
    title: 'Our Predictions for the 2024 GFL Season dnsdk, fkjdghkjdf dkshfkjsdfk ',
    headerImage: 'https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg',
    content: '<p>kjfdskfndsk kdsjfkjdsf kdjfghdkfhgkdfgnkdfngkjdfngk jdfsdoifjlsdkjflsd jfldsn flkds fkdshflksdjflksjflsdk flsd flsdflk fdjkshfkdjhfdkj kjdfhgkjdf gkjfdhgkjg hdflkghdl si</p> <p><img src="https://firebasestorage.googleapis.com/v0/b/euroball-app.appspot.com/o/Articles%2Fzzzzzzzzzzzzzzzzzzzy%2Fcontent%2FQuG5M9hgzkffEPYJhBUt-football.jpeg?alt=media&amp;token=6a86059f-2330-4957-a9a6-096c8dd5a28f" alt="football.jpeg" width="1000" height="667" />ccxcv,dnvkxcnv</p> <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Touchdown for the Sea Devils 🙌<br><br>📺 Watch <a href="https://twitter.com/hashtag/HSDatFGY?src=hash&amp;ref_src=twsrc%5Etfw">#HSDatFGY</a> live NOW with the ELF Game Pass <a href="https://t.co/lfLXqxYqfk">pic.twitter.com/lfLXqxYqfk</a></p>&mdash; European League of Football (@ELF_Official) <a href="https://twitter.com/ELF_Official/status/1807462917173854242?ref_src=twsrc%5Etfw">June 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    _createdBy: {
        displayName: "Will Jones (Co-Founder)",
        photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIsWgURuqyixqyN3YWF4IDYlrHtuVIlK6CI2lw372rIDrPcaXLz=s96-c",
        timestamp: "July 3, 2024 at 11:46:07 PM UTC+1"
    },
    league: 'European League of Football'
    }
  ]
  
  export default function NewsList() {
    return (
      <div className="bg-white mt-3">
        <div className="mx-auto">
          <div className="mx-auto">
            <div className="mt-3 space-y-5">
              {articles.map((article) => (
                <NewsListArticle article={article} key={article.id}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  