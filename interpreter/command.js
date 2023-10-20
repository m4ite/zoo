export default commands = {
    1 : function createVar(){
        fileAdd("var ")
        return 0
    },
    2 : function identifyVar(){
        fileAdd(`nome${seqDados.length} =`)
        return 1
    },
}