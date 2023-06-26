<template>
  <div>
    <h1>글 작성하기</h1>
    <div class="board-contents">
      제목 : <input type="text" v-model="title" placeholder="제목을 입력해주세요.">
    </div>
    <br>
      <div class="category">
          카테고리 : <select v-model="group">
            <option disabled value="">카테고리를 선택해주세요</option>
            <option value="free">자유게시판</option>
            <option value="notice">공지사항</option>
          </select>
      </div>
    <br>
    <div class="board-contents">
      <textarea id="" cols="30" rows="10" v-model="contents" placeholder="내용을 입력해주세요.">
      </textarea>
    </div>
    <br>
    <div class="common-buttons">
      <button type="button" @click="saveData">저장</button>&nbsp;
      <button type="button" @click="this.$router.push('/')">목록</button>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name:"BoardWrite",
  data() { 
      return {
          title: "",
          contents: "",
          group:"",
      }
  },
  methods:{
    saveData() {
      let form ={
          title: this.title,
          contents: this.contents,
          group: this.group,
      }
      if(!form.title){
        alert('제목을 입력해주세요')
      }else if(!form.group){
        alert('카테고리를 선택해주세요')
      }else if(!form.contents){
        alert('내용을 입력해주세요')
      }else{
        axios.post("http://localhost:8090/board/write",form)
          .then((res)=>{console.log(res.data);})
          .catch((err)=>{console.log(err);})
          this.$router.go(-1);
          this.$router.push("/");
      }
    },
}
}
</script>