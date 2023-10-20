content = ""
array = []
variables = []
memory = []
dic = {"qua": 1, "cri": 2,"miau": 3}


with open("exemple.zoo") as file:
  content = file.read()
  
lines = content.split("\n")

def alocar(line, commands):
  variables.append(commands[1])
  
  # if("\"" in commands[-1]):
  #   word = commands[-1].splice(1:)
  #   for letter in word:
  #     print(letter)
  # else:
  memory.append(commands[-1])
  array.append(len(memory))



def code(line):
  text = line.replace("miau ", "")
  if("\"" in text):
    array.append(-1)
    t = text.replace("\"", "")
    for letra in t:
      encodding = ord(letra)
      memory.append(encodding)
      array.append(len(memory))

  else:
    if(text in variables):
      array.append(memory[variables.index(text)])
    print("\n")
  print(text)  





  
for line in lines:
  if(line == ""):
    continue

  commands = line.split(" ")
  for c in commands:
    if(c in dic):
      array.append(dic[c]) 
      if(c == "qua"):
        alocar(line, commands)

      if(c == "miau"):
        code(line)

  array.append(0)



    
        
  
print(array)
print(memory)
print(variables)
