import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,d as t,a as n,b as p,f as l}from"./app-569e9fe2.js";const c={},o=n("h1",{id:"反转链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#反转链表","aria-hidden":"true"},"#"),p(" 反转链表")],-1),i=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h2><p>比如原链表是1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;null，反转后应该是5-&gt;4-&gt;3-&gt;2-&gt;1-&gt;null。</p><p>更清楚的：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>反转前：1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;null
反转后：null&lt;-1&lt;-2&lt;-3&lt;-4&lt;-5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>我们注意到，节点具体的值和位置是不变的，变的只是指针和null值的位置。</p><p>那么我们可以采用<strong>双指针</strong>的解法，一个pre指针指向head的前一位，用来反转后代表null值（null&lt;-1&lt;-2&lt;-3&lt;-4&lt;-5）。</p><p>一个cur指针从head开始往后遍历原链表，并且每遍历一个节点，指针要向前反转一次，直到遇到原链表的null值，此时pre值指向链表的最后一个节点，最后return pre即可。</p><p>但是这个过程中有个问题，我们来模拟一下。一开始，pre指针指向null值，cur指针指向head节点，cur指针的next指针指向pre后，pre向后遍历，但是cur再向后遍历时候，发现指针已经没了(为了便于区分，...代表中间什么东西也没有，也就是无next指针，此时<strong>null&lt;-1...2-&gt;3-&gt;4-&gt;5-&gt;null</strong>)，如何再向下一个遍历？</p><p>我们可以定义个temp来临时保存cur的下一个指针即可，即temp=cur.next。<strong>这个temp是用来cur指针下一步遍历的</strong>。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>  <span class="token keyword">class</span> <span class="token class-name">ListNode</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> val<span class="token punctuation">;</span>
    <span class="token class-name">ListNode</span> next<span class="token punctuation">;</span>
    <span class="token comment">// 别忘了写构造方法</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token keyword">int</span> val<span class="token punctuation">,</span><span class="token class-name">ListNode</span> next<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> val<span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>next <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name">ListNode</span> <span class="token function">reverse</span><span class="token punctuation">(</span><span class="token class-name">ListNode</span> head<span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span>head <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token class-name">ListNode</span> pre <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token class-name">ListNode</span> cur <span class="token operator">=</span> head<span class="token punctuation">;</span>
      <span class="token keyword">while</span><span class="token punctuation">(</span>cur <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">ListNode</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
        <span class="token comment">// cur的next指针指向pre</span>
        cur<span class="token punctuation">.</span>next <span class="token operator">=</span> pre<span class="token punctuation">;</span>
        <span class="token comment">// pre移动到cur的位置</span>
        pre <span class="token operator">=</span> cur<span class="token punctuation">;</span>
        <span class="token comment">// cur指针往后走一步</span>
        cur <span class="token operator">=</span> temp<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> pre<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function u(r,d){return a(),e("div",null,[o,t(" more "),i])}const m=s(c,[["render",u],["__file","2.html.vue"]]);export{m as default};
