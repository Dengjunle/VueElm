<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" @click.stop.prevent="decreaseCart" v-show="food.count>0">
        <span class="iconfont icon-jianhao inner"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add iconfont icon-jiahao" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  props: {
    food: {
      type: Object
    }
  },
  created() {
    // console.log(this.food);
  },
  methods: {
    addCart(event) {
      if (!event._constructed) {
        return;
      }
      if (!this.food.count) {
        Vue.set(this.food, "count", 1);
        this.food.count = 1;
      } else {
        this.food.count++;
      }
    //   this.$dispatch('cart.add',event.target); vue2.0已弃用
    this.$emit('cart-add',event.target);//vue2.0推荐实现监听 子组件向父组件传值
    },
    decreaseCart(event) {
      if (!event._constructed) {
        return;
      }
      if (this.food.count) {
        this.food.count--;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.cartcontrol {
  font-size: 0;
  .cart-decrease {
    display: inline-block;
    padding: 6px;

    .inner {
      display: inline-block;
      font-size: 24px;
      line-height: 24px;
      color: rgb(0, 160, 220);
    }
  }
  .move-enter-active,
  .move-leave-active {
    transition: all 0.4s linear;
  }
  .move-enter,
  .move-leave-to {
    opacity: 0;
    transform: translate3d(24px, 0, 0);
    // transform: rotate(180deg);
  }
  .move-enter-to,
  .move-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transform: rotate(180deg);
  }
  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }
  .cart-add {
    display: inline-block;
    padding: 6px;
    font-size: 24px;
    line-height: 24px;
    color: rgb(0, 160, 220);
  }
}
</style>