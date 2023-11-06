### 命令模式

```
将“请求”封装成对象，以便使用不同的请求、队列或者日志来参数化其他对象。命令模式也支持可撤销的操作。
```

定义命令接口

```java
public interface Command {
   public void execute();
}
```

定义灯光对象，定义开关方法

```java
public class Light {
   public String name;
   public Light(String name) {
      this.name = name;
   }
   
   public void off() {
      System.out.println(this.name + " off");
   }
   
   public void on() {
      System.out.println(this.name + " on");
   }
}
```

定义灯光开和关命令类实现命令接口。并且将灯光对象作为灯光命令的属性，并在构造方法中初始化。

```java
public class LightOnCommand implements Command {
   Light light;
   
   public LightOnCommand(Light light){
      this.light = light;
   }
   @Override
   public void execute() {
      light.on();
   }
}
```

```java
public class LightOffCommand implements Command {
   Light light;
   
   public LightOffCommand(Light light) {
      this.light = light;
   }
   @Override
   public void execute() {
      light.off();
   }
}
```

定义一个空的命令对象实现命令接口

```java
public class NoCommand implements Command {
   @Override
   public void execute() {
   
   }
}
```

定义一个遥控器，相当于命令集合。在命令数组属性中存储命令。

```java
public class RemoteControlWithUndo {
   Command[] onCommands;
   Command[] offCommands;
   Command undoCommand;
   
   public RemoteControlWithUndo() {
      onCommands = new Command[7];
      offCommands = new Command[7];
      
      
      NoCommand noCommand = new NoCommand();
      for (int i = 0; i < 7; i++) {
         onCommands[i] = noCommand;
         offCommands[i] = noCommand;
      }
      
      undoCommand = noCommand;
   }
   
   public void setCommand(int slot, Command onCommand, Command offCommand) {
      onCommands[slot] = onCommand;
      offCommands[slot] = offCommand;
   }
   
   public void onButtonWasPushed(int slot) {
      onCommands[slot].execute();
      undoCommand = onCommands[slot];
   }
   
   public void offButtonWasPushed(int slot) {
      offCommands[slot].execute();
      undoCommand = offCommands[slot];
   }
   
   public void undoButtonWasPushed() {
      undoCommand.execute();
   }
   
   public String toString() {
      StringBuffer stringBuff = new StringBuffer();
      stringBuff.append("\n--------Remote Control ---------\n");
      for (int i = 0; i < onCommands.length; i++) {
         stringBuff.append("[slot " + i +"]" + onCommands[i].getClass().getName()
               + "   " + offCommands[i].getClass().getName() + "\n");
      }
      return stringBuff.toString();
   }
}
```

定义测试类

```java
public class Main {
   public static void main(String[] args) {
      RemoteControlWithUndo remoteControl = new RemoteControlWithUndo();
      
      Light liveLight = new Light("Living Room");
      
      LightOnCommand lightOnCommand = new LightOnCommand(liveLight);
      LightOffCommand lightOffCommand = new LightOffCommand(liveLight);
      
      remoteControl.setCommand(0,lightOnCommand, lightOffCommand);
      
      remoteControl.onButtonWasPushed(0);
      remoteControl.offButtonWasPushed(0);
      System.out.println(remoteControl);
      
      remoteControl.undoButtonWasPushed();
      remoteControl.offButtonWasPushed(0);
      remoteControl.onButtonWasPushed(0);
      System.out.println(remoteControl);
      remoteControl.undoButtonWasPushed();
   }
}
```

笔记

1. 定义命令接口
2. 定义具体类比如灯光（Light），实现开和关方法
3. 定义具体命令类比如灯光开和灯光关方法。（LightOnCommand，LightOffCommand）。将灯光对象作为属性在构造方法中初始化
4. 定义具体命令集合。将具体命令类传进去。