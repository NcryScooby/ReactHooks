### React Hooks
React Hooks -> Adicionas várias funcionalidades nos (componentes Funcionais -> Componentes baseados em funções).

## useState
useState -> É um dos hooks mais utilizados, e um dos mais fáceis de ser aplicado. Estado é algo que é mutável, ou seja, ele pode ser alterado.

Quando o estado modifica, a interface visual é atualizada.

Componente controlado -> Componente que tem um estado vínculado.

Componente não controlado -> Componente que não tem nenhum estado vínculado.

## useEffect
Permite executar efeitos colaterais em componentes -> Quando você modifica algo e gera efeito em outra coisa.

## useRef
Retorna um objeto mutável com a propriedade .current(atual).

## useMemo
Retorna um valor memoizado, retorna um valor em cache.

## useCallback
Retorna uma função memoizada, armazena no cache e só renderiza se as propriedades forem alteradas, evitando renderização desnecessária.

## useContext
Permite uma comunicação mais fácil entre componentes distantes, assim como o Redux.

## useReducer
O reducer recebe o estado atual e recebe uma action. A action evolui o estado.