cc.Class({
    extends: cc.Component,

    properties: {
        startLabel:{
            default: null,
            type:cc.Label
        },
        cheese:{
            default: null,
            type: cc.Node
        },
        // 当前绳子长度
        lineLength: 100,
        // 当前可捕获仓鼠数量
        canCatchNum: 3,
        gameState: 0 // 0表示奶酪未抛出，1表示奶酪抛出中 2表示奶酪子拉回状态 3表示奶酪拉回结算状态
    },

    // use this for initialization
    onLoad: function () {
        // console.log(this.startLabel.string)
        this.touchStart();
    },

    // '开始游戏'文字自动闪烁
    shningText: function(){

    },

    // 点击屏幕开始游戏（此时执行绳子扔出函数将奶酪直接扔出至最远处，然后执行拉回绳子函数）
    touchStart: function(){
        this.node.once('touchstart',function(event){
            this.startLabel.destroy();
            this.gameState = 1;
        },this)
    },

    // 奶酪抛出动作

    // 奶酪扔出（3秒到达最远距离的80%，然后1s匀减速至最远处）
    cheeseGo: function () {
        // 先做匀加速至最远距离
        
    },

    // 奶酪拉回（拉回过程中包含判断，是否已达到最大捕获数量，是的话直接拉回）
    cheeseBack: function () {

    },
    // 奶酪可跟随touch手指横向移动(两侧可以加wall进行碰撞检测)
    cheeseMove: function(){
        this.node.on('touchmove',function(event){
            if(this.cheese.x < -480){
                this.cheese.x = -480
                return
            }else if(event.getLocationX() > 860 ){
                return
            }else{
                this.cheese.x = event.getLocationX()-480;
            }
        },this)
    },

    // 根据概率在不同距离生成仓鼠，当点击开始游戏时，即已在背景不同深度处生成仓鼠
    createHamster: function () {

    },
    // 开启碰撞检测
    onEnable: function (){
        cc.director.getCollisionManager.onEnable = true;
    },

    // called every frame
    update: function (dt) {
        if(this.gameState === 1){
            this.cheeseMove();
        }
    },
});
