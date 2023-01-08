import java.util.Scanner;
public class Main {
    public static void main(String[] args){
        Scanner w = new Scanner(System.in);
        System.out.println("Your Child's Weight (in kg)");
        Scanner c = new Scanner(System.in);
        System.out.println("Select 1 for Tylenol, 2 for Advil");
        double minRegularTab = 81.25;
        double minExtraTab = 125;
        double weight = w.nextFloat();
        double TylenolDoseU = weight * 15;
        double TylenolDoseL = weight * 10;
        System.out.println("Dose Range:" + TylenolDoseL + "-" + TylenolDoseU + "mg");
        if (weight < 5.5) {
            System.out.println("Please consult your doctor before use");
            System.exit(0);
        }
        else if (weight >= 5.5 && weight < 8.3){
            System.out.println("Give 1/4 Regular Strength Tablet =" + minRegularTab +"mg");
        }
        else if (weight >=8.3 && weight < 10.9){
            System.out.println("Give 1/4 Extra Strength Tablet =" + minExtraTab +"mg");
        }
        else if (weight >=10.9 && weight < 16.3){
            System.out.println("Give 1/2 Regular Strength Tablet =" + (2 * minRegularTab) +"mg");
        }
        else if (weight >= 16.3 && weight < 16.7){
            System.out.println("Give 3/4 Regular Strength Tablet =" + (3 * minRegularTab) + "mg");
        }
        else if (weight >=16.7 && weight < 25) {
            System.out.println("Give 1/2 Extra Strength Tablet =" + (2 * minExtraTab) +"mg");
        }
        else if (weight >=25 && weight <37.5){
            System.out.println("Give 3/4 Extra Strength Tablet =" + (3 * minExtraTab)+"mg");
        }
        else if (weight >=37.5 && weight <50){
            System.out.println("Give 1 Extra Strength Tablet =" + (4 * minExtraTab) +"mg");
        }
        else {
            System.out.println("Use adult Tylenol according to directions");
        }
        System.out.println("every 4-6 hours or to a maximum of " + (75 * weight) + "mg per day or 4000mg per day, whichever is less");
    }

}