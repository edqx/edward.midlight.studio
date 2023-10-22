<script lang="ts">
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Ryuujin | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">Ryuujin</span>
    <span slot="time">2020-2020</span>

    My high school made use of a program called <a href="https://www.satchelone.com/">ShowMyHomework</a> to manage student's
    homework and assignments. After the COVID-19 lockdowns, all of our work was done using this site.
    <br><br>
    However, I wasn't particularly happy with the way the site worked and it was slow and made it difficult just for me to
    know what work I had to do and for when. To fix this, I made <b>Ryuujin</b>, a custom client for the site which made use of a
    library created to interface with the undocumented ShowMyHomework API.
    <br><br>
    It had many more features than the official client, and was much faster and I could easily see exactly which tasks I had
    and for when they were due. I didn't share the program with many people, but the few who I did share it with made use of the
    features and found it to also have the benefits that I made it for.
    <br><br>
    It was one of my first experiences with using <a href="https://svelte.dev">Svelte</a>, integrating it with <a href="https://www.electronjs.org/">Electron.</a>
</Project>