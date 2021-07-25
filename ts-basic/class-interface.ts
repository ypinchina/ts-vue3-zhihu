class Car implements Radio {
  radioSwitch(switchStatus: boolean) {}
}
class Cellphone implements RadiowithSwitch {
  battery():void {}
  radioSwitch(switchStatus: boolean) {}
}
interface Battery {
  battery():void
}
interface Radio {
  radioSwitch(switchStatus: boolean):void
}
interface RadiowithSwitch extends Battery {
  battery():void
}