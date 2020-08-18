import Vue from "vue"
import Component from "vue-class-component"
/**
 * Custom
 * 装饰器修饰类
 */
@Component
export default class Custom  extends Vue{
  // 定义 data
  message:string = "custom message data";
  firstname:string = "tom";
  lastname:string = "tube";
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
  // render template
  render() {
    return (<div>
      <div>{this.fullname}</div>
    </div>
    )
  }
}