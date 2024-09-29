<script lang="ts">
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Constellation | Edward Smale</title>
</svelte:head>

<Project>
    <span class="-sm:text-6xl" slot="name">Constellation</span>
    <span slot="time">Since 2023</span>

    Using many lessons learnt from my time working on <a href="/p/chronicle">Chronicle</a> &mdash; it's predecessor &mdash; as well
    as being upset with the current state of <a href="https://unity.com/">Unity</a>, Constellation is my new 2D game engine
    for writing highly interactive top-down RPGs.
    <br><br>
    The primary goal of the engine is to enable easy and rapid development of <a href="/p/edith">Edith</a>,
    through the idea of it being able to construct primarily "Edith-esque" RPG games.
    <br><br>
    The users of Constellation are not expected to know a large amount about programming, so it focuses heavily on
    allowing the development of complex scenarios without learning any programming, which both increases
    accessibility and facilitates the rapid development.
    <br><br>
    Internally, the Constellation editor and engine use a custom protocol and archive solution, both of which are declared in an
    XML spec document. The editor is written in <a href="/t/javascript">HTML5</a> accessible on any device, and the
    engine is written in <a href="/t/zig">Zig</a>.
    <br><br>
    The engine makes use of <a href="https://www.opengl.org/">OpenGL</a>, <a href="https://freetype.org/">FreeType</a> and can
    make builds for both <a href="https://webassembly.org/">WASM</a> (for integration with the web editors) and native, using the
    Windows API. 
</Project>
