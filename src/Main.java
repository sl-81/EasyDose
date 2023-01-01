import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Integer TylenolR = 325;
        Integer TylenolE = 500;
        Scanner w = new Scanner(System.in);
        System.out.println("Your Child's Weight (in kg)");
        Float weight = w.nextFloat();
        Float TylenolDoseU = weight * 15;
        Float TylenolDoseL = weight * 10;
        System.out.println("Range:" + TylenolDoseL + "-" + TylenolDoseU + "mg");
        
    }

}