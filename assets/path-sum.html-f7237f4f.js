import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,a as t}from"./app-65b5451e.js";const e="/blogs/assets/image-2-23c0e5ad.png",p={},o=t('<h1 id="_7-路径总和" tabindex="-1"><a class="header-anchor" href="#_7-路径总和" aria-hidden="true">#</a> 7.路径总和</h1><p>给你二叉树的根节点 root 和一个表示目标和的整数 targetSum 。判断该树中是否存在 根节点到叶子节点 的路径，这条路径上所有节点值相加等于目标和 targetSum 。如果存在，返回 true ；否则，返回 false 。</p><p>叶子节点 是指没有子节点的节点。</p><figure><img src="'+e+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
输出：true
解释：等于目标和的根节点到叶节点路径如上图所示。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>要求<strong>根节点到叶子节点</strong>这条路径上的节点之和，等于目标和，所以需要判断当前的节点是否是根节点。每遍历一个节点，目标和就减去节点的值，遍历到根节点时，判断这个计数器是否为0。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TreeNode</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> left<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span> right<span class="token punctuation">;</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">TreeNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span><span class="token class-name">TreeNode</span> left<span class="token punctuation">,</span><span class="token class-name">TreeNode</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> left<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">{</span>
    <span class="token comment">// 这个函数隐含着回溯的细节，因为是把targetSum作为参数整体传进去的</span>
    <span class="token comment">// 函数结束后，targetSum的值并没有改变</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">hasPathSum</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span> root<span class="token punctuation">,</span><span class="token keyword">int</span> targetSum<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        targetSum <span class="token operator">-=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>right <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> targetSum <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>targetSum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">hasPathSum</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span>targetSum<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[o];function l(i,u){return s(),a("div",null,c)}const d=n(p,[["render",l],["__file","path-sum.html.vue"]]);export{d as default};
