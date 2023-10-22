<script lang="ts">
    import GalleryImage from "./GalleryImage.svelte";

    export let name: string;
    export let imageSrcs: string[];

    let selectedImage = "";

    let innerWidth = 0;
    let innerHeight = 0;
</script>

<svelte:window bind:innerWidth bind:innerHeight></svelte:window>

<div class="grid grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-1">
    {#each imageSrcs as imageSrc}
        <GalleryImage {name} {imageSrc}/>
    {/each}
</div>