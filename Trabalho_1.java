import java.util.Scanner;

public class Trabalho_1 {

    public static void main(String[] args) {

        Scanner leitor = new Scanner(System.in);

        
        String nome = "Gabriel";
        int idade = 25;
        double valorDaCompra = 1200.0;

        double cashback = 0.0;
        String cashbackPorcentagem = "";

        
        if (idade >= 21) {
            if (valorDaCompra < 1000) {
                cashback = valorDaCompra * 0.05;
                cashbackPorcentagem = "5%";
            } else {
                cashback = valorDaCompra * 0.07;
                cashbackPorcentagem = "7%";
            }
        } else {
            if (valorDaCompra < 1000) {
                cashback = valorDaCompra * 0.07;
                cashbackPorcentagem = "7%";
            } else {
                cashback = valorDaCompra * 0.10;
                cashbackPorcentagem = "10%";
            }
        }

        
        System.out.println("\nCliente: " + nome);
        System.out.println("Idade: " + idade);
        System.out.printf("Cashback: R$ %.2f (%s de R$ %.2f)\n", cashback, cashbackPorcentagem, valorDaCompra);

        leitor.close();
    }
}
