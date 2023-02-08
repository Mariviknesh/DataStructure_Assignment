package org.studentTest;
import java.util.Scanner;
import java.util.*;  
import java.util.logging.*;

public class StudentTest 
{
    public static void main( String[] args )
    {
    	
    	 String name;
         double gpa;
         int age;
         int n;
         Logger log=Logger.getLogger("com.api.jar")
         Scanner mysc=new Scanner(System.in);
        log.info("Enter the number of Students:");
         n=mysc.nextInt();
         Student s[]=new Student[n];
         List<Student> StudList=new ArrayList<Student>();
         for(int i=0;i<n;i++)
         {
            log.info("Enter the Student's name:");
             name=mysc.next();
            log.info("Enter the Student's age:");
             age=mysc.nextInt();
            log.info("Enter the Student's gpa:");
             gpa=mysc.nextDouble();
             s[i]=new Student();
             s[i].setName(name);
             s[i].setAge(age);
             s[i].setGPA(gpa);
             StudList.add(s[i]);
         }
         for(int i=0;i<n;i++)
         {
            log.info("Student name:"+s[i].getName()+"\n");
            log.info("Student age:"+s[i].getAge()+"\n");
            log.info("Student gpa:"+s[i].getGPA()+"\n");
         }
         Collections.sort(StudList,new Comparator<Student>() {
        	 public int compare(Student s1,Student s2)
        	 {
        		 double res= s2.getGPA()-s1.getGPA();
        		 return (int)res;
        	 }
         });
        log.info("After Update\n");
//         for(int i=0;i<n;i++)
//         {
//            log.info("Student name:"+s[i].getName()+"\n");
//            log.info("Student age:"+s[i].getAge()+"\n");
//            log.info("Student gpa:"+s[i].getGPA()+"\n");
//         }
        log.info("Array List\n");
for(int i=0;i<n;i++)
{
      log.info("Student name:"+StudList.get(i).getName()+"\n");
      log.info("Student age:"+StudList.get(i).getAge()+"\n");
      log.info("Student gpa:"+StudList.get(i).getGPA()+"\n");
   
}
         mysc.close();
    }
}


class Student{
    String name;
    int age;
    double gpa;
     Student()
     {
         this.name="";
         this.age=0;
         this.gpa=0;
     }
    public void updateGpa(double upga)
    {
        this.gpa=upga;
    }
    public void setName(String name)
    {
        this.name=name;
    }
    public void setAge(int age)
    {
        this.age=age;
    }
    public void setGPA(double gpa)
    {
        this.gpa=gpa;
    }
    public String getName()
    {
        return name;
    }
    public int getAge()
    {
        return age;
    }
    public double getGPA()
    {
        return gpa;
    }
}
