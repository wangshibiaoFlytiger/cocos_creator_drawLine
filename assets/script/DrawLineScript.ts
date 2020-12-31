// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start () {
        let ctx = this.node.getComponent(cc.Graphics);
        // ctx.lineWidth = 3;

        // 画第1条线
        // 从(100,100)到(300,300)画一条宽为3像素的绿色直线
        ctx.strokeColor = cc.Color.YELLOW;
        ctx.moveTo(100, 100);
        ctx.lineTo(300, 300);
        ctx.stroke();  
        
        // 清除历史的线, 若执行clear方法，则第1条线会被清除
        // ctx.clear();

        // 画第2条线
        ctx.strokeColor = cc.Color.GREEN;
        ctx.moveTo(200, 200);
        ctx.lineTo(50, 400);
        ctx.stroke(); 
    }

    // update (dt) {}
}
