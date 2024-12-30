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
    I maintained it for 3 years and updated it whenever new versions of the game were released. I created a chat room
    to talk to users of the libraries, helping them to integrate SkeldJS into their own projects and listening and implementing
    feedback.
    <br><br>
    Much of the time working on the libraries was spent reverse-engineering the original game to re-implement
    in the SkeldJS codebase, resulting in over 50,000 lines of code.
    <br><br>
    <span class="text-2xl">Hindenburg</span>
    <br>
    Hindenburg was my Among Us server implementation which used SkeldJS internally. It allowed users to set up their own
    private servers, and write plugins that could change the behaviour of the game. It was something of an innovation in the
    Among Us modding world as it was the first public Server-as-a-Host implementation that moved authority from the client
    to the server.
    <br><br>
    Hindenburg was later used for <a href="/p/pgg">Polus.GG: Rewritten</a>, a large mod for the game and a great exercise to show
    the flexibility and power of Hindenburg plugins.
</Project>
