<template>
    <label
        :for="id"
        :class="{ focus: isFocus, [variant]: Boolean(variant) }"
        class="rounded-xl flex h-min"
    >
        <input
            ref="input"
            :type="isHide ? 'password' : 'text'"
            v-bind="{
                ...$attrs,
                class: 'rounded-xl p-1.5 pl-2 font-h4 flex-1',
                style: '',
                ...$props
            }"
            :id="id"
            :autocomplete="autocomplete"
            :size="size - 4"
            @input="manageInput"
            @change="manageChange"
            @focus="isFocus = true"
            @blur="isFocus = false"
            @keydown.esc.stop="input?.blur()"
        />
        <div
            @click="isHide = !isHide"
            class="p-1 mr-0.5 ml-auto"
            :style="{ height: svgHeight + 'px', width: svgHeight + 'px' }"
            ref="svg"
        >
            <SvgEye v-if="!isHide" class="h-full w-full" />
            <SvgEyeSlash v-else class="h-full w-full" />
        </div>
    </label>
</template>

<script lang="ts" setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: Math.random().toString(36).substring(2, 12)
    },

    autocomplete: {
        type: String as PropType<AutoComplete>,
        default: 'off'
    },
    size: {
        type: Number,
        default: 20
    },

    variant: {
        type: String as PropType<Variants>,
        default: null
    }
});

const isHide = ref(true);
const isFocus = ref(false);
const input = ref();
const svgHeight = ref(0);

watch(
    () => input.value,
    () => {
        if (!input.value) return;
        svgHeight.value = input.value.getBoundingClientRect().height;
    },
    { deep: true, immediate: true }
);

const emits = defineEmits<{
    (event: 'update:modelValue', value: string): void;
    (event: 'change:modelValue', value: string): void;
}>();

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
label {
    input {
        background: var(--bg-color, white);
        &::placeholder {
            color: var(--outline-color);
        }
        outline: none;
    }

    &.focus {
        outline: 2px solid var(--focus);
    }

    outline: 2px solid var(--outline-color);
    outline-offset: -1px;
    background: var(--bg-color, white);
    color: var(--font-color);

    &:disabled {
        background-color: var(--disabled-bg-color, var(--outline-color));
        outline-color: var(--disabled-outline-color, var(--outline-color));
        color: var(--disabled-font-color, white);
    }
}
</style>
