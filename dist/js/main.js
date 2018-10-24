var todoService = (function () { //즉시실행함수

  //서버에 제이슨으로 보낼 것.

  var path="http://localhost:8080/todo/";

  // 등록
  function create(obj,callback) {

    console.log(obj);
    $.ajax({
      type:"post",
      data:JSON.stringify(obj), //제이슨문자열로 만드는 것
      contentType: "application/json; charset=utf-8",
      success: function (result, status, xhr) {
        callback(result); //결과 넣어서 콜백 실행
      }
    });

  }

   return {create:create}

})();
