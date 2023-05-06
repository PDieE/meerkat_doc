# 行业发展史 - IndustryHistoryItem
行业发展史列表元素

## 使用示例
### 基本
```vue
<template>
  <industry-history-item :info="data" />
</template>
<script lang="ts" setup>
import { IndustryHistory } from '@/api/model/marketModel';
import IndustryHistoryItem from '@/components/list-item/IndustryHistoryItem.vue';

const data = ref<IndustryHistory>();
</script>
```

## Props

### info
- 类型：`IndustryHistory`  
数据

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示
