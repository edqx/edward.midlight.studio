<script>
    import Tool from "../Tool.svelte";
</script>

<svelte:head>
    <title>Svelte | Edward Smale</title>
</svelte:head>

<Tool>
    <span slot="name">Svelte</span>
    <span slot="time">Since 2021</span>

    Svelte is by far my favourite web framework, having worked with <a href="https://vuejs.org/">Vue</a> and
    <a href="https://react.dev/">React</a> in the past.
    <br><br>
    This website is written in Svelte, using <a href="http://kit.svelte.dev">SvelteKit</a> to handle routing
    between pages and allowing for the smooth transition between them. In fact, most of the sites I make use Svelte,
    as it allows me to quickly prototype and easily deploy them to hosting services like <a href="https://vercel.com">Vercel</a>.
</Tool>