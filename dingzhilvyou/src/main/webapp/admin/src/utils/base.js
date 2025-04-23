const base = {
    get() {
        return {
            url : "http://localhost:8080/dingzhilvyou/",
            name: "dingzhilvyou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/dingzhilvyou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "私人定制旅游系统"
        } 
    }
}
export default base
