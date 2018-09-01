<template>
    <div class="numCtr">
        <span class="sub" :class="{disabled:myCount==min}" @click="sub">-</span>
        <input type="number" v-model="myCount">
        <span class="add" :class="{disabled:myCount==max}" @click="add">+</span>
    </div>
</template>
<script>
    export default{
        // 父传子，子组件接收。在父组件中，写的:count  :max :min
        props: ["count","max","min"],
        data: function(){
            return {
                myCount: 0
            }
        },
        created(){
            this.myCount = this.count;
        },
        methods: {
            sub(){
                if(this.myCount==this.min){
                    return;
                }
                this.myCount--;
                this.$emit('change',this.myCount);
            },
            add(){
                if(this.myCount == this.max){
                    return;
                }
                this.myCOunt++;
                this.$emit("change",this.myCount);
            }
        }

    }
</script>
<style lang="scss" scoped>

</style>
