<script lang="ts">
    export let name: string;
    export let imageSrcs: string[];

    let selectedImage = "";

    let innerWidth = 0;
    let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight></svelte:window>

<div class="grid grid-cols-3 grid-rows-auto gap-1">
    {#each imageSrcs as imageSrc}
        <button class="w-80 h-40 filter transition duration-500" on:click={() => selectedImage = imageSrc}>
            <div class="w-full h-full overflow-hidden">
                <img class="object-none transition duration-500 transform hover:scale-115" alt={name + " preview"} src={imageSrc}/>
            </div>
        </button>
    {/each}
</div>
{#if selectedImage !== ""}
    <button class="fixed left-0 top-0 w-screen h-screen flex flex-col gap-2 items-center justify-center bg-black/85" on:click={() => selectedImage = ""}>
        <img style="{innerWidth > innerHeight ? "width: 80%;" : ""} {innerHeight > innerWidth ? "height: 80%;" : ""}"
            alt={name + " preview"} src={selectedImage}/>
        <div class="text-light-900 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" />
            </svg>
            <span>Click anywhere to close</span>
        </div>
    </button>
{/if}