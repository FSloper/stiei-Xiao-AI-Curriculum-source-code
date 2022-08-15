var jsonArray = [];
var week = '';
var secs = '';

function scheduleHtmlParser(html) {
    var $ = cheerio.load(html, { decodeEntities: false });
    $(".gridtable").children("tbody").children("tr").each(
        function (i) {
            var tid = [];
            var tit = [];
            $(this).children("td").each(function (j) {
                // console.log(i);
                if (j === 0){
                    week = $(this).text();
                }
                if (j > 0){
                    // let title = $(this).attr("title");
                    tit.push($(this).attr("title"));
                    let id = parseInt($(this).attr("id").replace(/^[A-Za-z]+|_0/g, ""));
                    tid.push(id); 
                }
            })
            for (let i = 0; i<tit.length;i++){
                if(tit[i]!=undefined){
                    let num = tid[i+1] - tid[i];
                    console.log(week + "的课为："+ tit[i] +"在"+ (tid[i]%12+1)+"-"+(tid[i]%12+num)+"节上课");
                }
            }
        }
    )
    return jsonArray;
}