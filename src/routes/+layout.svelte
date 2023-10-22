<script lang="ts">
    import { fly } from "svelte/transition";
    import "virtual:windi.css";

    export let data;

    let singleColor = data.bgColor;
</script>

<div class="app" style="background-color: {singleColor}">
    {#key data.url}
        <div class="sm:hidden">
            <div class="w-full min-h-screen flex flex-col gap-8 items-center text-[#1c1c1c]">
                <div
                    class="app"
                        in:fly={{ y: -200, duration: 300, delay: 300 }}
                        out:fly={{ y: 200, duration: 300 }}
                >
                    <slot/>
                </div>
            </div>
        </div>
        <div class="hidden sm:block">
            <div class="w-full min-h-screen flex flex-col items-center text-[#1c1c1c]">
                <div class="w-full flex flex-wrap justify-around">
                    <span class="text-2xl p-2">9 Years Experience</span>
                    <span class="text-2xl p-2">Based in North-West England</span>
                    <span class="text-2xl p-2">Working on Edith @ <a href="https://midlight.studio">midlight.studio</a></span>
                    <span class="text-2xl p-2">Studying Maths and Philosophy at<br>University of Sheffield</span>
                </div>
                <div
                    class="flex flex-1"
                    in:fly={{ y: -200, duration: 300, delay: 300 }}
                    out:fly={{ y: 200, duration: 300 }}
                >
                    <slot/>
                </div>
            </div>
        </div>
    {/key}
</div>

<style>
    :global(html, body, .app) {
        margin: 0;
        padding: 0;
        min-width: 100vw;
        min-height: 100vh;
        overflow-x: hidden;
        font-family: "Playfair Display", serif;
    }

    :global(a) {
        color: #4287f5;
        font-weight: 800;
    }

    :global(a:hover) {
        text-decoration: underline;
    }
</style>

