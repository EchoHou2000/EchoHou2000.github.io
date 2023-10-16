const t=JSON.parse('{"key":"v-6d907f8c","path":"/posts/huancun.html","title":"缓存击穿和缓存穿透如何解决","lang":"zh-CN","frontmatter":{"date":"2023-10-16T00:00:00.000Z","category":["Redis"],"tag":["面试高频","缓存"],"description":"缓存击穿和缓存穿透如何解决 当数据量达到一定数量级后，对于用户经常访问的数据（热点数据）或者构建比较复杂的数据，只用MySQL进行查询是比较耗时的，所以我们用Redis进行缓存，因为是基于内存的数据库，所以查询很快。 但是使用缓存又会产生一些问题，比如缓存雪崩、缓存击穿、缓存穿透。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/posts/huancun.html"}],["meta",{"property":"og:site_name","content":"Echo的学习之路"}],["meta",{"property":"og:title","content":"缓存击穿和缓存穿透如何解决"}],["meta",{"property":"og:description","content":"缓存击穿和缓存穿透如何解决 当数据量达到一定数量级后，对于用户经常访问的数据（热点数据）或者构建比较复杂的数据，只用MySQL进行查询是比较耗时的，所以我们用Redis进行缓存，因为是基于内存的数据库，所以查询很快。 但是使用缓存又会产生一些问题，比如缓存雪崩、缓存击穿、缓存穿透。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-16T07:04:52.000Z"}],["meta",{"property":"article:author","content":"Echo Hou"}],["meta",{"property":"article:tag","content":"面试高频"}],["meta",{"property":"article:tag","content":"缓存"}],["meta",{"property":"article:published_time","content":"2023-10-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-16T07:04:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"缓存击穿和缓存穿透如何解决\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-16T07:04:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo Hou\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"缓存击穿","slug":"缓存击穿","link":"#缓存击穿","children":[{"level":3,"title":"如何解决","slug":"如何解决","link":"#如何解决","children":[]}]},{"level":2,"title":"缓存穿透","slug":"缓存穿透","link":"#缓存穿透","children":[{"level":3,"title":"如何解决","slug":"如何解决-1","link":"#如何解决-1","children":[]}]}],"git":{"createdTime":1697439892000,"updatedTime":1697439892000,"contributors":[{"name":"houbingzhi123","email":"houbingzhi123@gmail.com","commits":1}]},"readingTime":{"minutes":2.6,"words":779},"filePathRelative":"posts/huancun.md","localizedDate":"2023年10月16日","excerpt":"<h1> 缓存击穿和缓存穿透如何解决</h1>\\n<p>当数据量达到一定数量级后，对于用户经常访问的数据（热点数据）或者构建比较复杂的数据，只用MySQL进行查询是比较耗时的，所以我们用Redis进行缓存，因为是基于内存的数据库，所以查询很快。</p>\\n<p>但是使用缓存又会产生一些问题，比如缓存雪崩、缓存击穿、缓存穿透。</p>\\n<figure><img src=\\"https://cdn.xiaolincoding.com//mysql/other/61781cd6d82e4a0cc5f7521333049f0d.png\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}');export{t as data};
