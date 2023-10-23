<script lang="ts">
    import GalleryImage from "./GalleryImage.svelte";

    export let name: string;
    export let imageSrcs: string[];
    
    let innerWidth = 0;
    let innerHeight = 0;
    let areAllLoaded = false;
    let loadedImages: boolean[] = [];

    function onImageLoaded(idx: number) {
        loadedImages[idx] = true;
        if (loadedImages.length === imageSrcs.length && loadedImages.every(x => x)) {
            areAllLoaded = true;
        }
        loadedImages = loadedImages;
    }
</script>

<svelte:window bind:innerWidth bind:innerHeight></svelte:window>

<div class="grid grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-1">
    {#each imageSrcs as imageSrc, imageIdx}
        <GalleryImage {name} {imageSrc} {imageIdx} totalCols={innerWidth >= 1024 ? 3 : 2} {areAllLoaded} on:loaded={() => onImageLoaded(imageIdx)}/>
    {/each}
</div>