public class Droid{
  int batteryLevel;
  String name;

  public Droid(String droidName){
     name = droidName;
     batteryLevel = 100;
  }

  public void performTask(String task){
    System.out.println("Codey is performing task:" + task
);
    batteryLevel = batteryLevel - 10;
  }
  public static void main(String[] args){
     Droid Codey = new Droid("Codey");
     System.out.println(Codey);
     Codey.performTask("Dance");
  }

  public String toString(){
    return "Hello, I`m the droid:" + name;
  }
}