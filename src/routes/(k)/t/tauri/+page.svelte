<script>
    import Tool from "../Tool.svelte";
</script>

<svelte:head>
    <title>Tauri | Edward Smale</title>
</svelte:head>

<Tool>
    <span slot="name">Tauri</span>
    <span slot="time">Since 2022</span>

    I used to use <a href="https://www.electronjs.org">Electron</a> for desktop apps as I already knew JavaScript, HTML and CSS and I was inspired
    by apps such as Discord, Visual Studio Code, Microsoft Teams, etc.
    <br><br>
    However, recently I have used <a href="https://tauri.app/">Tauri</a> because it results in much lower bundle sizes and has security options to keep
    users safer. Using the Tauri APIs, my apps interact with the user's filesystem as well as running other applications embedded in the program
    as what it calls <a class="italic" href="https://tauri.app/v1/guides/building/sidecar/">sidecars</a>.
    <br><br>
    The launcher for <a href="/p/pgg">Polus.GG: Rewritten</a> was made using Tauri, interacting with the user's filesystem and running
    <a class="italic" href="https://tauri.app/v1/guides/building/sidecar">sidecars</a> (embedded executables) for downloading and updating the mod.
    I also used Tauri for my dialogue creator program <a href="/p/chronicle">Chronicle</a>.
</Tool>
