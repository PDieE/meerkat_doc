# 竞品/产品 - Competitor
竞品/产品列表元素

## 使用示例
### 基本
```vue
<template>
  <competitor :info="data" />
</template>
<script lang="ts" setup>
import { CompetitorAndProduct } from '@/api/model/commonModel';
import Competitor from '@/components/list-item/Competitor.vue';

const data = ref<CompetitorAndProduct>();
</script>
```

## Props

### info
- 类型：`CompetitorAndProduct`  
数据

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示

### canCheck
- 类型：`boolean`
- 默认值：`false`  
是否可选，默认不可选

### checked
- 类型：`boolean`
- 默认值：`false`  
是否选中，默认未选中，`canCheck` 为 `true` 时有效
