<script>
    import Chevron from "./Chevron.svelte";
    import KnowledgeList from "./KnowledgeList.svelte";
</script>

<svelte:head>
    <title>Edward Smale</title>
</svelte:head>

<div class="w-full sm:hidden">
    <div class="min-h-screen w-full flex p-2">
        <div class="flex flex-col w-full justify-center items-center gap-16">
            <div class="flex flex-col items-center gap-2">
                <span class="font-bold text-5xl italic">Edward Smale</span>
                <ul>
                    <li class="text-2xl">Full-Stack Developer</li>
                    <li class="text-2xl opacity-80">Game Designer</li>
                </ul>
            </div>
            <div class="flex items-end">
                <Chevron/>
                <span>scroll</span>
                <Chevron/>                   
            </div>
        </div>
    </div>
    <div class="flex flex-col gap-32 mb-16">
        <div class="w-full flex flex-col p-2 gap-6 justify-around">
            <span class="text-2xl">7 Years Experience</span>
            <span class="text-2xl">Based in North-West England</span>
            <span class="text-2xl">Working on Edith @ <a href="https://midlight.studio">midlight.studio</a></span>
            <span class="text-2xl">Studying Maths and Philosophy at <a href="https://www.sheffield.ac.uk/">University of Sheffield</a></span>
        </div>
        <div class="p-2">
            <KnowledgeList/>
        </div>
    </div>
</div>
<div class="flex-1 hidden sm:flex items-center justify-center">
    <div class="flex flex-col justify-center items-center gap-16">
        <div class="flex flex-col">
            <span class="font-bold text-5xl sm:text-7xl italic">Edward Smale</span>
            <ul>
                <li class="text-2xl">Full-Stack Developer</li>
                <li class="text-2xl opacity-80">Game Designer</li>
            </ul>
        </div>
        <KnowledgeList/>
    </div>
</div>

<style>
    ul {
        list-style: none;
        margin-left: 0;
        padding-left: 0;
    }

    li {
        padding-left: 1em;
        text-indent: -2em;
    }

    li:before {
        content: "✿";
        padding-right: 5px;
    }
</style>