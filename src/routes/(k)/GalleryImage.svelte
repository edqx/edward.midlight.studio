<script lang="ts">
    import { createEventDispatcher } from "svelte";
    const dispatchEvent = createEventDispatcher();

    export let name: string;
    export let imageSrc: string;
    export let imageIdx: number;
    export let totalCols: number;
    export let areAllLoaded: boolean;

    let selectedImage = "";

    let innerWidth = 0;
    let innerHeight = 0;

    let imageWidth = 0;
    let imageHeight = 0;

    let imageOpacity = 0;

    $: imageRow = Math.floor(imageIdx / totalCols);
    $: imageCol = imageIdx % totalCols;

    let thumbImageElement: HTMLImageElement|undefined = undefined;
    let popupImageElement: HTMLImageElement|undefined = undefined;

    $: if (areAllLoaded) {
        setTimeout(() => {
            function nextFrame() {
                imageOpacity += (1 - imageOpacity) / 20;
                if (imageOpacity >= 0.95) {
                    imageOpacity = 1;
                    return;
                }
                requestAnimationFrame(nextFrame);
            }
            requestAnimationFrame(nextFrame);
        }, 100 + imageRow * 50 + imageCol * 50);
    }

    function onThumbImageLoaded() {
        if (thumbImageElement === undefined)
            return;
    
        dispatchEvent("loaded");
    }

    function onImageLoaded() {
        if (popupImageElement === undefined || innerWidth === 0 || innerHeight === 0)
            return;

        const viewAspectRatio = innerWidth / innerHeight;
        const imageAspectRatio = popupImageElement.naturalWidth / popupImageElement.naturalHeight;

        if (innerWidth > innerHeight) {
            if (popupImageElement.naturalHeight > popupImageElement.naturalWidth) {
                imageHeight = innerHeight * 0.9;
                imageWidth = imageHeight * imageAspectRatio;
            } else {
                imageWidth = innerWidth * 0.9;
                imageHeight = imageWidth / imageAspectRatio;
            }
        } else {
            if (popupImageElement.naturalHeight > popupImageElement.naturalWidth) {
                imageHeight = innerHeight * 0.9;
                imageWidth = imageHeight * imageAspectRatio;
            } else {
                imageWidth = innerWidth * 0.9;
                imageHeight = imageWidth / imageAspectRatio;
            }
        }

        if (Math.abs((viewAspectRatio / imageAspectRatio) - 1) < 0.2) {
            imageWidth = imageWidth * 0.9;
            imageHeight = imageWidth / imageAspectRatio;
        }
    }

    function recalculateImageSize() {
        if (popupImageElement === undefined || innerWidth === 0 || innerHeight === 0)
            return;

        if (popupImageElement.complete && popupImageElement.naturalWidth > 0) {
            onImageLoaded();
        } else {
            popupImageElement.onload = onImageLoaded;
        }
    }

    function prepareIntroAnimation() {
        if (thumbImageElement === undefined)
            return;

        if (thumbImageElement.complete && thumbImageElement.naturalWidth > 0) {
            onThumbImageLoaded();
        } else {
            thumbImageElement.onload = onThumbImageLoaded;
        }
    }

    $: popupImageElement, innerWidth, innerHeight, recalculateImageSize();
    $: thumbImageElement, prepareIntroAnimation();
</script>

<svelte:window bind:innerWidth bind:innerHeight></svelte:window>

<button class="w-40 sm:w-80 h-20 sm:h-40 filter transition duration-500" on:click={() => selectedImage = imageSrc}>
    <div class="w-full h-full overflow-hidden">
        <img class="object-none transition duration-500 transform hover:scale-115" style="opacity: {imageOpacity};" alt={name + " preview"} src={imageSrc} bind:this={thumbImageElement}/>
    </div>
</button>
<button
    class="fixed left-0 top-0 w-screen h-screen flex flex-col gap-2 items-center justify-center bg-black/85 z-10"
    class:hidden={selectedImage !== imageSrc}
    on:click={() => selectedImage = ""}>
    <img style="width: {imageWidth}px; height: {imageHeight}px;"
        alt={name + " preview"}
        src={selectedImage}
        bind:this={popupImageElement}/>
    <div class="text-light-900 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" />
        </svg>
        <span>Click anywhere to close</span>
    </div>
</button>