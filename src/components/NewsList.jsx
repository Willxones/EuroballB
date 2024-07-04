const posts = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit fsdjknfbjsdb bfhjdbfsd uihsdih ',
      href: 'article',
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
      {
        id: 4,
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
        id: 5,
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
        id: 6,
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
        id: 7,
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
        id: 8,
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
    // More posts...
  ]
  
  export default function NewsList() {
    return (
      <div className="bg-white mt-10">
        <div className="mx-auto">
          <div className="mx-auto">
            <div className="mt-3 space-y-5">
              {posts.map((post) => (
                <article key={post.id} className="relative isolate flex flex-col gap-8 lg:flex-row lg:h-44 overflow-hidden">
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square my-auto lg:w-64 lg:shrink-0 h-auto lg:h-36">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-lg bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
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
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="lg:mt-3 mt-5 text-sm leading-6 text-gray-600 ">{post.description}</p>
                    </div>
                    
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  