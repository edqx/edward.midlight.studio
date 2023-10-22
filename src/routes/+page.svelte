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
            <div class="flex flex-col">
                <span class="font-bold text-5xl italic">Edward Smale</span>
                <span class="text-2xl">Full-Stack Developer</span>
                <span class="text-2xl opacity-85">Game Designer</span>
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
            <span class="text-2xl text-right">Studying Maths and Philosophy at<br>University of Sheffield</span>
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
            <span class="text-3xl">Full-Stack Developer</span>
            <span class="text-3xl opacity-85">Game Designer</span>
        </div>
        <KnowledgeList/>
    </div>
</div>