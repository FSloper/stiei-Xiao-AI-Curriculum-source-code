// var response = "";
// function scheduleHtmlProvider() {
//     let token = JSON.parse(localStorage.CAMPUS_WEB).token;
//     // console.log("html结果："+html);
//     let url = "http://4d-api.stiei.edu.cn/4d/campus-api/teaching/student/course_activities?per_page=500&page=1"
//     var xhr_ids = new XMLHttpRequest();
//     xhr_ids.open("GET", url);
//     xhr_ids.setRequestHeader("authorization", "Token " + token);
//     xhr_ids.setRequestHeader("Accept", "application/json");
//     xhr_ids.send()
//     xhr_ids.onreadystatechange = function () {
//         if (xhr_ids.readyState === 4) {
//             if (xhr_ids.status >= 200 && xhr_ids.status < 300) {
//                 // const response = xhr_ids.response
//                 // console.log(response);
//                 getRes(xhr_ids.response);
//                 // let course_list = eval('(' + xhr_ids.response + ')').course_activities;
//                 // result = parse(course_list);
//                 // console.log(result[0]);
//                 // console.log("length的长度："+ typeof JSON.stringify(xhr_ids.response));
//                 // return "fanhuigepi"
//                 // console.log("长度" + course_list.length);
//                 // console.log(typeof course_list[0]);
//             } else {
//                 return "do not continue";
//             }
//         }
//     }
//     console.log(response);
//     return response;
     
// }

// function getRes(txt){
//     response = JSON.stringify(txt);
// }
function scheduleHtmlProvider() {
    let token = JSON.parse(localStorage.CAMPUS_WEB).token;
    fetch('http://4d-api.stiei.edu.cn/4d/campus-api/teaching/student/course_activities?per_page=500&page=1', {
          method: "GET",
          headers:{
            "authorization": "Token " + token,
            "Accept": "application/json"
          }
      }).then(re=>{
          re = re.json();
          console.log(re)
      }).then(json=>{
          console.log(json)
          return JSON.stringify(json);
      })
      .catch((err)=>{
          console.error(err);
          return "do not continue"
      })
    // await loadTool('AIScheduleTools')
    // // 使用Fetch请求教务的接口
    // try {
    //   const res = await fetch('http://4d-api.stiei.edu.cn/4d/campus-api/teaching/student/course_activities?per_page=500&page=1', {
    //       method: "GET",
    //       headers:{
    //         "authorization": "Token " + token,
    //         "Accept": "application/json"
    //       }
    //   });
    //   // 假设这个res是个JSON
    //   console.log(res.then(resp=>{
    //       console.log(resp);
    //       return resp;
    //   }));
    // //   return res.json();
    // } catch (error) {
    //   console.error(error)
    //   await AIScheduleAlert(error.message)
    //   return 'do not continue'
    // }
  }