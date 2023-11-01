const t=JSON.parse('{"key":"v-bec7415e","path":"/posts/net.html","title":"为什么用WebSocket协议而不是HTTP","lang":"zh-CN","frontmatter":{"date":"2023-10-12T00:00:00.000Z","category":["计算机网络"],"tag":["WebSocket","项目","原创"],"description":"为什么用WebSocket协议而不是HTTP 业务需求 业务背景是一个类似于B站的视频弹幕系统，现在需要实现一个用户发送弹幕和获取弹幕（推送弹幕）功能。 场景是这样的，用户进入我们的系统，在视频列表点进自己感兴趣的视频，然后看到了视频上方的弹幕，自己也可以发送一条弹幕，这条弹幕也会推送到所有在线看到视频的用户。 为什么不用HTTP协议 如果我们采用传统的HTTP协议，效果如何？ HTTP协议是短连接，并且是单向的，也就是说，客户端需要不停地轮询服务端：\\"你那有没有资源？\\"，如果有，会进行一个拉取资源的操作，而服务端并不会主动向客户端推送资源。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/posts/net.html"}],["meta",{"property":"og:site_name","content":"Echo的学习之路"}],["meta",{"property":"og:title","content":"为什么用WebSocket协议而不是HTTP"}],["meta",{"property":"og:description","content":"为什么用WebSocket协议而不是HTTP 业务需求 业务背景是一个类似于B站的视频弹幕系统，现在需要实现一个用户发送弹幕和获取弹幕（推送弹幕）功能。 场景是这样的，用户进入我们的系统，在视频列表点进自己感兴趣的视频，然后看到了视频上方的弹幕，自己也可以发送一条弹幕，这条弹幕也会推送到所有在线看到视频的用户。 为什么不用HTTP协议 如果我们采用传统的HTTP协议，效果如何？ HTTP协议是短连接，并且是单向的，也就是说，客户端需要不停地轮询服务端：\\"你那有没有资源？\\"，如果有，会进行一个拉取资源的操作，而服务端并不会主动向客户端推送资源。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-31T13:43:15.000Z"}],["meta",{"property":"article:author","content":"Echo Hou"}],["meta",{"property":"article:tag","content":"WebSocket"}],["meta",{"property":"article:tag","content":"项目"}],["meta",{"property":"article:tag","content":"原创"}],["meta",{"property":"article:published_time","content":"2023-10-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T13:43:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"为什么用WebSocket协议而不是HTTP\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-12T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-31T13:43:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo Hou\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"业务需求","slug":"业务需求","link":"#业务需求","children":[]},{"level":2,"title":"为什么不用HTTP协议","slug":"为什么不用http协议","link":"#为什么不用http协议","children":[]},{"level":2,"title":"WebSocket好在哪里","slug":"websocket好在哪里","link":"#websocket好在哪里","children":[]}],"git":{"createdTime":1698759795000,"updatedTime":1698759795000,"contributors":[{"name":"houbingzhi123","email":"houbingzhi123@gmail.com","commits":1}]},"readingTime":{"minutes":2.24,"words":673},"filePathRelative":"posts/net.md","localizedDate":"2023年10月12日","excerpt":"<h1> 为什么用WebSocket协议而不是HTTP</h1>\\n<h2> 业务需求</h2>\\n<p>业务背景是一个类似于B站的视频弹幕系统，现在需要实现一个用户发送弹幕和获取弹幕（推送弹幕）功能。</p>\\n<p>场景是这样的，用户进入我们的系统，在视频列表点进自己感兴趣的视频，然后看到了视频上方的弹幕，自己也可以发送一条弹幕，这条弹幕也会推送到所有在线看到视频的用户。</p>\\n<h2> 为什么不用HTTP协议</h2>\\n<p>如果我们采用传统的HTTP协议，效果如何？</p>\\n<p>HTTP协议是短连接，并且是单向的，也就是说，客户端需要不停地轮询服务端：\\"你那有没有资源？\\"，如果有，会进行一个拉取资源的操作，而服务端并不会主动向客户端推送资源。</p>","autoDesc":true}');export{t as data};
