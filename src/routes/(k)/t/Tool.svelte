<script>
    import BackButton from "../../BackButton.svelte";
</script>

<div class="flex p-4 lg:p-0 flex-col lg:flex-row gap-8">
    <div class="flex flex-col items-start gap-2">
        <BackButton/>
        <div class="flex flex-col items-end gap-1">
            <span class="text-7xl"><slot name="name"/></span>
            <span><slot name="time"/></span>
        </div>
    </div>
    <p class="lg:w-160">
        <slot/>
    </p>
</div>