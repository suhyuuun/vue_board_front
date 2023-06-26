<template>
    <div>
        <h1>게시판 상세보기</h1>
        <table class="tbAdd">
					<tr>
						<th  width="15%">제목</th>
						<td>{{boardList.title}}</td>
					</tr>
                    <tr>
						<th  width="15%">작성일</th>
						<td>{{boardList.create_date}}</td>
					</tr>
                    <tr>
						<th  width="15%">수정일</th>
						<td>{{boardList.update_date}}</td>
					</tr>
					<tr>
						<th>내용</th>
						<td class="txt_cont" width="50%">{{boardList.contents}}</td>
					</tr>
				</table>
    <p>
      <button type="button" @click="modifyButton">수정</button>&nbsp;
      <button type="button" @click="this.$router.push('/')">목록</button>&nbsp;
      <button type="button" @click="deleteData">삭제</button>&nbsp;
    </p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:"BoardDetail",
    data(){
        return{
            boardList:[],
        };
    },
    mounted(){
        this.getDetailData();
    },
    methods:{
        getDetailData() {
            axios.get('http://localhost:8090/board/view/'+this.$route.params.idx)
            .then((res) => {
                this.boardList = res.data[0];
            })
            .catch((err) => {console.log(err)})
        },
        deleteData(){
            alert("삭제하시겠습니까?");
            axios.delete('http://localhost:8090/board/delete/'+this.$route.params.idx)
            .then((res)=>{
                console.log(res)
                this.$router.push('/')
                })
            .catch((err)=>{console.log(err)})

        },
        modifyButton(){
            this.$router.push({
                path:`/modify/${this.$route.params.idx}`
            })
        }
    }
}
</script>

<style scoped>
table {
    margin:auto; 
}
	.tbAdd{border-top:1px solid #888;}
	.tbAdd th, .tbAdd td{border-bottom:1px solid #eee; padding:5px 0; }
	dd td{padding:10px 10px; box-sizing:border-box; text-align:left;}
	.tbAdd td.txt_cont{height:300px; vertical-align:top;}
</style>