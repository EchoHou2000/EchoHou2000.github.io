const e=JSON.parse('{"key":"v-24b7c48d","path":"/posts/dragonfruit.html","title":"double类型的值可以赋给long变量吗？","lang":"zh-CN","frontmatter":{"date":"2023-10-13T00:00:00.000Z","category":["Java基础"],"tag":["面试","基础语法"],"description":"double类型的值可以赋给long变量吗？ 在不进行强制转换的情况下，double类型的值可以赋给long变量吗？ 不可以。即使double类型的值是1，这个值也不能赋给long变量。 比如下面这两种写法，都是错的，编译器会报错： double a = 0.1 long b = a; // 编译报错 long b = 0.1; // 编译报错","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/posts/dragonfruit.html"}],["meta",{"property":"og:site_name","content":"Echo的学习之路"}],["meta",{"property":"og:title","content":"double类型的值可以赋给long变量吗？"}],["meta",{"property":"og:description","content":"double类型的值可以赋给long变量吗？ 在不进行强制转换的情况下，double类型的值可以赋给long变量吗？ 不可以。即使double类型的值是1，这个值也不能赋给long变量。 比如下面这两种写法，都是错的，编译器会报错： double a = 0.1 long b = a; // 编译报错 long b = 0.1; // 编译报错"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-14T10:35:29.000Z"}],["meta",{"property":"article:author","content":"Echo Hou"}],["meta",{"property":"article:tag","content":"面试"}],["meta",{"property":"article:tag","content":"基础语法"}],["meta",{"property":"article:published_time","content":"2023-10-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-14T10:35:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"double类型的值可以赋给long变量吗？\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-14T10:35:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo Hou\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1696827095000,"updatedTime":1697279729000,"contributors":[{"name":"houbingzhi123","email":"houbingzhi123@gmail.com","commits":4}]},"readingTime":{"minutes":0.45,"words":135},"filePathRelative":"posts/dragonfruit.md","localizedDate":"2023年10月13日","excerpt":"<h1> double类型的值可以赋给long变量吗？</h1>\\n<p>在不进行强制转换的情况下，double类型的值可以赋给long变量吗？</p>\\n<p><strong>不可以</strong>。即使double类型的值是1，这个值也不能赋给long变量。</p>\\n<p>比如下面这两种写法，都是错的，编译器会报错：</p>\\n<div class=\\"language-java line-numbers-mode\\" data-ext=\\"java\\"><pre class=\\"language-java\\"><code><span class=\\"token keyword\\">double</span> a <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0.1</span>\\n<span class=\\"token keyword\\">long</span> b <span class=\\"token operator\\">=</span> a<span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 编译报错</span>\\n<span class=\\"token keyword\\">long</span> b <span class=\\"token operator\\">=</span> <span class=\\"token number\\">0.1</span><span class=\\"token punctuation\\">;</span> <span class=\\"token comment\\">// 编译报错</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
