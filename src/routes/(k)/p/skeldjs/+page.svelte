<script lang="ts">
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>SkeldJS | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">SkeldJS</span>
    <span slot="time">2020-2023</span>

    SkeldJS is a set of libraries related to the video game Among Us, including a headless implementation of the game
    in JavaScript, as well as utilities related to the protocol and network utilities for joining games entirely
    programmatically. 
    <br><br>
    The codebase for SkeldJS is my biggest so far, with over 50,000 lines of dense logic and reverse-engineered implementations
    of various game functions. It was used for my other projects related to the game, for example <a href="/p/pgg">Polus.GG: Rewritten</a>,
    and <a href="https://github.com/skeldjs/Hindenburg">Hindenburg</a> - a custom private server for the game.
</Project>