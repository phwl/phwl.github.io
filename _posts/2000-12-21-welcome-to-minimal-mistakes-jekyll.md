---
title:  "Welcome to Minimal Mistakes Jekyll"
date:   2017-12-21
categories: update
tags: jekyll
use_math: true
---

Welcome to the first blog posts of Minimal Mistakes Jekyll. You may edit the title, date, categories, and tags of this blog post to be your own OR delete this post and create a new one.

### Things to take note when creating a blog posts

- Categories and tags are optionals
- All posts should follow the naming convention `YYYY-MM-DD-name-of-post.md`, look at the name of this file to get the idea
- It is recommended that the `name-of-post` in the file name to be all lower case  
- Check this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) out to write your blog posts in markdown


You can enable math support through `use_math: true` front matter which enable the MathJax.js rendering.

After enable math support, use `$$ ... $$` displaying math equation.

<div>
<strong><em>For inline mode</em></strong>
<div style="margin-left:1em;">
    type your equation in line with other text
</div>
<strong><em>For display mode:</em></strong>
<div style="margin-left:1em;">
    type your equation such that there is a blank line <em>before</em> your beginning <code>$$</code> and there is a blank line <em>after</em> your ending <code>$$</code>
</div>
</div>

<br>
As an example, the following *code*:
```
The Pythagoras' theorem state that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides $$a$$, $$b$$ and
$$c$$, often called the "Pythagorean equation":

$$a^2 + b^2 = c^2$$

where $$c$$ represents the length of the hypotenuse and $$a$$ and $$b$$ the lengths of the triangle's other two sides. `[source: wikipedia]`

This also implies that for any square with side length $$x$$, the length of its diagonal is $$\sqrt{2}x$$.

**_Proof:_**
Let the length of diagonal be $$d$$. Apply Pythagoras theorem on the right angle triangle that has the diagonal as hypotenuse, and side of square as the other two side, we have:

$$
\begin{align*}
x^2 + x^2 &= d^2 \\
d^2 &= 2x^2 \\
d &= \sqrt{2}x \tag*{$\blacksquare$}
\end{align*}
$$

```
<br>
*produces*:
<hr>

The Pythagoras' theorem state that the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides. The theorem can be written as an equation relating the lengths of the sides $$a$$, $$b$$ and
$$c$$, often called the "Pythagorean equation":

$$a^2 + b^2 = c^2$$

where $$c$$ represents the length of the hypotenuse and $$a$$ and $$b$$ the lengths of the triangle's other two sides. `[source: wikipedia]`

This also implies that for any square with side length $$x$$, the length of its diagonal is $$\sqrt{2}x$$.

**_Proof:_** Let the length of diagonal be $$d$$. Apply Pythagoras theorem on the right angle triangle that has the diagonal as hypotenuse, and side of square as the other two side, we have:

$$
\begin{align*}
x^2 + x^2 &= d^2 \\
d^2 &= 2x^2 \\
d &= \sqrt{2}x \tag*{$\blacksquare$}
\end{align*}
$$

<hr>

**_Reference_**
- <https://math.meta.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-qu%E2%80%8C%E2%80%8Bick-reference> (MathJax cheatsheet)
- <https://cdn.rawgit.com/mathjax/MathJax/2.7.1/test/sample-eqnum.html> (some MathJax example)
- <https://www.mathjax.org/#demo> (test your equation at here)
- <https://kramdown.gettalong.org/syntax.html#math-blocks> (Kramdown rendering of `$$...$$` to math mode)
