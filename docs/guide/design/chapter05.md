# 抽象工厂模式

```
定义了一个创建对象的接口，当由子类决定要要实例化的类是哪一个。工厂方法让类把实例化推迟到子类。
```

### 设计原则

```
依赖抽象，不要依赖具体类。
```

定义一个抽象披萨父类

```java
import java.util.ArrayList;

public abstract class Pizza {
   String name;
   String dough;
   String sauce;
   ArrayList<String> toppings = new ArrayList<>();
   
   public void prepare() {
      System.out.println("prepare " + name);
      System.out.println("Tossing dough...");
      System.out.println("Adding sauce...");
      System.out.println("Adding topping: ");
      for (String topping : toppings) {
         System.out.println("    " + topping);
      }
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
   
   public String getName() {
      return name;
   }
}
```

定义一个中式披萨继承披萨父类

```java
public class CheesePizza extends Pizza{
   public CheesePizza() {
      name = "CheesePizza";
      dough = "Thin Crust Dough";
      sauce = "Marinara Sauce";
      toppings.add("Grated Reggino Cheese");
   }
   
   @Override
   public void cut() {
      System.out.println("Cutting the pizza into square slices");
   }
}
```

定义一个抽象比萨门店

```java
public abstract class PizzaStore {
   
   Pizza orderPizza(String type) {
      Pizza pizza;
      pizza = createPizza(type);
      
      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
      
      return pizza;
   }
   
   public abstract Pizza createPizza(String type);
   
}
```

定义一个中式披萨门店.重写创建披萨方法。

```java
public class CheesePizzaStore extends PizzaStore{
	@Override
	public Pizza createPizza(String type) {
		Pizza pizza = null;
		if (type.equals("cheese")) {
			pizza = new CheesePizza();
		}
		return pizza;
	}
}
```

定义一个测试了类

```java
public class Main {
   public static void main(String[] args){
      PizzaStore store = new CheesePizzaStore();
      
      Pizza pizza = store.orderPizza("cheese");
      System.out.println("Joel order a " + pizza.getName());
   }
}
```

### 笔记

原则是将创建具体类型的方法交给子类，由子类根据披萨类型创建具体的披萨。