### 策略模式

```
定义了对象之间的一对多依赖，这样一来，当一个对象改变状态时，它的所有依赖者都会收到通知并自动更新
```

### 设计原则

```
为交互对象之间的松耦合设计而努力
```

定义一个订阅者类

订阅者需要在构造方法中将自己添加进发布者的属性中。并且要实现Observer接口中的update方法。同时还需要实现DisplayElement类中的display方法。这两个简单接口定义略。

```java
public class CurrentConditionDisplay implements Observer, DisplayElement{

	private float temperature;
	private float humidity;
	private Subject weatherData;
	public CurrentConditionDisplay(Subject weatherData) {
		this.weatherData = weatherData;
		weatherData.registerObserver(this);
	}
	@Override
	public void display() {
		System.out.println("Current Condition: " + temperature + "F degress and " + humidity + "% humidity");
	}

	@Override
	public void update(float temperature, float humidity, float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		display();
	}
}
```

定义一个发布者类

```java
import java.util.ArrayList;

public class WeatherData implements Subject{
	private ArrayList<Observer> observers;
	private float temperature;
	private float humidity;
	private float pressure;

	public WeatherData() {
		observers = new ArrayList();
	}
	@Override
	public void registerObserver(Observer observer) {
		observers.add(observer);
	}

	@Override
	public void removeObserver(Observer observer) {
 		int i = observers.indexOf(observer);
		 if (i != -1){
			observers.remove(i);
		 }
	}

	@Override
	public void notifyObservers() {
		for (Observer observer : observers) {
			observer.update(temperature,humidity,pressure);
		}
	}

	public void measurementsChanged() {
		notifyObservers();
	}

	public void setMeasurements(float temperature, float humidity,float pressure) {
		this.temperature = temperature;
		this.humidity = humidity;
		this.pressure = pressure;
		measurementsChanged();
	}
}

```

发布者需要实现Subject方法。接口定义如下

发布者在状态更新的时候需要调用notifyObservers方法。里面需要遍历订阅者数组中的订阅者然后调用订阅者的update方法。实现一对多对象的通知，完成观察者模式。

```java
public interface Subject {
	public void registerObserver(Observer observer);
	public void removeObserver(Observer observer);
	public void notifyObservers();
}
```

测试类。（只测试了一个订阅者，多个类似）

```java
public class Main {
	public static void main(String[] args){
		WeatherData weatherData = new WeatherData();

		CurrentConditionDisplay currentConditionDisplay = new CurrentConditionDisplay(weatherData);
		CurrentConditionDisplay currentConditionDisplay1 = new CurrentConditionDisplay(weatherData);


		weatherData.setMeasurements(80, 65, 30.4f);
		weatherData.setMeasurements(81, 66, 31.4f);
		weatherData.setMeasurements(82, 67, 32.4f);

	}
}

// Current Condition: 80.0F degress and 65.0% humidity
// Current Condition: 80.0F degress and 65.0% humidity
// Current Condition: 81.0F degress and 66.0% humidity
// Current Condition: 81.0F degress and 66.0% humidity
// Current Condition: 82.0F degress and 67.0% humidity
// Current Condition: 82.0F degress and 67.0% humidity
```

### 笔记

1.其实道理很简单就是定义一个发布者对象，定义多个订阅者对象。

2.定义订阅者对象的时候将发布者对象传进去，以便发布者对象能够收集依赖（观察者/发布者）

3.发布者状态更新的时候，遍历依赖（观察者/发布者）数组。调用发布者的更新方法。发出通知
