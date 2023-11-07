# 装饰者模式

```
动态地将责任附加到对象上。想要扩展对象， 装饰者提供有别于继承的另一种选择
```

### 设计原则

```
对扩展开放，对修改关闭
```

定义一个抽象父类

```java
public abstract class Beverage {
	String description = "Unknown Beverage";
	
	public String getDescription() {
		return description;
	}
	
	public abstract double cost();
}
```

定义一个具体子类继承抽象父类

```java
public class Espresso extends Beverage{
   
   public Espresso() {
      description = "Espresso";
   }
   @Override
   public double cost() {
      return 1.99;
   }
}
```

```java
public class HouseBlend extends Beverage{
   public HouseBlend() {
      description = "House Blend Coffee";
   }
   @Override
   public double cost() {
      return 0.89;
   }
}
```

定义一个抽象装饰父类。注意：抽象装饰父类需要继承抽象父类。只是将抽象父类的装饰方法定义为抽象的。

```
public abstract class CondimentDecorator extends Beverage{
   public abstract String getDescription();
}
```

定义3个装饰子类继承装饰父类

```java
public class Mocha extends CondimentDecorator{
   Beverage beverage;
   
   public Mocha(Beverage beverage) {
      this.beverage = beverage;
   }
   
   @Override
   public double cost() {
      return .50 + beverage.cost();
   }
   
   @Override
   public String getDescription() {
      return beverage.getDescription() + " , Mocha";
   }
}
```

```java
public class Soy extends CondimentDecorator{
   Beverage beverage;
   
   public Soy(Beverage beverage) {
      this.beverage = beverage;
   }
   
   @Override
   public double cost() {
      return .80 + beverage.cost();
   }
   
   @Override
   public String getDescription() {
      return beverage.getDescription() + " , Soy";
   }
}
```

```java
public class Whip extends CondimentDecorator{
   Beverage beverage;
   
   public Whip(Beverage beverage) {
      this.beverage = beverage;
   }
   
   @Override
   public double cost() {
      return .80 + beverage.cost();
   }
   
   @Override
   public String getDescription() {
      return beverage.getDescription() + " , Whip";
   }
}
```

测试类

```java
public class Main {
   
   public static void main(String[] args) {
      Beverage beverage = new Espresso();
      System.out.println(beverage.getDescription() + " $" + beverage.cost());
      
      Beverage beverage2 = new Espresso();
      beverage2 = new Mocha(beverage2);
      beverage2 = new Mocha(beverage2);
      beverage2 = new Whip(beverage2);
      System.out.println(beverage2.getDescription() + " $" + beverage2.cost());
      
      Beverage beverage3 = new HouseBlend();
      beverage3 = new Soy(beverage3);
      beverage3 = new Mocha(beverage3);
      beverage3 = new Whip(beverage3);
      System.out.println(beverage3.getDescription() + " $" + beverage3.cost());
   
   }
   
   // Espresso $1.99
   // Espresso , Mocha , Mocha , Whip $3.79
   // House Blend Coffee , Soy , Mocha , Whip $2.99
   
}
```

### 笔记

其实装饰者模式可以理解为包装者模式，包装者可以简单的理解为俄罗斯套娃。小娃是基础对象，外面的对象是装饰者对象，初始化装饰者对象的时候需要将基础对象或者子装饰者对象传进去。当调用装饰者对象的方法时候方法内部会先调用子装饰者的方法然后加上本装饰者的属性。调用的时候就像递归。

1.定义的时候要像俄罗斯套娃，将子装饰者传给父装饰者。

2.调用的时候要像递归或者说拆俄罗斯套娃，大的俄罗斯娃拿出来同时要递归调小俄罗斯娃。