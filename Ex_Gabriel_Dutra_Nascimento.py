def ler_mercadorias(mercadoria_ex):

    mercadorias = {} 
    with open('C:/Users/Gabriel/Desktop/mercadorias_ex.txt', 'r') as file: 
        for linha in file:
            nome, preco = linha.strip().split(' = ')
            mercadorias[nome] = float(preco)
    return mercadorias

def encontar_maior_e_menor(mercadorias):
    item_mais_caro = max(mercadorias, key=mercadorias.get)
    item_mais_barato = min(mercadorias, key=mercadorias.get)
    return item_mais_caro, item_mais_barato

def calcular_media(mercadorias):
    total_precos = sum(mercadorias.values())
    return total_precos / len(mercadorias)

if __name__ == "__main__":
    arquivo = 'mercadorias_ex.txt'
    mercadorias = ler_mercadorias(arquivo)

    item_mais_caro, item_mais_barato = encontar_maior_e_menor(mercadorias)
    media_precos = calcular_media(mercadorias)

    print(f"Item mais caro: {item_mais_caro} (custa R${mercadorias[item_mais_caro]:.2f})")
    print(f"Item mais barato: {item_mais_barato} (custa R${mercadorias[item_mais_barato]:.2f})")
    print(f"Média de preço: R${media_precos:.2f}")