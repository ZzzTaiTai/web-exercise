<template>
    <div class="NewsList">
        123
    </div>
</template>
<script>
export default {
    name:'NewsList',
    props:['NewsL'],
    data(){
        return{
            nList:[]
        }
    },
    watch:{
        NewsL(val){
            this.nList = val;
            console.log(val)
        }
    }
}
</script>

<style scoped>

</style>
