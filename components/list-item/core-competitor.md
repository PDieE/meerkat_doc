# 核心竞品 - CoreCompetitor
核心竞品列表元素

## 使用示例
### 基本
```vue
<template>
  <core-competitor :info="data" />
</template>
<script lang="ts" setup>
import { CompetitorSKU } from '@/api/model/competitorModel';
import CoreCompetitor from '@/components/list-item/CoreCompetitor.vue';

const data = ref<CompetitorSKU>();
</script>
```

## Props

### info
- 类型：`CompetitorSKU`  
数据
