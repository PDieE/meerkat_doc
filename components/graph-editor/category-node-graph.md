# 品类发展史 - CategoryNodeGraph
`需要重写！！！！`

## 使用示例
### 基本
```vue
<template>
  <category-node-graph v-model="data" />
</template>
<script lang="ts" setup>
import { CategoryHistoryNodeData } from '@/components/graph-editor/category-node-graph/types';
import CategoryNodeGraph from '@/components/graph-editor/category-node-graph/index.vue';

const data = ref<CategoryHistoryNodeData[]>([]);
</script>
```

## Props

### modelValue
- 类型：`CategoryHistoryNodeData[]`  
`v-model` 绑定值，必传

### readonly
- 类型：`boolean`
- 默认值：`false`  
是否只读，设为 `true` 后所有的数据编辑相关操作将被禁用

## Interface
### CategoryHistoryNodeData
详见 `@/components/graph-editor/category-node-graph/types` 文件
``` ts
export interface CategoryHistoryNodeData {
  id: number;
  parentIds: number[];
  parentIdPaths: string[];
  pos: number[];
  level: number;
  data: NodeForm;
}
```
