import{_ as e,c as o,o as d,ae as s}from"./chunks/framework.U90kodRI.js";const f=JSON.parse('{"title":"API References","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-references.md","filePath":"api-references.md"}'),a={name:"api-references.md"};function c(n,t,r,i,h,l){return d(),o("div",null,t[0]||(t[0]=[s('<h1 id="api-references" tabindex="-1">API References <a class="header-anchor" href="#api-references" aria-label="Permalink to &quot;API References&quot;">​</a></h1><h2 id="methods-to-create-toasts" tabindex="-1">Methods to Create Toasts: <a class="header-anchor" href="#methods-to-create-toasts" aria-label="Permalink to &quot;Methods to Create Toasts:&quot;">​</a></h2><p>These methods are available on the instance of the library. To find the methods available on the instance of the created toast please have a look in the <code>ToastEntry</code> API reference.</p><table tabindex="0"><thead><tr><th>Method Name</th><th>Description</th></tr></thead><tbody><tr><td><code>notify(content: ToastContent, options?: ToastOptions):ToastEntry</code></td><td>Displays and returns the toast</td></tr><tr><td><code>info(content: ToastContent, options?: ToastOptions):ToastEntry</code></td><td>Displays and returns the toast of type <code>info</code>.</td></tr><tr><td><code>success(content: ToastContent, options?: ToastOptions):ToastEntry</code></td><td>Displays and returns the toast of type <code>success</code></td></tr><tr><td><code>warn(content: ToastContent, options?: ToastOptions):ToastEntry</code></td><td>Displays and returns the toast of type <code>warning</code></td></tr><tr><td><code>error(content: ToastContent, options?: ToastOptions):ToastEntry</code></td><td>Displays and returns the toast with type <code>error</code></td></tr><tr><td><code>closeAll()</code></td><td>Will close all the toast notifications</td></tr></tbody></table><h2 id="toastcontent" tabindex="-1">ToastContent <a class="header-anchor" href="#toastcontent" aria-label="Permalink to &quot;ToastContent&quot;">​</a></h2><p>It is used as the first parameter of the <code>notify()</code>,<code>success()</code>, <code>info()</code>, <code>warn()</code>, <code>error()</code> and <code>update()</code> methods.</p><p>For Example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">toast.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">notify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(content: ToastContent, options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ToastOptions)</span></span></code></pre></div><p>ToastContent can be either one of the following type:</p><p><code>string</code> , <code>{ title?: Title; message?: ToastMessage; buttons?: Button[]; }</code> or <code>HTMLElement</code></p><h2 id="list-of-options-toastoptions" tabindex="-1">List of Options (ToastOptions): <a class="header-anchor" href="#list-of-options-toastoptions" aria-label="Permalink to &quot;List of Options (ToastOptions):&quot;">​</a></h2><p>Options are optional.</p><table tabindex="0"><thead><tr><th>Option Name</th><th>Type</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>position</code></td><td><code>top-left</code>, <code>top-right</code>, <code>top-center</code>, <code>bottom-left</code>, <code>bottom-right</code>, <code>center</code></td><td>Position of the toast on the screen</td><td><code>top-right</code></td></tr><tr><td><code>animation</code></td><td><code>slide</code>, <code>bounce</code>, <code>fade</code>, <code>zoom</code></td><td>Animation that will be applied once the Toast appears and disappears</td><td><code>slide</code></td></tr><tr><td><code>type</code></td><td><code>default</code>, <code>success</code>, <code>info</code>,<code>warning</code>, <code>error</code></td><td>Type of the Toast</td><td><code>default</code></td></tr><tr><td><code>design</code></td><td><code>minimal</code>, <code>standard</code>, <code>colorful</code>,<code>gradient</code></td><td>Design of the Toast</td><td><code>minimal</code></td></tr><tr><td><code>theme</code></td><td><code>light</code>, <code>dark</code>, <code>system</code></td><td>Color mode of the Toast</td><td><code>light</code></td></tr><tr><td><code>duration</code></td><td><code>number</code></td><td>Duration in millisecond for which the toast is visible</td><td><code>3000</code></td></tr><tr><td><code>autoClose</code></td><td><code>boolean</code></td><td>If the Toast should closed automatically once Duration is elapsed</td><td><code>true</code></td></tr><tr><td><code>hasProgressBar</code></td><td><code>boolean</code></td><td>If the Toast should have a progressbar</td><td><code>false</code></td></tr><tr><td><code>progress</code></td><td><code>number</code></td><td>If the Progress Bar is visible then it will be used as starting position of the progress. Value must be between 0 to 100</td><td><code>0</code></td></tr><tr><td><code>isCloseable</code></td><td><code>boolean</code></td><td>If the Toast should have the close icon</td><td><code>true</code></td></tr><tr><td><code>container</code></td><td><code>HTMLElement</code></td><td>Container where the all Toasts will be mounted</td><td><code>document.body</code></td></tr><tr><td><code>classNames</code></td><td><code>string[]</code></td><td>A list of classes which will be added on the Toast</td><td><code>[]</code></td></tr><tr><td><code>hasIcon</code></td><td><code>boolean</code></td><td>If the Toast should have Icon visible</td><td><code>true</code></td></tr><tr><td><code>icon</code></td><td><code>{url: string, classes: string[], size: &quot;small or medium or large&quot;}</code></td><td>Size of the Icon of the Toast</td><td><code>small</code></td></tr><tr><td><code>offset</code></td><td><code>{x: number, y: number}</code></td><td>Gap from the nearest edges or the Container. <code>x</code> and <code>y</code> values are treated as <code>px</code></td><td><code>{x:30, y:30}</code></td></tr><tr><td><code>onShow</code></td><td>() =&gt; void</td><td>Will be called once the Toast is appread in the screen after finising Animation</td><td></td></tr><tr><td><code>onClose</code></td><td>() =&gt; void</td><td>Will be called once the Toast is removed from the DOM</td><td></td></tr></tbody></table><h2 id="methods-and-properties-exposed-by-the-toast" tabindex="-1">Methods and Properties exposed by the Toast: <a class="header-anchor" href="#methods-and-properties-exposed-by-the-toast" aria-label="Permalink to &quot;Methods and Properties exposed by the Toast:&quot;">​</a></h2><p>The Toast implements the <code>ToastEntry</code> interface which offers following methods and Properties:</p><table tabindex="0"><thead><tr><th>Method/Property Name</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td><code>update(content: ToastContent, options?: ToastOptions)</code></td><td>Updates the existing toast with new <code>ToastContent</code> and can modify the UI and behavior of that toast by passing configurations as <code>ToastOptions</code></td><td><code>() =&gt; {}</code></td></tr><tr><td><code>close()</code></td><td>Closes the toast that was created earlier</td><td><code>() =&gt; {}</code></td></tr><tr><td><code>closeAll()</code></td><td>Will close all the toast notifications</td><td><code>() =&gt; {}</code></td></tr><tr><td><code>mountedIn</code></td><td>It is the container Element of type <code>HTMLElement</code> that contains the Toast</td><td><code>HTMLElement</code></td></tr><tr><td><code>element</code></td><td>The reference of the DOM Node of the Toast</td><td><code>HTMLElement</code></td></tr><tr><td><code>options</code></td><td>The options applied on the Toast</td><td><code>ToastEntry</code></td></tr></tbody></table>',16)]))}const m=e(a,[["render",c]]);export{f as __pageData,m as default};
