export const cardData = [
  {
    id: crypto.randomUUID(),
    title: 'Máximo Divisor',
    description:
      'O maior divisor comum (MDC) é o maior número que divide dois ou mais números sem deixar resto. O MDC é obtido encontrando os fatores comuns aos números e selecionando o maior deles.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Maximo%20Divisor.h',
    code: `
int maxDiv(int num, int num2) {

    int i, soma = 0, max1 = 0, max2 = 0, max3 = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            if (max1 < i) {
                max1 = i;
            }
        }
    }

    for (i = 1; i <= num2; i++) {
        if (num2%i == 0) {
            if (max2 < i) {
                max2 = i;
            }
        }
        if (max1 == max2 && max3 < max1) {
            max3 = max1;
        }
    }
    return max3;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Quais os divisores de um número',
    description:
      'Divisores de um número são os números inteiros que podem ser divididos uniformemente por ele. Incluem o próprio número, 1 e outros fatores desse número.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Quais%20Os%20DIVISORES.h',
    code: `
void quaisDiv(int num) {

    int i;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            printf("%i  ",i);
        } 
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Quantidade de divisores de um número',
    description:
      'A quantidade de divisores de um número é a contagem total de todos os números inteiros pelos quais o número pode ser dividido uniformemente, incluindo o próprio número e o 1.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Quantidade%20De%20DIVISORES.h',
    code: `
int qtdDivisores(int num) {

    int i, cont = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            cont++;
        }
    }
    return cont;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Soma dos divisores de um número',
    description:
      'A soma dos divisores de um número é o resultado da adição de todos os divisores desse número. Para calcular essa soma, é necessário identificar todos os divisores do número e, em seguida, somá-los.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/Soma%20Dos%20Divisores.h',
    code: `
int somaDiv(int num) {

    int i, soma = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            soma += i;
        }
    }
    
    return soma;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula o divisor comum',
    description:
      'Calcular o divisor comum de dois ou mais números envolve encontrar o maior número que divide uniformemente todos os números dados. Para isso, é necessário listar os divisores de cada número e identificar os divisores que são comuns a todos eles. ',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Divisores/calculaDivisorComum.h',
    code: `
int somaDiv(int num) {

    int i, soma = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            soma += i;
        }
    }
    
    return soma;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Criar árvore de natal',
    description:
      'Exibe uma árvore de Natal no console, utilizando como parâmetro um número que representa o tamanho dessa árvore. Ela utiliza caracteres especiais, como asteriscos e espaços, para criar uma representação gráfica da árvore.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/Fazer%20Arvore%20de%20Natal.h',
    code: `
int montaArvore(int num) {
    int i, j;
    
    for(i = 0; i <= num; i++) {
        for(j = num; i <= j; j--) {
            printf(" ");
        }
        
        for(j = 0; j <= i; j++) {
            printf("*");
        }
    
        for(j = 1; j <= i; j++) {
            printf("*");
        }
        
        printf("\\n");
    }
    
    for(i = 0; i <= 5; i++) {
        for(j = 0; j <= num; j++) {
            printf(" ");
        }

        printf("*\\n");
    }
    
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cria um losango',
    description:
      'Exibe um losango no console, utilizando como parâmetro um número que representa o seu tamanho. Ele utiliza caracteres especiais, como asteriscos e espaços, para criar uma representação gráfica do losango.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/Fazer%20um%20Losango.h',
    code: `
void dima(int num) {

    if (num % 2 == 0) {
        printf("Numero par, opcao invalida!");
    } else {
        
        int i, y, j;
        
        for (i = 1; i<=(num/2) + 1; i++) {
            for (y = num; i <= y; y--) {
                printf(" ");
            }
            for (y = 1; y <= i; y++) {
                printf("*");
            }
            for (y = 2; y <= i; y++) {
                printf("*");
            }
        printf("\\n");

        }
        for (i = (num/2), j = 1; i>=j; i--) {
            for (y = num; i <= y; y--) {
                printf(" ");
            }
            for (y = 1; y <= i; y++) {
                printf("*");
            }
            for (y = 2; y <= i; y++) {
                printf("*");
            }
        printf("\\n");
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cria um quadrado',
    description:
      'Exibe um quadrado no console, utilizando como parâmetro a sua quantidade de linhas e colunas, além de ser possível passar um caracter específico para que esse quadrado seja montado.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/FazerQuadrado.h',
    code: `
void quadrado(int numLinhas, int numColunas, int caractere) {

    int i, count;
    
    for (i = 0; i < (numColunas * numLinhas); i++) {
        if (count == numColunas - 1) {
            printf("%c\\n", caractere);
            count = 0;
        } else {
            printf("%c ", caractere);
            count++;
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Cria um triângulo vazado / preenchido',
    description:
      'Exibe um triângulo no console, utilizando como parâmetro um número para definir seu tamanho, além de uma opção para definir se o triângulo deve ser ou não preenchido com caracteres.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/TrianguloVazadoPreenchido.h',
    code: `
void trianguloVazadoOuPreenchido(int num, char opcao) {
    int i, y, j;
    
    if (opcao == 'P' || opcao == 'p') {
        for (i = 1; i<=num + 1; i++) {
            for (y = 1; y < i; y++) {
                printf("*");
            }
        printf("\\n");
        }
    } else if (opcao == 'V' || opcao == 'v'){
        for (i = 0; i < num; i++) {
            if (i == num - 1) {
                for (y = 0; y <= i; y++) {
                    printf("*");
                }
            } else {
                for (y = 0; y <= i; y++) {
                    if (y == 0 || y == i) {
                        printf("*");
                    } else {
                        printf(" ");
                    }
                }
            }
        printf("\\n");
        }
    }

}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula número retangular e com intervalo',
    description:
      'Números retangulares são números gerados a partir do produto de dois números consecutivos. São chamados assim pois podem ser representados em um formato retangular.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/RetangularComIntervalo.h',
    code: `
int calcularRetangular(int num) {
    int i = 2, n3 = 0, j, y;
    
    for (i; n3 < num; i += 2) {
        n3 += i;
        j = i;
    }
    if (n3 == num) {
        for (y = 2; y <= num; y += 2) {
            if (y < j) {
                printf("%d + ", y);
            } else if (y == j) {
                printf("%d = %d ==> Eh retangular", y, num);
            }
        }
        return 1;
    } else if (n3 > num){
        printf("%d nao eh retangular", num);
        return 0;
    }
}

void calcularRetangularComIntervalo(int inferior, int superior) {
    int i = 2, n3 = 0, j, y;
    
    for (inferior; inferior <= superior; inferior++) {
        for (i; n3 < inferior; i += 2) {
            n3 += i;
            j = i;
        }
        if (n3 == inferior) {
            for (y = 2; y <= inferior; y += 2) {
                if (y < j) {
                    printf("%d + ", y);
                } else if (y == j) {
                    printf("%d = %d ==> Eh retangular!\\n", y, inferior);
                }
            }
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula número triangular e com intervalo',
    description:
      'Um número triangular é um número que pode ser representado na forma de um triângulo equilátero de pontos. A sequência de números triangulares é obtida somando-se os números naturais consecutivos.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Formas%20Geometricas/TriangularComIntervalo.h',
    code: `
int calculaNumeroTriangular(int num) {

    int i = 1, n3 = 0;
    
    for (i = 1; n3 < num; i++) {
        n3 = i * (i + 1) * (i + 2);
    }
    
    if (n3 == num) {
        printf("%d eh triangular ==> %d * %d * %d = %d", num, i - 1, i, i + 1, n3);
        return 1;
    } else {
        printf("%d nao eh triangular.", num);
        return 0;
    }
}

void calculaNumeroTriangularComIntervalo(int inferior, int superior) {
    
    int i = 1, n3 = 0, j;
    
    for (inferior; inferior <= superior; inferior++) {
        for (i; n3 < inferior; i++) {
            n3 = i * (i + 1) * (i + 2);
        }
        if (n3 == inferior) {
            printf("%d eh triangular ==> %d * %d * %d = %d\\n", inferior, i - 1, i, i + 1, n3);
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se o ano é bissexto',
    description:
      'Um ano bissexto é um ano que possui um dia extra, totalizando 366 dias, em vez dos 365 dias dos anos comuns. A função retorna 1 quando o ano passado por parâmetro é bissexto e 0 quando não é bissexto.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/anoBissexto.h',
    code: `
int anoBissexto(int year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número é feliz',
    description:
      'Um número feliz é um número inteiro positivo que, ao substituir cada dígito pelo quadrado dele e somar repetidamente, resulta em 1. Esses números têm propriedades matemática associados à felicidade e harmonia numérica.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/calcularNumeroFeliz.h',
    code: `
int calcularQuadradoDigitos(int numero) {
    int somaQuadrados = 0, proxDigito = 0;

    while (numero > 0) {
        printf("Soma = %d\\t", somaQuadrados);
        int digito = numero % 10;
        int proxDigito = numero / 10;
        printf("Digito = %d\\t", digito);
        somaQuadrados += digito * digito;
        printf("potencia = %d ^ 2 = %d\\t", digito, (digito * digito));
        printf("Soma acumulada = %d\\t", somaQuadrados);
        printf("Numero final = %d\\n", proxDigito);
        numero /= 10;
    }
    return somaQuadrados;
}

int ehFeliz(int numero) {
    for (int i = 0; i < 20; i++) {
        printf("=== PASSO %d ===\\n", i + 1);
        numero = calcularQuadradoDigitos(numero);
        if (numero == 1) {
            return 1;
        }
    }
    return 0;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número é Armstrong',
    description:
      'Um número Armstrong é um número inteiro positivo no qual a soma dos cubos de seus dígitos é igual ao próprio número. Esses números são raros e têm propriedades matemáticas únicas.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/numeroArmstrong.h',
    code: `
int numeroArmstrong(int num) {
    int originalNum = num;
    int sum = 0;
    int digits = 0;
    
    while (num != 0) {
        digits++;
        num /= 10;
    }
    
    num = originalNum;
    
    while (num != 0) {
        int digit = num % 10;
        sum += pow(digit, digits);
        num /= 10;
    }
    
    return sum == originalNum;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número equivale a soma dos ímpares',
    description:
      'Um número que equivale à soma dos ímpares é um número inteiro em que a sua representação é a soma de vários números ímpares consecutivos.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/numeroEquivaleSomaImpares.h',
    code: `
void numeroEquivaleSomaImpares (int num) {

    int i, soma = 0, resultado = 0;
    
    printf("%d = ", num);
    
    for(i = 1; i <= num; i += 2) {
        
        soma += i;
        printf("%d ", i);
        
        if (soma == num) {
            resultado++;
            break;
        } else if (soma > num) {
            break;
        }
        
    }
    
    if (resultado != 0) {
            printf("=> Soma = %d => Equivale a soma dos impares\\n", soma);
        } else {
            printf("=> Soma = %d => Nao equivale a soma dos impares\\n", soma);
    }
    
}

void numeroEquivaleSomaImparesIntervalo(int inferior, int superior) {
    
    int i;
    
    for (i = inferior; i <= superior; i++) {
        numeroEquivaleSomaImpares(i);
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número é perfeito',
    description:
      'Um número perfeito é um número inteiro positivo que é igual à soma de seus divisores próprios (excluindo o próprio número).',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/numeroPerfeito.h',
    code: `
int numeroPerfeito(int num) {
    int sum = 0;
    
    for (int i = 1; i < num; i++) {
        if (num % i == 0) {
            sum += i;
        }
    }
    
    return sum == num;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número é palíndromo',
    description:
      'Um número palíndromo é um número que permanece o mesmo quando lido da esquerda para a direita e vice-versa. Retorna 1 para quando o número é palíndromo.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Numeros%20Com%20Condições%20Esquisitas/palindromo.h',
    code: `
//o parametro deve ser passado como string (ex: "5005")

int isPalindrome(const char *str) {
    int len = strlen(str);
    
    for (int i = 0, j = len - 1; i < j; i++, j--) {
        if (str[i] != str[j]) {
            return 0;
        }
    }
    
    return 1;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula fatorial de um número',
    description:
      'O fatorial de um número é o produto de todos os números inteiros positivos menores ou iguais a ele. É representado pelo símbolo "!".',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Pegar%20Caracteristicas%20do%20Número/Calculo%20de%20fatoriais.h',
    code: `
int calculaFat(int num) {
    int i, fat=1;

    for(i=num; i>=2; i--)
    {
        fat = fat * i;
    }
    return(fat);
}

void mostraFat(int num, int fat) {
    int i;

    printf("%d! = ", num);

    for(i=num; i>=2; i--)
    {
        printf("%d * ", i);
    }
    printf("1 = %d\\n", fat);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número é primo',
    description:
      'Um número primo é um número inteiro maior que 1 que possui apenas dois divisores: ele mesmo e 1. Retorna "cont" como 0, caso o número seja primo.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Pegar%20Caracteristicas%20do%20Número/Verifica%20se%20é%20primo.h',
    code: `
int primo(int num) {
    int i = 2, cont = 0, result;
    
    for (i; i<=num / 2; i++) {
        if (num%i == 0) {
            cont++;
            break;
        }
        if (cont > 1) {
            cont++;
        }
    }
    return cont;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Converte um número binário para decimal',
    description:
      'Para realiar a conversão de binário para decimal, deve-se multiplicar cada dígito binário pela potência de 2 correspondente e somar os resultados.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Pegar%20Caracteristicas%20do%20Número/binarioParaDecimal.h',
    code: `
int binarioParaDecimal(long long binaryNum) {
    int decimalNum = 0;
    int base = 1;
    
    while (binaryNum != 0) {
        int digit = binaryNum % 10;
        decimalNum += digit * base;
        binaryNum /= 10;
        base *= 2;
    }
    
    return decimalNum;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Inverte um número inteiro',
    description:
      'Inverter um número inteiro é o processo de reorganizar a ordem dos dígitos, de forma que o último se torne o primeiro e assim por diante.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Pegar%20Caracteristicas%20do%20Número/inverteInteiro.h',
    code: `
int inverteInteiro(int num) {
    int reversed = 0;
    
    while (num != 0) {
        int digit = num % 10;
        reversed = reversed * 10 + digit;
        num /= 10;
    }
    
    return reversed;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Separar dígitos de um número',
    description:
      'A função recebe um número inteiro e separa os seus dígitos, independente do tamanho do número original.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Pegar%20Caracteristicas%20do%20Número/pegarDigitoNumero.h',
    code: `
void pegarDigito(int numero) {
    int digito = 0, numeroSemUltimoDigito = 0;
    while (numero > 0) {
        digito = numero % 10;
        //int numeroSemUltimoDigito = numero / 10;
        printf("Digito: %d\\n", digito);
        numero /= 10;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar vetor de letras maiúsculas',
    description:
      'Gera um vetor de letras maiúsculas aleatórias de A a Z, recebendo como parâmetro um tamanho definido.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Gerar%20Vetor%20Char%20Maiusculo.h',
    code: `
void gerarVetorCharMaiscula(char vetor[], int tam) {
    for (int i = 0; i < tam; i++) {
        vetor[i] = rand() % 26 + 65;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar vetor de letras minúsculas',
    description:
      'Gera um vetor de letras minúsculas aleatórias de A a Z, recebendo como parâmetro um tamanho definido.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Gerar%20Vetor%20Char%20Minusculo.h',
    code: `
void gerarVetorCharMinuscula(char vetor[], int tam) {
    for (int i = 0; i < tam; i++) {
        vetor[i] = rand() % 26 + 97;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra os elementos de um vetor char',
    description:
      'Mostra no console todos os elementos de um vetor do tipo char.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Mostrar%20Vetor%20CHAR.h',
    code: `
void mostraVetorChar(char vet[], int tamanho, int num) {
    int i, j = 0;

    for(i=0; i<tamanho; i++) {
        if (j < num - 1) {
            printf("%c ", vet[i]);
            j++;
        } else if (j == num - 1) {
            printf("%c\\n", vet[i]);
            j = 0;
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra os elementos de um vetor int',
    description:
      'Mostra no console todos os elementos de um vetor do tipo inteiro.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Mostrar%20Vetores%20INTEIROS.h',
    code: `
void mostraVetorInteiros(int vet[], int tamanho) {
    int i;

    for(i=0; i<tamanho; i++)
    {
        printf("%d ", vet[i]);
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra os elementos de um vetor float',
    description:
      'Mostra no console todos os elementos de um vetor do tipo float.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Mostrar%20Vetores%20FLOAT.h',
    code: `
void mostraVetorFloat(float vet[], int tamanho) {
    int i;

    for(i=0; i<tamanho; i++)
    {
        printf("%.1f  ", vet[i]);
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra a soma dos elementos de um vetor float',
    description:
      'Mostra no console a soma de todos os elementos de um vetor do tipo float.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Mostrar%20Soma%20Vetores%20FLOAT.h',
    code: `
void mostraSomaVetorFloat(float vet[], int tamanho) {
    int i;
    float soma = 0;
    
    for(i=0; i<tamanho; i++){
        soma += vet[i];
    }
    printf("\\nSoma: %.2f", soma);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Ordenar valores de um vetor int',
    description:
      'Faz a ordenação, em ordem crescente, de todos os elementos de um vetor do tipo inteiro.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Ordenar%20Valores%20De%20Um%20Vetor.h',
    code: `
void ordenaVetor(int vetor[], int tam) {
    int aux, i, j;
    for (j = tam - 1; j > 0; j--) {
        for (i = 0; i < j; i++) {
            if (vetor[i] > vetor[i + 1]) {
                aux = vetor[i];
                vetor[i] = vetor[i + 1];
                vetor[i + 1] = aux;
            }
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gera vetor float de 0 a 1',
    description:
      'Gera um vetor de números do tipo float entre 0 e 1, recebendo como parâmetro um tamanho definido.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Vetor%20Float%20de%200%20a%201.h',
    code: `
void geraVetorFloat0a1(float array[], int size) {

    srand(time(NULL));

    for (int i = 0; i < size; i++) {
        array[i] = (float) rand() / RAND_MAX;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gera vetor float de 0 a 100',
    description:
      'Gera um vetor de números do tipo float entre 0 e 100, recebendo como parâmetro um tamanho definido.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Vetor%20Float%20de%200%20a%20100.h',
    code: `
void geraVetorFloat0a100(float array[], int size) {

    srand(time(NULL));

    for (int i = 0; i < size; i++) {
        array[i] = ((float) rand() / RAND_MAX)*100;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gera vetor int com limites positivos e negativos',
    description:
      'Gera um vetor de números do tipo inteiro entre um intervalo, passado por parâmetro, positivo e negativo.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Vetor%20com%20Limites%20Positivos%20e%20Negativos.h',
    code: `
void atualizaVetorComLimitesNegativosEPositivos(int array[], int size, int min, 
int max) {

    srand(time(NULL));

    for (int i = 0; i < size; i++) {
        array[i] = rand() % (max + min + 1) - min;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gera vetor int com limites positivos',
    description:
      'Gera um vetor de números do tipo inteiro entre um intervalo, passado por parâmetro, apenas positivo.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Vetor%20com%20Limites%20Positivos.h',
    code: `
void gerarVetorComLimitesPositivos(int array[], int size, int min, int max) {

    srand(time(NULL));

    for (int i = 0; i < size; i++) {
        array[i] = rand() % (max - min + 1) + min;
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra pares e suas somas de um array sem números repetidos',
    description:
      'Mostra todos os pares e a soma desses pares. Caso o array possua números repetidos, somente um número será considerado.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Pares%20De%20Um%20Array%20Sem%20Repetições.h',
    code: `
void paresAteUmNumero(int num) {
    int i;
    
    for (i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            printf("%d  ", i);
        }
    }
}

int somaDePares(int num) {
    int i, cont = 0;
    
    for (i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            cont += i;
        }
    }
    return cont;
}

void paresDeUmArraySemrepetidos(int vetor[], int tamanho) {
    int i;

    for(i=0; i<tamanho; i++) {
        if (i == 0 || vetor[i] != vetor[i-1]) {
            printf("%d => ", vetor[i]);
            paresAteUmNumero(vetor[i]);
            printf("Soma = %d\\n", somaDePares(vetor[i]));
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra divisores e quantidade de um array sem números repetidos',
    description:
      'Mostra todos os divisores e a quantidade desses divisores. Caso o array possua números repetidos, somente um número será considerado.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/DivisoresDosElementosArraySemRepetições.h',
    code: `
int qtdDivisores(int num) {

    int i, cont = 0;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            cont++;
        }
    }
    return cont;
}

void quaisDiv(int num) {

    int i;
    
    for (i = 1; i <= num; i++) {
        if (num%i == 0) {
            printf("%i  ",i);
        } 
    }
}

void divisoresDeUmArraySemrepetidos(int vetor[], int tamanho) {
    int i;

    for(i=0; i<tamanho; i++) {
        if (i == 0 || vetor[i] != vetor[i-1]) {
            printf("%d => ", vetor[i]);
            quaisDiv(vetor[i]);
            printf("-  %d Divisores\\n", qtdDivisores(vetor[i]));
        }
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar tabuada',
    description:
      'Gerar tabuada, de 0 a 10, de um número passado por parâmetro.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Novos%20Códigos/Gerar%20Tabuada.h',
    code: `
void gerarTabuada(int num) {

    int result;
    
    for (int i = 0; i <= 10; i++) {
        result = num * i;
        printf("%d * %d = %d\\n", num, i, result);
    }
    
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar vetor int sem elementos repetidos',
    description:
      'Gera um vetor de números do tipo inteiro sem elementos repetidos, recebendo como parâmetro um tamanho definido.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Novos%20Códigos/GerarVetorSemRepeticao.h',
    code: `
void gerarVetorSemRepeticao(int vetor[], int tamanho, int limite) {

    int i, num, j;
    
    srand(time(NULL));

    for(i = 0; i < tamanho; i++) {
        do {
            
            num = rand() % limite + 1;
            
            for (j = 0; j < i; j++) {
                if (vetor[j] == num) {
                    num = 0;
                    break;
                }
            }
            
        } while (num == 0);
        
        vetor[i] = num;
    }
    
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se um número existe num vetor int',
    description:
      'Verifica se um número, passado por parâmetro, já existe num vetor do tipo inteiro. Caso não exista, o count será retornado como 0.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Novos%20Códigos/Verifica%20Quantas%20Vezes%20o%20Numero%20tem%20no%20Vetor.h',
    code: `
int existeNoVetor(int vetor[], int size, int num) {

    int i,count = 0;
    
    for (i = 0; i < size; i++) {
        if (vetor[i] == num) {
            count++;
        }
    }
    return count;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica a maior frequência de um número num vetor aleatório int',
    description:
      'Verifica e exibe qual número possui maior a frequência (vezes seguidas) num vetor aleatório do tipo inteiro.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Novos%20Códigos/Verifica%20as%20Ocorrências.h',
    code: `
int verificaAMaiorOcorrenciaNoVetor(int vetor[], int size) {

    int soma, count, k, x, y, i;
    
    soma = 1;
    count = 1;
    for (i = 0; i < size; i++) {
        
        if (vetor[i] == y) {
            count += 1;
        } else {
            count = 1;
        }
        if (soma < count) {
            k = vetor[i];
            soma = count;
        }
        y = vetor[i];
    }
    if (k == 0) {
        printf("\\nMaior quantidade de ocorrencias: %i por que teve %i ocorrencias.", vetor[i], soma);
    } else {
        printf("\\nMaior quantidade de ocorrencias: %i por que teve %i ocorrencias.", k, soma);
    }
    
}
        `,
  },
  {
  id: crypto.randomUUID(),
  title: 'Comparar strings',
  description:
    'Compara duas strigs e retorna 1 caso as strings forem iguais, e 0 caso não forem iguais.',
  githubLink:
    'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/comparaString.h',
  code: `
int comparaString(char str1[], char str2[]) {
    int i = 0;

    while (str1[i] != '\\0' && str2[i] != '\\0') {
        if (str1[i] != str2[i]) {
            return 0;
        }
        i++;
    }

    if (str1[i] == '\\0' && str2[i] == '\\0') {
        return 1;
    }

    return 0;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Conta caracteres alfanuméricos',
    description:
      'Recebe uma string e mostra quantos caracteres alfabéticos e quantos numéricos ela possui.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/contaAlfaDecimal.h',
    code: `
void contaAlfaDecimal(char string[]) {
    int i, countAlfa = 0, countDecimal = 0;
    
    for (i = 0; string[i] != '\\0'; i++) {
        if (string[i] >= 'a' && string[i] <= 'z' || string[i] >= 'A' && string[i] <= 'Z') {
            countAlfa++;
        } else if (string[i] >= '0' && string[i] <= '9') {
            countDecimal++;
        }
    }
    
    printf("Existem %d caracteres alfabeticos no texto.\\n", countAlfa);
    printf("Existem %d caracteres numericos no texto.", countDecimal);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Conta quantas vogais uma string possui',
    description:
      'Recebe uma string e exibe quantas e quais vogais essa string possui.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/contaVogais.h',
    code: `
void contaVogais(int vetVogais[], char string[]) {

    int i;
    
    for(i=0; string[i]!='\\0'; i++) {
        if (string[i] == 'a' || string[i] == 'A') {
            vetVogais[0]++;
        } else if (string[i] == 'e' || string[i] == 'E') {
            vetVogais[1]++;
        } else if (string[i] == 'i' || string[i] == 'I') {
            vetVogais[2]++;
        } else if (string[i] == 'o' || string[i] == 'O') {
            vetVogais[3]++;
        } else if (string[i] == 'u' || string[i] == 'U') {
            vetVogais[4]++;
        }
    }
    
    printf("\\nVOGAL\\t QUANTIDADE\\n");
    printf("====================\\n");
    printf("a/A\\t\\t%d\\n", vetVogais[0]);
    printf("e/E\\t\\t%d\\n", vetVogais[1]);
    printf("i/I\\t\\t%d\\n", vetVogais[2]);
    printf("o/O\\t\\t%d\\n", vetVogais[3]);
    printf("u/U\\t\\t%d\\n", vetVogais[4]);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Copia a primeira palavra da string',
    description:
      'Recebe uma string e exibe a primeira palavra.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/copiaPrimeiraPalavra.h',
    code: `
void copiaPrimeiraPalavra(char string[]) {
    int i, j = 0, y = 0, primeiroEspaco = 0;
    char stringPalavra[50];
    
    for (i = 0; string[i] != '\\0'; i++) {
        
        if (primeiroEspaco == 0) {
            while (string[i] == ' ') {
                i++;
            }
        }
        
        primeiroEspaco = 1;
        
        if (string[i] != ' ' && string[i] != '\\n') {
            stringPalavra[j] = string[i];
            j++;
        } else {
            break;
        }
        
    }
    
    stringPalavra[j] = '\\0';
    printf("%s\\n", stringPalavra);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Quebra linhas em palavras de uma string',
    description:
      'Recebe uma string e exibe uma palavra em baixo da outra.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/quebraLinha.h',
    code: `
void quebraLinha(char string[]) {
    int i, j = 0, primeiroEspaco = 0;
    char palavra[50];

    printf("\\n==== TEXTO NA VERTICAL ====\\n");

    for (i = 0; string[i] != '\\0'; i++) {
        if (primeiroEspaco == 0) {
            while (string[i] == ' ') {
                i++;
            }
        }

        primeiroEspaco = 1;

        if (string[i] != ' ' && string[i] != '\\n') {
            palavra[j] = string[i];
            j++;
        } else {
            palavra[j] = '\\0';
            printf("%s\\n", palavra);
            j = 0;
        }
    }

    palavra[j] = '\\0';
    printf("%s", palavra);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Limpar buffer do teclado',
    description:
      'Função para limpar buffer do teclado.',
    githubLink:
      'https://github.com/Vttrium/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/limpaBuffer.h',
    code: `
void limparBuffer() {
    int c;
    while ((c = getchar()) != '\\n' && c != EOF){}
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Concatenar Strings',
    description:
      'Recebe duas strings e as junta, formando uma string apenas.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/Concatena%20Strings.h',
    code: `
void concatenaStrings(char string1[], char string2[]) {
  int size1 = 0, size2 = 0, i, j;

  size1 = tamanhoString(string1);
  size2 = tamanhoString(string2);

  for (i = size1, j = 0; i < (size1 + size2); i++, j++) {
    string1[i] = string2[j];
  }

  string1[size1 + size2] = '\\0';

  printf("%s", string1);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Contador de espaços em uma string',
    description:
      'Recebe uma string e gera um vetor contendo a quantidade de espaços entre cada palavra da string.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/Conta%20Espaços%20de%20uma%20string.h',
    code: `
void contadorDeEspacos(char Vetor[]) {
    int size = 0;
    while(Vetor[size] != '\\0') {
        size++;
    }

    int vetorEspacos[size], i, j = 0,count = 0;

    for (i = 0; i < size; i++) {
        if (Vetor[i] == ' ' && Vetor[i+1] == ' ') {
            count++;
        } else if (Vetor[i] == ' ' && Vetor[i+1] != ' ') {
            count++;
            vetorEspacos[j] = count;
            j++;
            count = 0;
        }
    }
    printf("==== VETOR ESPACOS ====\\n");
    for (i = 0; i < j; i++) {
        printf("%d\\t", vetorEspacos[i]);
    }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica se uma string existe dentro de outra (includes)',
    description:
      'Recebe uma string e uma substring, então verifica se essa substring existe dentro da string.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/Função%20Include.h',
    code: `
int Includes(char string[], char substring[]) {
    int resultado = 0, i = 0, j;

    while(string[i] != '\\0') {
        if (string[i] == substring[0]) {
            j = 0;
            while (substring[j] != '\\0' && string[i] != '\\0') {
                if (string[i] != substring[j]) {
                    break;
                }
                i++;
                j++;
            }
            if (substring[j] == '\\0') {
                resultado = 1;
            }
        }
        i++;
    }
    return resultado;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Verifica o tamanho de uma string',
    description:
      'Recebe uma string retorna o seu tamanho.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/Tamanho%20de%20uma%20string.h',
    code: `
int tamanhoString(char str[]) {
  int tamanho = 0;

  while (str[tamanho] != '\\0') {
    tamanho++;
  }

  return (tamanho - 1);
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Conta quantas palavras uma string possui',
    description:
      'Recebe uma string retorna a quantidade de palavras que ela possui.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/contaPalavras.h',
    code: `
int contaPalavras(char string[]) {
  int i = 0, size = 0, countPalavras = 0, novaPalavra = 1;

  size = tamanhoString(string);

  for(i = 0; i < size; i++) {
    if (string[i] == ' ') {
      novaPalavra = 1;
    } else if (novaPalavra == 1) {
      countPalavras++;
      novaPalavra = 0;
    }
  }

  return countPalavras;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Primeiras letras de cada palavra de uma string',
    description:
      'Recebe uma string e gera um vetor contendo as primeiras letras de cada palavra da string.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/primeirasLetras.h',
    code: `
int tamanhoString(char str[]) {
  int tamanho = 0;

  while (str[tamanho] != '\\0') {
    tamanho++;
  }

  return (tamanho - 1);
}

void primeirasLetras(char vetor[], char string[]) {
  int i = 0, size = 0, j = 0;

  size = tamanhoString(string);

  for (i = 0; i <= size; i++) {
    if ((i == 0 && string[i] != ' ') || (string[i] != ' ' && string[i-1] == ' ')) {
      vetor[j] = string[i];
      j++;
    }
  }
  
  for (i = 0; i < j; i++) {
    printf("%c  ", vetor[i]);
  }
  
  printf("\\n");
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Últimas letras de cada palavra de uma string',
    description:
      'Recebe uma string e gera um vetor contendo as últimas letras de cada palavra da string.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Strings/ultimasLetras.h',
    code: `
int tamanhoString(char str[]) {
  int tamanho = 0;

  while (str[tamanho] != '\\0') {
    tamanho++;
  }

  return (tamanho - 1);
}

void ultimasLetras(char vetor[], char string[]) {
  int i = 0, size = 0, j = 0;

  size = tamanhoString(string);

  for(i = 0; i <= size; i++) {
    if ((string[i] != ' ' && string[i+1] == ' ') || (string[i] != ' ' && string[i + 1] == '\\0')) {
      vetor[j] = string[i];
      j++;
    }
  }

  for (i = 0; i < j; i++) {
    printf("%c  ", vetor[i]);
  }

  printf("\\n");
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar matriz aleatória de inteiros',
    description:
      'Gera uma matriz de números inteiros aleatórios de 1 até um limite informado.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Matrizes/Gerar%20matriz%20aleatória.h',
    code: `
void gerarMatrizInteiro(int linha, int coluna, int matriz[linha][coluna], int limite) {

  srand(time(NULL));

  for (int j = 0; j < linha; j++) {
      for (int i = 0; i < coluna; i++) {
          matriz[j][i] = (rand() % limite) + 1;
      }
  }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Gerar matriz preenchida de inteiros',
    description:
      'Gera uma matriz preenchida por um número inteiro informado.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Matrizes/Gerar%20matriz%20preenchida%20por%20número.h',
    code: `
void gerarMatrizInteiroPreenchida(int linha, int coluna, int matriz[linha][coluna], int num) {

  for (int j = 0; j < linha; j++) {
      for (int i = 0; i < coluna; i++) {
          matriz[j][i] = num;
      }
  }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Mostra matriz de inteiros',
    description:
      'Mostra todos os elementos de uma matriz de números inteiros.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Matrizes/mostrar%20Matriz%20Inteira.h',
    code: `
void mostrarMatrizInteiro(int linha, int coluna, int matriz[linha][coluna]) {

  for (int j = 0; j < linha; j++) {
      for (int i = 0; i < coluna; i++) {
          printf("%d ", matriz[j][i]);
      }
      printf("\\n");
  }
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula potência',
    description:
      'Recebe uma base e um expoente, retornando o valor da potência.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Calcular%20Potência.h',
    code: `
int calcularPotencia(int base, int expoente) {

  int resultado = 1;

  for (int i = 0; i < expoente; i++) {
      resultado *= base;
  }
  return resultado;
}
        `,
  },
  {
    id: crypto.randomUUID(),
    title: 'Calcula potência de vetores',
    description:
      'Recebe dois vetores, um contendo os números da base e o outro contendo os números dos expoentes e ao fim armazena os resultados em outro vetor.',
    githubLink:
      'https://github.com/oliver-zyn/UTFPR-Codes/blob/master/Códigos%20de%20Auxilio/Vetores/Calcula%20Potência%20com%20vetores.h',
    code: `
int calcularPotencia(int base, int expoente) {
  int resultado = 1;

  for (int i = 0; i < expoente; i++) {
      resultado *= base;
  }
  return resultado;
}

void calculaPotenciaPorVetores(int vetorbase[], int vetorexpoente[], int vetorResultado[], int tamanho) {

  printf("BASE\\tEXPOENTE\\tRESULTADO\\n");
  for (int i = 0; i < tamanho; i++) {
      int base = vetorbase[i];
      int expoente = vetorexpoente[i];
      vetorResultado[i] = calcularPotencia(base, expoente);
      printf("%d\\t%d\\t\\t%d\\n", base, expoente, vetorResultado[i]);
  }
}
        `,
  }
]
