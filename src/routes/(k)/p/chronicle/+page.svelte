<script lang="ts">
    import Gallery from "../../Gallery.svelte";
    import Project from "../Project.svelte";
</script>

<svelte:head>
    <title>Chronicle | Edward Smale</title>
</svelte:head>

<Project>
    <span slot="name">Chronicle</span>
    <span slot="time">2022-2023</span>
    <Gallery slot="images" name="Chronicle" imageSrcs={[ "/chronicle-1.png", "/chronicle-2.png", "/chronicle-3.png", "/chronicle-4.png", "/chronicle-5.png", "/chronicle-6.png" ]}/>

    Chronicle was created for my other project <a href="/p/edith">Edith</a> to allow both me and another person to
    write complex conversations between characters in-game easily, without touching code and without learning Unity.
    <br><br>
    The program is a full workspace for designing conversations for entire projects, and allows for branches according
    to certain conditions related to game save data and user input. In fact, the tool itself is used alongside the Unity
    game as it allows us to have a central hub for managing game characters, dialogues and save data keys. Chronicle's
    files can be imported into Unity using it's <a href="https://docs.unity3d.com/Manual/ScriptedImporters.html">scripted importer</a>
    feature.
    <br><br>
    It was a good exercise in making a user interface that was intuitive and easy to use for non-programmers, it was
    complimented on its ease of use and how quick it is to immediately get started writing dialogues with new or existing
    characters.
    <br><br>
    It uses <a href="https://tauri.app">Tauri</a> to render the HTML, JS and CSS as a desktop app, and <a href="https://supabase.com">Supabase</a>
    to allow users to publish dialogues either publicly or privately to selected users.
</Project>