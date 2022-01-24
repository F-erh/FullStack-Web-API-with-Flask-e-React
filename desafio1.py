def main():
    '''
    Programa que le n notas de provas, calcula a media
    das notas da prova e imprime o numero de notas
    maiores que a media calculada.
    '''

    # leia o numero de notas
    n = int(input("Digite o número de notas: "))

    # inicializacoes
    soma_notas = 0
    lista_notas = []

    # calcule a soma das notas e crie uma lista com
    # as notas
    for i in range(n):
        nota = float(input("Digite uma nota: "))
        soma_notas += nota
        lista_notas.append(nota)

    # calcule a media
    media_notas = soma_notas/n
    print("A media das notas e %.1f" %(media_notas))

    # conte quantas notas estao acima da media
    cont = 0
    for i in range(n):
        if lista_notas[i] > media_notas:
            cont += 1

    print("%d notas sao maiores que %.1f"
          %(cont, media_notas))

#----------------------------------------------------
main()