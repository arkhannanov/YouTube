decodedMessage = encodedSymbols.map(el => (el + 10 > 71) ? symbols[el +10 -symbols.length]: symbols[el+10]).join('')