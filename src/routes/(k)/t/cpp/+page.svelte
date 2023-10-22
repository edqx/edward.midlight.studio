<script>
    import Tool from "../Tool.svelte";
</script>

<svelte:head>
    <title>C++ | Edward Smale</title>
</svelte:head>

<Tool>
    <span slot="name">C++/C</span>
    <span slot="time">Since 2019</span>

    I spent over a year working on a mod for the video game <a href="https://en.wikipedia.org/wiki/Counter-Strike#Global_Offensive">CSGO</a>, written
    entirely in C++. It was almost entirely made from scratch, and gave me a lot of insight into low-level programming,
    managing memory and raw assembly.
    <br><br>
    The actual program made use of the popular <a href="https://github.com/ocornut/imgui">Dear ImGUI</a> framework to provide an interface
    for users to interact with the mod.
    <br><br>
    I've also experimented with using C++ for network programming, making a small game server using raw Windows (and Linux) UDP sockets.
</Tool>