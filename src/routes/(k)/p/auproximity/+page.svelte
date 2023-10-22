<script lang="ts">
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>AUProximity | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">AUProximity</span>
    <span slot="time">2021-2022</span>

    AUProximity was a freely accessible website for players of the video game Among Us to play in a way that allows
    them to talk to players as they are near eachother physically in the game. This made use of <a href="/p/skeldjs">SkeldJS</a>
    to process game information, and used <a href="https://webrtc.org/">WebRTC</a> for real-time voice communication
    for both mobile and desktop players.
    <br><br>
    It was created by another member of the modding community for Among Us, but I later took over when he abandoned the
    project. Immediately, I worked to revamp the whole thing, refactoring to use SkeldJS and make the entire system
    more stable with more features for players. I was also joined by another developer later on who I worked with to
    implement tools such as <a href="https://prometheus.io/">Prometheus</a>, <a href="https://grafana.com/">Grafana</a>
    and <a href="https://glitchtip.com/">Glitchtip</a> to record errors that users might encounter to fix them as
    soon as possible.
</Project>