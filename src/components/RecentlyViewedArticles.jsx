const posts = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
        imageUrl:
          'https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'European League of Football', href: '#' },
        author: {
          name: 'Brad Duff',
          role: 'Co-Founder / Writer',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
          id: 2,
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
          imageUrl:
            'https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'German Football League', href: '#' },
          author: {
            name: 'Brad Duff',
            role: 'Co-Founder / Writer',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
        {
          id: 3,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          href: '#',
          description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.',
          imageUrl:
            'https://www.liveu.tv/wp-content/uploads/2023/07/European-League-of-Football-ELF-scaled.jpg',
          date: 'Mar 16, 2020',
          datetime: '2020-03-16',
          category: { title: 'European League of Football', href: '#' },
          author: {
            name: 'Brad Duff',
            role: 'Co-Founder / Writer',
            href: '#',
            imageUrl:
              'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          },
        },
    // More posts...
  ]
  
  export default function RecentlyViewedArticles() {
    return (
      <div className="bg-white mt-10 ">
        <div className="mx-auto max-w-7xl">
          <div className="">
            <p className="text-sm font-medium text-gray-500">
              Your Recent Articles
            </p>
          </div>
          <div className="mx-auto mt-3 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start justify-between">
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-lg bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  