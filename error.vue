<template>
    <div
        :id="`error-page-${error?.statusCode}`"
        class="flex h-full w-full flex-col items-center justify-evenly gap-5 text-center"
    >
        <div class="text-white">
            <h2 class="text-9xl text-accent">{{ error?.statusCode }}</h2>
            <span class="text-5xl">{{ error?.message }}</span>
        </div>

        <NuxtLink aria-label="homepage" to="/">
            <UiFormButton aria-label="Retourner à la page d'accueil">
                Back to Home
            </UiFormButton>
        </NuxtLink>
    </div>
</template>

<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app';

defineProps({
    error: {
        type: Object as PropType<NuxtError>
    }
});
</script>

<style lang="scss" scoped></style>
