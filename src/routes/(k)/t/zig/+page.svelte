<script>
    import Tool from "../Tool.svelte";
</script>

<svelte:head>
    <title>Zig | Edward Smale</title>
</svelte:head>

<Tool>
    <span slot="name">Zig</span>
    <span slot="time">Since 2023</span>

    <a href="https://ziglang.org">Zig</a> is one of the first "modern" languages I've had the chance to use extensively. So far, I've used it for
    my game engine, <a href="/p/constellation">Constellation</a>, as well as a small, very performant server
    implementation for Among Us.<br><br>
    Within Zig, my projects make use of its advanced comptime functionality as well as interoperating with C,
    for example using the <a href="https://freetype.org/">FreeType</a> library and <a href="https://www.opengl.org/">OpenGL</a>
    for graphics, as well as the Windows API.<br><br>
</Tool>