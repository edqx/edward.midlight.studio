<script lang="ts">
    export let href: string;
</script>

<a {href} class="text-2xl group-hover:opacity-40 !hover:opacity-100 transition-opacity"><slot/></a>

<style>
    a {
        color: inherit;
        font-weight: 400;
    }
</style>