# In[1]: Desafio 1 - Modo aritimético
def soma_array(lista):
     array = 0
     for elemento in lista:
          array += elemento

     media = array / len(lista)
     maiores=[]
     for i in lista:
          if i >= media:
               maiores.append(i)
     return len(maiores)

a=(22, 28, 33, 54, 14, 2, 76)

print('Numero de elementos acima da média:', soma_array(a))

# In[1]: Desafio 1 - Modo pela biblioteca Numpy
from posixpath import split
import numpy as np
# Pega a lista como você esta antes.    
lista = [22, 28, 33, 54, 14, 2, 76]
def somar(lisnp):

  lisnp=np.array(lista)
  return lisnp.mean(),lisnp[lisnp>lisnp.mean()].size

# In[2]: Desafio 2 - Modo pela biblioteca Pandas
from pandas import Series

sample_list = ['front-end', 'angular', 'back-end', 'database', 'async']
s = Series([word[0] for word in sample_list])
s.value_counts()

# In [2]: Desafio 2 
lista = ['front-end', 'angular', 'back-end', 'database', 'async']

print("Words:",len(lista)) # prints number of letras in the file.

letra_a = 0

for letras in lista:
    if letras[0]=='a':
        letra_a += 1

print(letra_a, "começa com a letra a")

# In[3]
my_list = [22, 28, 33, 54, 14, 2, 76]
print("The list is :")
print(my_list)
print("The elements in odd positions are : ")
for i in range(1, len(my_list), 2):
   print(my_list[i])


# %%
a_list = ['front-end', 'back-end', 'database']
a_list = ['aront-end' if item == 'front-end' else item for item in a_list]
a_list = ['aack-end' if item == 'back-end' else item for item in a_list]
a_list = ['aatabase' if item == 'database' else item for item in a_list]
print(a_list)
# %%
txt = " Olá usuário, bem vindo ao sistema "

x = txt.replace(" Olá usuário, bem vindo ao sistema ", "Olá usuário! bem vindo ao sistema.")

print(x)

# In[]
# Python program to find out
# Sum of elements at even and
# odd index positions separately

# Function to calculate Sum


def num_impar(a, n):
	soma_impar = sum(a[1::2])
	print("A soma dos index ímpares é:", soma_impar)


# Driver Function

arr = [22, 28, 33, 54, 14, 2, 76]
n = len(arr)

num_impar(arr, n)
