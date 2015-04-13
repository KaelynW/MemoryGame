gdjs.GameCode = {};
gdjs.GameCode.repeatCount3 = 0;

gdjs.GameCode.repeatIndex3 = 0;



gdjs.GameCode.GDcardObjects1= [];
gdjs.GameCode.GDcardObjects2= [];
gdjs.GameCode.GDcardObjects3= [];
gdjs.GameCode.GDcardObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};

gdjs.GameCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.GameCode.GDcardObjects1.length = 0;
gdjs.GameCode.GDcardObjects2.length = 0;
gdjs.GameCode.GDcardObjects3.length = 0;
gdjs.GameCode.GDcardObjects4.length = 0;


{

gdjs.GameCode.GDcardObjects1.createFrom(runtimeScene.getObjects("card"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(Math.round((gdjs.evtTools.window.getCanvasHeight(runtimeScene)-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))+1)*gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))/gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1))));
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(Math.round(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))*(( gdjs.GameCode.GDcardObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDcardObjects1[0].getWidth())/(( gdjs.GameCode.GDcardObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDcardObjects1[0].getHeight())));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(Math.round((gdjs.evtTools.window.getCanvasWidth(runtimeScene)-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))+gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))*gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)))/2));
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(Math.round((gdjs.evtTools.window.getCanvasHeight(runtimeScene)-(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))+gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))*gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))/2));
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents

{


gdjs.GameCode.repeatCount3 = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
for(gdjs.GameCode.repeatIndex3 = 0;gdjs.GameCode.repeatIndex3 < gdjs.GameCode.repeatCount3;++gdjs.GameCode.repeatIndex3) {

if (true)
{
{runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("CurrentDeckCard"))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("CurrentDeckCard")));
}{runtimeScene.getVariables().get("CurrentDeckCard").add(1);
}}
}

}


{


gdjs.GameCode.repeatCount3 = 50;
for(gdjs.GameCode.repeatIndex3 = 0;gdjs.GameCode.repeatIndex3 < gdjs.GameCode.repeatCount3;++gdjs.GameCode.repeatIndex3) {

if (true)
{
{runtimeScene.getVariables().getFromIndex(3).setNumber(gdjs.random(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))-1));
}{runtimeScene.getVariables().getFromIndex(4).setNumber(gdjs.random(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0))-1));
}{runtimeScene.getVariables().getFromIndex(5).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3)))));
}{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4)))));
}{runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(4))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)));
}{runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(3))).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)));
}}
}

}


{


gdjs.GameCode.repeatCount3 = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0));
for(gdjs.GameCode.repeatIndex3 = 0;gdjs.GameCode.repeatIndex3 < gdjs.GameCode.repeatCount3;++gdjs.GameCode.repeatIndex3) {

if (true)
{
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.mod(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
{ //Subevents: 

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.GameCode.GDcardObjects4.createFrom(gdjs.GameCode.GDcardObjects1);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, context.clearEventsObjectsMap().addObjectsToEventsMap("card", gdjs.GameCode.GDcardObjects4).getEventsObjectsMap(), 0, 0, "");
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects4[i].setScaleX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))/(gdjs.GameCode.GDcardObjects4[i].getWidth()));
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects4[i].setScaleY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))/(gdjs.GameCode.GDcardObjects4[i].getHeight()));
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects4[i].setX(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7))+(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))*(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4))+gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))));
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects4[i].setY(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6))+(gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))*(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3))+gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)))));
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects4[i].setVariableNumber(gdjs.GameCode.GDcardObjects4[i].getVariables().get("CardFrame"), gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("Deck").getChild(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(0)))));
}
}
}

} //Subevents end.
}
}

}

} //End of subevents
}

}


{

gdjs.GameCode.GDcardObjects1.createFrom(runtimeScene.getObjects("card"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDcardObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDcardObjects1[i].cursorOnObject(runtimeScene, true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDcardObjects1[k] = gdjs.GameCode.GDcardObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDcardObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents

{

gdjs.GameCode.GDcardObjects2.createFrom(gdjs.GameCode.GDcardObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = context.triggerOnce(81046600);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects2[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.GameCode.GDcardObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDcardObjects2[i].setAnimationFrame((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDcardObjects2[i].getVariables().get("CardFrame"))));
}
}}

}

} //End of subevents
}

}

return;
}
gdjs['GameCode']= gdjs.GameCode;
