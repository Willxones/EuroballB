export default function ArticleContent() {
    return(
        <>
        <div>
            <img className="w-full h-60 md:h-80 lg:h-[550px] object-cover rounded-lg shadow-lg" src="https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg" alt="Article Image"/>
            <div className="pt-10 pb-5">
                <h1 className="text-2xl lg:text-5xl font-semibold">This is the article title for article stuff about football and whatever and stuff</h1>
            </div>
            <div className="flex gap-4">
                <div>
                    <h3 className="font-medium">Brad Duff</h3>
                    <h4 className="text-sm text-gray-600">Co-Founder / Writer</h4>
                </div>
                <div className="mr-0 ml-auto">
                    <p className="font-medium">European League of Football</p>
                    <p className="text-sm text-gray-500">Mar 16, 2020</p>
                </div>
            </div>
            <div className="text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi, illum, explicabo harum fugit obcaecati, totam corrupti accusamus earum velit laborum nisi. Vitae inventore, necessitatibus voluptas repudiandae repellat ipsum error. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus rem inventore consequuntur, non nobis fuga alias. Aperiam esse fuga nisi, voluptas inventore assumenda perferendis similique exercitationem fugit, impedit laborum?
            </div>
        </div>
        </>
    )
}