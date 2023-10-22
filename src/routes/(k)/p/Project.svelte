<script>
    import BackButton from "../../BackButton.svelte";
</script>

<div class="flex flex-col items-center gap-4 my-32">
    <div class="flex flex-col items-start gap-2">
        <BackButton/>
        <div class="flex flex-col items-end gap-1">
            <span class="text-7xl"><slot name="name"/></span>
            <span><slot name="time"/></span>
        </div>
    </div>
    <div class="flex flex-col items-center gap-8">
        <slot name="images"/>
        <p class="lg:w-160">
            <slot/>
        </p>
    </div>
</div>