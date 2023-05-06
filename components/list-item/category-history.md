# 品类发展史 - CategoryHistory
数据分析的列表项

## 使用示例
### 基本
```vue
<template>
  <category-history :info="data" />
</template>
<script lang="ts" setup>
import { CatetoryHistory } from '@/api/model/marketModel';
import CategoryHistory from '@/components/list-item/CategoryHistory.vue';

const data = ref<CompetitorAndProductAnalysis | MarketDataAnalysis[]>([]);
</script>
```

## Props

### info
- 类型：`CatetoryHistory`  
数据分析的数据

### border
- 类型：`boolean`
- 默认值：`false`  
是否显示边框，默认不显示
