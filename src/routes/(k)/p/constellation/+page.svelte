<script lang="ts">
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Constellation | Edward Smale</title>
</svelte:head>

<Project>
    <span class="-sm:text-6xl" slot="name">Constellation</span>
    <span slot="time">Since 2023</span>

    Using many lessons learnt from my time working on <a href="/p/chronicle">Chronicle</a>, as well
    as being upset with the current state of <a href="https://unity.com/">Unity</a>, I have started to
    work on my own 2D game engine written in <a href="/t/zig">Zig</a>.
    <br><br>
    The primary goal of the engine is to enable easy and rapid development of <a href="/p/edith">Edith</a>,
    through the idea of it being able to construct primarily "Edith-esque" RPG games.
    <br><br>
    The users of Constellation are not expected to know a large amount about programming, so it focuses heavily on
    allowing the development of complex scenarios without learning any programming, which both increases
    accessibility and facilitates the rapid development.
    <br><br>
    It can be seen as a <strong>successor</strong> to Chronicle. The editor is made up of 3 web-based elements: Atlas - for
    world-building, Blossom - for cutscenes, fights and sequences, and, in fact, Chronicle - for dialogues, items and characters.
    The central engine backend codebase combines all three, forming Constellation.
    <br><br>
    The engine makes use of <a href="https://www.opengl.org/">OpenGL</a>, <a href="https://freetype.org/">FreeType</a> and can
    make builds for both <a href="https://webassembly.org/">WASM</a> (for integration with the web editors) and native, using the
    Windows API. 
</Project>