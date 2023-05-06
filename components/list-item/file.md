# 市场文件 - File
市场文件列表元素

## 使用示例
### 基本
```vue
<template>
  <file :info="data" />
</template>
<script lang="ts" setup>
import { CompetitorAndProduct } from '@/api/model/commonModel';
import File from '@/components/list-item/File.vue';

const data = ref<CompetitorAndProduct>();
</script>
```

## Props

### info
- 类型：`CompetitorAndProduct`  
数据

### isDir
- 类型：`boolean`
- 默认值：`false`  
是否为目录，默认不是

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示
