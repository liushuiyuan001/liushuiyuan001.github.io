### 设计原则

```
当涉及“维护”时，为了“复用”目的而使用继承，解决并不完美。
```
```
不管当初软件设计得多好，一段时间之后，总是需要成长与改变，否则软件就会“死亡”。
```
### 设计原则
```
找出应用中可能需要变化之处，把它们独立出来，不要和那些不需要变化的代码混在一起。
```
### 设计原则
```js
针对接口编程，而不是针对实现编程
针对接口编程真正的意思是针对超类型编程
抽象超类型可以是抽象类或者接口
```
### 策略模式
定义了算法族，分别封装起来，让它们之间可以相互替换，此模式让算法的变化独立于使用算法的客户。

将鸭子的飞和叫这种可变的行为封装起来。
首先将鸭子的飞定义成一个接口
```java
public interface FlyBehavior {
    public  void fly();
}
```
然后定义叫的接口
```java
public interface QuackBehavior {
    public void quack();
}
```
定义鸭子的抽象父类, 将飞的接口和叫叫的接口当成鸭子的属性，同时增加两个set方法，以便能动态的设置飞和叫
```java
public abstract class Duck {
    FlyBehavior flyBehavior;
    QuackBehavior quackBehavior;
    public Duck() {

    }

    public abstract void display();

    public void  performFly() {
        flyBehavior.fly();
    }

    public void  performQuack() {
        quackBehavior.quack();
    }

    public  void  swim() {
        System.out.println("All ducks float, even decoys!");
    }

    public void setFlyBehavior(FlyBehavior flyBehavior) {
        this.flyBehavior = flyBehavior;
    }

    public void setQuackBehavior(QuackBehavior quackBehavior) {
        this.quackBehavior = quackBehavior;
    }
}
```

实现两个飞的接口的类

```java
public class FlyWithWings implements FlyBehavior {
    @Override
    public void fly() {
        System.out.println("I'm  flying!!");
    }
}
```

``` java
public class FlyNoWay implements  FlyBehavior {
    @Override
    public void fly() {
        System.out.println("I can't fly");
    }
}
```

实现一个叫的接口的类

``` java
public class Quack implements QuackBehavior {
    @Override
    public void quack() {
        System.out.println("Quack");
    }
}
```

实现一个具体的ModelDuck鸭子

``` java
public class ModelDuck extends  Duck {

    public ModelDuck() {
        flyBehavior = new FlyNoWay();
        quackBehavior = new Quack();
    }
    @Override
    public void display() {
        System.out.println(" I'm a model duck");
    }
}
```

测试程序

``` java
public class HelloWorld {
    public  static void  main(String[] args) {
        Duck model = new ModelDuck();
        model.performFly();
        model.setFlyBehavior(new FlyRockPowered());
        model.performFly();
    }
}

// I can't fly
// I'm flying with rocket!
```

### 笔记

1.  关键将可变的抽离成接口，然后在父类中将接口定义成属性，增加可以改变属性的set方法。
2. 同时实现自己行为的接口的类。（🌰中的飞和叫）
3. 定义具体的子类，在构造方法中传入具体的行为的接口的类。
4. 因为父类定义了可以改变属性接口的set方法，因为能变换具体的行为类。