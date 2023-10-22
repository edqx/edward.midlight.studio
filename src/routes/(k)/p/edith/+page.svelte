<script lang="ts">
    import Gallery from "../../Gallery.svelte";
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Edith | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">Edith</span>
    <span slot="time">Since 2022</span>
    <Gallery slot="images" name="Edith" imageSrcs={[ "/edith-1.png", "/edith-2.png", "/edith-3.png", "/edith-4.png" ]}/>

    Edith is by far my most ambitious project, and I am working on it with a friend who is responsible
    for the artwork as well as the story with me. Initially, I was using <a href="https://unity.com/">Unity</a>
    for it, however due to some changes in the management at Unity as well as some personal dissatisfaction with
    it, I have since decided to take up the task of making my own specialised engine for the project, currently
    under the codename "Constellation".
    <br><br>
    The scope for Edith is vast compared to all of my other projects, it is an ambition that will take
    years to fulfil and will require lots of work in both story design and tools. For example, I have created
    the dialogue editor <a href="/p/chronicle">Chronicle</a> to be able to quickly design and prototype
    conversations between characters in-game as well as allow other members of the team to make changes without
    learning Unity or any programming.
    <br><br>
    In terms of technical specifics, Edith aims to have a fully 3d lighting system with weather and dynamic puddles,
    audio and shaders depending on in-game time. The new engine will use the <a href="https://ziglang.org">Zig</a>
    programming language, with the <a href="https://v8.dev/">V8 JavaScript</a> runtime embedded for scripting.
</Project>