# 文件上传 - Uploader
基于 `Tdesgin` [Upload](https://tdesign.tencent.com/vue-next/components/upload) 二次封装的上传组件，除下述 `Props` 以外原组件的 `Props` 均支持透传

## 使用示例
### 基本
```vue
<template>
  <uploader v-model="fileList" />
</template>
<script lang="ts" setup>
import { UploadFile } from 'tdesign-vue-next';
import Uploader from '@/components/uploader/index.vue';

const fileList = ref<UploadFile[]>([]);
</script>
```

## Props
### modelValue
- 类型：`UploadFile[]`  
`v-model` 绑定值，必传

### accept
- 类型：`string`  
接受上传的文件类型，[W3C示例](https://www.w3schools.com/tags/att_input_accept.asp)，[MDN示例](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file)  
另外除了标准所定义的类型还存在 `supported-picture` 特殊类型其代表了 `['.gif', '.png', '.jpeg', '.jpg']` 一组目前系统内广泛支持的图片类型。

### beforeUpload
- 类型：`(file: UploadFile) => boolean | Promise<boolean>`  
文件上传前回调钩子

### format
- 类型：`(file: UploaderFile) => UploadFile`
- 默认值：`{}`  
转换文件 `UploadFile` 的数据结构
::: tip
可新增或修改 `UploadFile` 的属性，注意不能删除 `UploadFile` 属性，不可修改 `id` 字段
:::

## Events
### change
- 参数：`(value: UploadFile[])`
已上传文件列表发生变化时触发

## Interface
### UploadFile
``` ts
interface UploadFile {
  lastModified?: number;
  name?: string;
  percent?: number;
  raw?: File;
  response?: {
      [key: string]: any;
  };
  size?: number;
  status?: 'success' | 'fail' | 'progress' | 'waiting';
  type?: string;
  uploadTime?: string;
  url?: string;
  [key: string]: any;
}
```
### UploaderFile
``` ts
interface UploaderFile extends File {
  id: string;
}
```