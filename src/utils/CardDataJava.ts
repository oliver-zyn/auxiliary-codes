export const cardDataJava = [
  {
    id: crypto.randomUUID(),
    title: 'Pagina de java',
    description:
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.',
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
]
