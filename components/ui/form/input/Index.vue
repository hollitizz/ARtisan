<template>
    <component
        :is="component"
        v-bind="{ ...$attrs }"
        :variant="variant"
        :modelValue="modelValue"
        :autocomplete="autocomplete"
        @update:modelValue="emits('update:modelValue', $event)"
        @change:modelValue="emits('change:modelValue', $event)"
    />
</template>

<script lang="ts" setup>
const props = defineProps({
    modelValue: {
        type: String as PropType<String | Number>,
        required: true
    },
    type: {
        type: String as PropType<Inputs>,
        default: 'text'
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

const component = computed(() => {
    switch (props.type) {
        case 'text':
            return resolveComponent('UiFormInputText');
        case 'email':
            return resolveComponent('UiFormInputEmail');
        case 'password':
            return resolveComponent('UiFormInputPassword');
        case 'number':
            return resolveComponent('UiFormInputNumber');
        // case "tel":
        //     return Tel;
        // case "url":
        //     return Url;
        // case "search":
        //     return Search;
        // case "date":
        //     return Date;
        // case "datetime-local":
        //     return DatetimeLocal;
        // case "month":
        //     return Month;
        // case "week":
        //     return Week;
        // case "time":
        //     return Time;
        // case "color":
        //     return Color;
        // case "file":
        //     return File;
        // case "hidden":
        //     return Hidden;
        // case "image":
        //     return Image;
        // case "range":
        //     return Range;
        // case "reset":
        //     return Reset;
        // case "submit":
        //     return Submit;
        // case "button":
        //     return Button;
        // case "checkbox":
        //     return Checkbox;
        // case "radio":
        //     return Radio;
        // case "select":
        //     return Select;
        // case "textarea":
        //     return Textarea;
        default:
            return resolveComponent('UiFormInputText');
    }
});

const emits = defineEmits<{
    (e: 'update:modelValue', value: string | number): void;
    (e: 'change:modelValue', value: string | number): void;
}>();
</script>
