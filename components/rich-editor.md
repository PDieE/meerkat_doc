# 富文本编辑器 - RichEditor <Badge type="tip" text=">=0.1.0" />
基于 [wangEditor 5](https://www.wangeditor.com/) 二次封装的富文本编辑器组件

## 使用示例
### 基本
```vue
<template>
  <rich-editor v-model="value" />
</template>
<script lang="ts" setup>
import RichEditor from '@/components/rich-editor/index.vue';

const value = ref('');
</script>
```

## Api
### modelValue
- 类型：`string`  
`v-model` 绑定值，必传

### height
- 类型：`string | number`
- 默认值：`300`  
富文本编辑区域的高度，建议不低于300

### mode
- 类型：`'default' | 'simple'`
- 默认值：`default`  
富文本的类型，详见：[defaule模式](https://www.wangeditor.com/demo/index.html) / [simple模式](https://www.wangeditor.com/demo/simple-mode.html)

### toolbarConfig
- 类型：`Partial<IToolbarConfig>`
- 默认值：`{}`  
工具栏配置，详见：[工具栏配置](https://www.wangeditor.com/v5/toolbar-config.html)

### editorConfig
- 类型：`Partial<IEditorConfig>`
- 默认值：`{ placeholder: '请输入内容...', autoFocus: false }`  
编辑器配置，详见：[编辑器配置](https://www.wangeditor.com/v5/editor-config.html)
::: warning
如非确实有特殊需求，切勿覆盖本配置内的 `MENU_CONF.uploadImage` 和 `MENU_CONF.uploadVideo`
:::

### status
- 类型：`'default' | 'success' | 'warning' | 'error'`
- 默认值：`default`  
编辑器状态，用于控制编辑器的展示不同色彩的边框，具体表现形式与 Tdesgin 的表单组件基本一致
