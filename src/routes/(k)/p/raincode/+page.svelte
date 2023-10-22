<script lang="ts">
    import Gallery from "../../Gallery.svelte";
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Raincode | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">Raincode</span>
    <span slot="time">Jan. 2022-Apr. 2022</span>
    <Gallery slot="images" name="Raincode" imageSrcs={[ "/raincode-1.png", "/raincode-2.png", "/raincode-3.png", "/raincode-4.png", "/raincode-5.png", "/raincode-6.png" ]}/>

    Raincode was a project as part of my college course's final NEA (Non-Exam Assessment). It was ambitious for college projects
    and vastly surpassed every other project submitted that year for the exam board, described by my teacher as being inspiring
    and the most work he's ever seen done for an NEA project. I received an A* which contributed 20% to my final grade for
    Computer Science.
    <br><br>
    The project itself was to develop a website that gave users a platform to practice their programming skills by solving
    small problems, while competing with other users to complete the problems first. In terms of technical capability and function,
    this required many different moving parts in order for the website to scale properly according to (hypothetical) demand.
    <br><br>
    For example, the entire site was realtime. This means that if a player changed their username, it would be immediately propagated
    to all users who could see that user's username on-screen so that it would update in realtime. Additionally, this realtime behaviour
    was required for the game itself for players to feel engaged with other players and to allow for a chat so that users could
    discuss the game
    <br><br>
    There were 5 different back-end services: an authentication server for handling users, a matchmaking server for handling games,
    a "cronjob" server for handling recurring jobs that needed to be executed every few hours, a realtime distributor server to
    connect many different users to the many different back-end services, and finally a "dispatch" server which securely executed
    and validated the output of solutions according to the problems they were intended to solve.
    <br><br>
    On top of the project itself, I recorded the entire development journey over 4 months with a 1700 page, 150,000 word report
    which discusses both my initial ideas and plans, as well as the development progress itself and finally ending with a full
    evaluation of the website, including changes I would've made in hindsight and what goals I didn't meet fully in the timeframe.
    <br><br>
    For pre-production/development, each page was designed using <a href="https://figma.com">Figma</a>, with architectural design
    being designed with <a href="https://diagrams.net">Diagrams.net</a>. Also, <a href="https://drawsql.app/">DrawSQL</a> was used
    to visualise the database beforehand. The database used <a href="https://www.postgresql.org/">PostgreSQL</a> with caching
    done through <a href="https://redis.io">Redis</a>. <a href="https://supabase.com">Supabase</a> was used for content delivery,
    for example with user's avatars.
</Project>