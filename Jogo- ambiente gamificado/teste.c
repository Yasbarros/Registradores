#include <stdio.h>

int main() {
    int registrador = 0; // Declaração e inicialização do registrador com valor 0
    int operacao, valor;

    printf("Registrador inicial: %d\n", registrador);

    while (1) {
        printf("Digite uma operação (1-Adicionar, 2-Subtrair, 3-Zerar, 0-Sair): ");
        scanf("%d", &operacao);

        if (operacao == 0) {
            break;
        }

        switch (operacao) {
            case 1:
                printf("Digite o valor a ser adicionado: ");
                scanf("%d", &valor);
                registrador += valor;
                break;
            case 2:
                printf("Digite o valor a ser subtraído: ");
                scanf("%d", &valor);
                registrador -= valor;
                break;
            case 3:
                registrador = 0;
                break;
            default:
                printf("Operação inválida!\n");
        }

        printf("Valor atual do registrador: %d\n", registrador);
    }

    printf("Valor final do registrador: %d\n", registrador);
    return 0;

}
