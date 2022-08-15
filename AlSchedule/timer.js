/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
 async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    return {
        totalWeek: 28, // 总周数：[1, 30]之间的整数
        startSemester: '', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: true, // 是否显示周末
        forenoon: 4, // 上午课程节数：[1, 10]之间的整数
        afternoon: 4, // 下午课程节数：[0, 10]之间的整数
        night: 4, // 晚间课程节数：[0, 10]之间的整数
        sections: [
            { section: 1, startTime: "08:30", endTime: "09:10" },
            { section: 2, startTime: "09:10", endTime: "9:50" },
            { section: 3, startTime: "10:05", endTime: "10:40" },
            { section: 4, startTime: "10:45", endTime: "11:25" },
            { section: 5, startTime: "13:00", endTime: "13:40" },
            { section: 6, startTime: "13:40", endTime: "14:20" },
            { section: 7, startTime: "14:35", endTime: "15:15" },
            { section: 8, startTime: "15:15", endTime: "15:55" },
            { section: 9, startTime: "17:00", endTime: "17:40" },
            { section: 10, startTime: "17:40", endTime: "18:20" },
            { section: 11, startTime: "18:30", endTime: "19:10" },
            { section: 12, startTime: "19:10", endTime: "19:50" }
        ], // 课程时间表，注意：总长度要和上边配置的节数加和对齐
    }
}