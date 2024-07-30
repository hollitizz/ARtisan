<template>
    <header></header>
    <main class="flex-1 flex">
        <h2 class="h-8">a default layout</h2>
        <div class="flex-1 h-[calc(100vh-2rem)]">
            <slot />
        </div>
    </main>
    <footer></footer>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
