<template>
    <div>
        <h1>게시판 글 전체보기</h1>
        <p>
          <button @click="this.$router.push('/')">글 전체보기</button>&nbsp;
          <button @click="this.$router.push('/category/free')">자유게시판</button>&nbsp;
          <button @click="this.$router.push('/category/notice')">공지사항</button>&nbsp;
          <button @click="this.$router.push('/write')">글쓰기</button>&nbsp;
        </p>
        <table>
            <thead>
                <tr>
                    <th width="15%">글번호</th>
                    <th width="50%">제목</th>
                    <th width="20%">생성일자</th>
                </tr>
            </thead>
            <tbody>
              <tr :key="i" v-for="(board, i) in boardList">
                    <td>{{ board.idx }}</td>
                    <td><a class="title" v-on:click="this.$router.push('/detail/'+board.idx)">{{board.title}}</a></td>
                    <td>{{board.create_date}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default{
  name:'BoardList',
  data(){
    return{
      boardList: [],
    };
  },
  mounted(){
    this.getBoardList();
  },
  methods:{
    getBoardList(){
      axios.get('http://localhost:8090/board/list')
              .then((res) => {this.boardList = res.data;})
              .catch(err => console.log(err))
    },
  },
}
</script>

<style scoped>
table{
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
td, th{
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}
</style>
