<template>
    <input
        ref="input"
        type="email"
        v-bind="{ ...$attrs, class: '', style: '', ...$props }"
        class="rounded-xl p-0.5 pl-2 text-xl"
        :class="{ [variant]: Boolean(variant) }"
        :modelValue="modelValue"
        :autocomplete="autocomplete"
        @input="manageInput"
        @change="manageChange"
        @keydown.esc.stop="input?.blur()"
    />
</template>

<script lang="ts" setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    },
    autocomplete: {
        type: String as PropType<AutoComplete>,
        default: 'off'
    },

    variant: {
        type: String as PropType<Variants>,
        default: null
    }
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: string): void;
    (e: 'change:modelValue', value: string): void;
}>();

const input = ref<HTMLInputElement>();

function manageInput(event: Event) {
    const target = event?.target as HTMLInputElement;
    emits('update:modelValue', target?.value);
}

function manageChange(event: Event) {
    const target = event?.target as HTMLInputElement;
    emits('change:modelValue', target?.value);
}
</script>

<style lang="scss" scoped>
input {
    &:focus {
        outline: 2px solid var(--focus);
    }

    outline: 2px solid var(--outline-color);
    outline-offset: -1px;
    background: var(--bg-color, white);
    color: var(--font-color, white);

    &::placeholder {
        color: var(--outline-color);
    }

    &:disabled {
        background-color: var(--disabled-bg-color, var(--outline-color));
        outline-color: var(--disabled-outline-color, var(--outline-color));
        color: var(--disabled-font-color, white);
    }
}
</style>
