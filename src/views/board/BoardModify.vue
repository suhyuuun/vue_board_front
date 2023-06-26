<template>
    <div>
        <h1>글 수정하기</h1>
        <div>
            제목 : <input type="text" v-model="boardList.title">
        </div>
        <br>
        <div class="category">
            카테고리 : <select v-model="boardList.group">
            <option disabled value="">카테고리를 선택해주세요</option>
            <option value="free">자유게시판</option>
            <option value="notice">공지사항</option>
            </select>
        </div>
        <br>
        <div class="board-contents">
        <textarea id="" cols="30" rows="10" v-model="boardList.contents"></textarea>
        </div>
        <br>
        <div class="common-buttons">
        <button type="button" @click="modifyData">저장</button>&nbsp;
        <button type="button" @click="this.$router.push('/')">목록</button>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"BoardModify",
    data(){
        return{
            boardList:[],
        }
    },
    mounted(){
        this.getData();
    },
    methods:{
        getData(){
            axios.get('http://localhost:8090/board/view/'+this.$route.params.idx)
            .then((res)=>{
                this.boardList = res.data[0];
            })
            .catch((err)=>{console.log(err)})
        },
        modifyData(){
            let form = {
                title:this.boardList.title,
                contents: this.boardList.contents,
                idx: this.$route.params.idx,
            }
            if(!form.title){
                alert('제목을 입력해주세요')
            }else{
            axios.put('http://localhost:8090/board/update', form)
            .then((res)=>{console.log(res.data)})
            .catch((err)=>{console.log(err)})
            this.$router.push('/detail/'+this.$route.params.idx)
            }
        }
        },
    }
</script>
<style scoped>
    
</style>