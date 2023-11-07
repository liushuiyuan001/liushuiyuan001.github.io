# 简单工厂模式

简单工厂模式实际不是一个设计模式，而是实现创建子类过程中的一个方法。为抽象工厂方法做铺垫。

定义一个简单工厂方法类，其实定义一个创建子类的方法

```java
public class SimplePizzaFactory {
   public  Pizza createPizza(String type) {
      Pizza pizza = null;
      
      if (type.equals("cheese")) {
         pizza = new CheesePizza();
      } else if (type.equals("greek")) {
//       pizza = new GreekPizza();
      } else if (type.equals("pepperoni")){
//       pizza = new pepperoniPizza();
      }
      
      return  pizza;
   }
}
```

定义一个披萨父类

```java
public class Pizza {
   
   public void prepare() {
      System.out.println("prepare");
   }
   
   public void bake() {
      System.out.println("bake");
   }
   
   public void cut() {
      System.out.println("cut");
   }
   
   public void box() {
      System.out.println("box");
   }
   
   public void  name() {
   
   }
}
```

定义个中式比萨子类,重写父类的name方法

```java
public class CheesePizza extends Pizza{
   @Override
   public void name() {
      System.out.println("Cheese Pizza");
   }
}
```

定义一个商店类。用于接收订单，发货

```java
public class PizzaStore {
   
   SimplePizzaFactory factory = new SimplePizzaFactory();
   
   public PizzaStore(SimplePizzaFactory factory) {
      this.factory = factory;
   }
   
   Pizza orderPizza(String type) {
      Pizza pizza;
      pizza = factory.createPizza(type);
      
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      
      return pizza;
   }
   
}
```

测试类

```java
public class Main {
   public static void main(String[] args){
      SimplePizzaFactory factory = new SimplePizzaFactory();
      PizzaStore store = new PizzaStore(factory);
      Pizza pizza = store.orderPizza("cheese");
      pizza.name();
   }
}
```

### 笔记

1. 定义简单工厂类，定义创建子类的方法

2. 定义父类，定义子类

3. 定义客户端或者说门店。定义一个简单工厂对象属性，在构造方法中接收。在下单方法中调用简单工厂对象属性的创建对象方法。

   初始化抽象工厂对象，初始化门店对象将工厂对象传进去。调用下单方法，然后根据具体类型调用简单工厂方法构造具体子类