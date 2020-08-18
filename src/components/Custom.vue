<template>
  <div>
    <p>{{message}}</p>
    <p>{{dataMsg}}</p>
    <button @click="handleClick">点击我</button>
    <br/>
    <input type="text" v-model="firstname">
    <input type="text" v-model="lastname">
    您的姓名: <span>{{fullname}}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
/**
 * Custom
 * 装饰器修饰类
 */
@Component
export default class Custom  extends Vue{
  // 定义 data
  message:string = "custom message data";
  firstname:string = "";
  lastname:string = "";
  // 或者
  data() {
    return {
      dataMsg: "data message"
    }
  }
  // 计算属性
  get fullname() {
    return `${this.firstname} ${this.lastname}`
  }
  // 定义事件
  handleClick() {
    alert("点击事件执行!")
  }

}
</script>