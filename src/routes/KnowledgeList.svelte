<script lang="ts">
    import CollectiveHover from "./CollectiveHover.svelte";
    import CollectiveHoverLink from "./CollectiveHoverLink.svelte";
</script>

<div class="flex flex-col gap-6">
    <div class="flex flex-col gap-1">
        <span>Tools</span>
        <div class="flex flex-wrap gap-4">
            <CollectiveHover>
                <CollectiveHoverLink href="/t/js">JavaScript</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/zig">Zig</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/cpp">C++</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/csharp">C#</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/svelte">Svelte</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/tauri">Tauri</CollectiveHoverLink>
                <CollectiveHoverLink href="/t/tailwind">Tailwind</CollectiveHoverLink>
            </CollectiveHover>
        </div>
    </div>
    <div class="flex flex-col gap-1">
        <span>Projects</span>
        <CollectiveHover>
            <CollectiveHoverLink href="/p/constellation">Constellation</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/edith">Edith</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/raincode">Raincode</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/chronicle">Chronicle</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/skeldjs">Skeld.JS</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/auproximity">AUProximity</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/pgg">Polus.GG</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/swagclan">SwagClan</CollectiveHoverLink>
            <CollectiveHoverLink href="/p/ryuujin">Ryuujin</CollectiveHoverLink>
        </CollectiveHover>
    </div>
    <div class="flex flex-col gap-1">
        <span>Contact</span>
        <CollectiveHover>
            <CollectiveHoverLink href="https://github.com/edqx">GitHub</CollectiveHoverLink>
            <CollectiveHoverLink href="mailto:self@esma.rocks">Email</CollectiveHoverLink>
            <CollectiveHoverLink href="/CV-Redacted.pdf">CV</CollectiveHoverLink>
        </CollectiveHover>
    </div>
</div>
