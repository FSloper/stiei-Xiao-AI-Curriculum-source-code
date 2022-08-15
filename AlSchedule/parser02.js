function scheduleHtmlParser(html) {
    console.log("html内容为："+html);
    // console.log("外面："+ course_list);

}

function parse(course_list) {
    var result = new Array();
    for (var i = 0; i < course_list.length; i++) {
        let course = {};
        var unit = [];
        course.name = course_list[i].course_set_name;
        course.position = course_list[i].classroom_name;
        course.teacher = course_list[i].teacher_name;
        course.weeks = course_list[i].week_arr;
        course.day = course_list[i].weekday;
        start_unit = course_list[i].start_unit;
        end_unit = course_list[i].end_unit;
        unit = getUnit(start_unit, end_unit);
        course.sections = unit;
        result.push(course);
        // console.log(i);
    }
    console.log(result);
    console.log(typeof result);
    return result;
}

function getUnit(su, eu) {
    let unit = new Array();
    for (let t = su; t <= eu; t++) {
        unit.push(t);
    }
    return unit;
}