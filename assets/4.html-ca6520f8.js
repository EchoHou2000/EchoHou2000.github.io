const e=JSON.parse(`{"key":"v-2d8779ec","path":"/posts/leetcode/4.html","title":"4.岛屿数量","lang":"zh-CN","frontmatter":{"date":"2023-10-14T00:00:00.000Z","category":["DFS"],"tag":["递归","面试高频","已做三遍"],"description":"4.岛屿数量 题目 给你一个由'1'(陆地)和'0'(水)组成的二维网格，请你计算网格中的岛屿数量。 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。 此外，你可以假设该网格的四条边均被水包围。 输入：grid = [ [\\"1\\",\\"1\\",\\"1\\",\\"1\\",\\"0\\"], [\\"1\\",\\"1\\",\\"0\\",\\"1\\",\\"0\\"], [\\"1\\",\\"1\\",\\"0\\",\\"0\\",\\"0\\"], [\\"0\\",\\"0\\",\\"0\\",\\"0\\",\\"0\\"] ] 输出：1","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blogs/posts/leetcode/4.html"}],["meta",{"property":"og:site_name","content":"Echo的学习之路"}],["meta",{"property":"og:title","content":"4.岛屿数量"}],["meta",{"property":"og:description","content":"4.岛屿数量 题目 给你一个由'1'(陆地)和'0'(水)组成的二维网格，请你计算网格中的岛屿数量。 岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。 此外，你可以假设该网格的四条边均被水包围。 输入：grid = [ [\\"1\\",\\"1\\",\\"1\\",\\"1\\",\\"0\\"], [\\"1\\",\\"1\\",\\"0\\",\\"1\\",\\"0\\"], [\\"1\\",\\"1\\",\\"0\\",\\"0\\",\\"0\\"], [\\"0\\",\\"0\\",\\"0\\",\\"0\\",\\"0\\"] ] 输出：1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-14T10:35:29.000Z"}],["meta",{"property":"article:author","content":"Echo Hou"}],["meta",{"property":"article:tag","content":"递归"}],["meta",{"property":"article:tag","content":"面试高频"}],["meta",{"property":"article:tag","content":"已做三遍"}],["meta",{"property":"article:published_time","content":"2023-10-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-14T10:35:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.岛屿数量\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-10-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-10-14T10:35:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Echo Hou\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"题目","slug":"题目","link":"#题目","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]}],"git":{"createdTime":1696902350000,"updatedTime":1697279729000,"contributors":[{"name":"houbingzhi123","email":"houbingzhi123@gmail.com","commits":3}]},"readingTime":{"minutes":1.63,"words":490},"filePathRelative":"posts/leetcode/4.md","localizedDate":"2023年10月14日","excerpt":"<h1> 4.岛屿数量</h1>\\n<h2> 题目</h2>\\n<p>给你一个由'1'(陆地)和'0'(水)组成的二维网格，请你计算网格中的岛屿数量。</p>\\n<p>岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。</p>\\n<p>此外，你可以假设该网格的四条边均被水包围。</p>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>输入：grid = [\\n  [\\"1\\",\\"1\\",\\"1\\",\\"1\\",\\"0\\"],\\n  [\\"1\\",\\"1\\",\\"0\\",\\"1\\",\\"0\\"],\\n  [\\"1\\",\\"1\\",\\"0\\",\\"0\\",\\"0\\"],\\n  [\\"0\\",\\"0\\",\\"0\\",\\"0\\",\\"0\\"]\\n]\\n输出：1\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
