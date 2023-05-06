# 品类发展史 - CategoryHistoryItem
品类发展史列表元素

## 使用示例
### 基本
```vue
<template>
  <category-history-item :info="data" />
</template>
<script lang="ts" setup>
import { CatetoryHistory } from '@/api/model/marketModel';
import CategoryHistoryItem from '@/components/list-item/CategoryHistoryItem.vue';

const data = ref<CatetoryHistory>();
</script>
```

## Props

### info
- 类型：`CatetoryHistory`  
数据

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示
