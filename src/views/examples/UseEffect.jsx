import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFatorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFatorial(n - 1) * n;
}

function calcParOuImpar(num) {
  const n = parseInt(num);
  if (n % 2 === 0) return n;
  return n;
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [fatorial, setFatorial] = useState(1);
  const [parOuImpar, setParOuImpar] = useState(0);

  useEffect(
    function () {
      setParOuImpar(calcParOuImpar(parOuImpar));
    },
    [parOuImpar]
  );

  useEffect(
    function () {
      setFatorial(calcFatorial(number));
    },
    [number]
  );

  useEffect(
    function () {
      if (fatorial > 1000000) {
        document.title = "Eita!!!";
      } else {
        document.title = "React App";
      }
    },
    [fatorial]
  );

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />

      <SectionTitle title="Exercício #01" />

      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {fatorial === -1 ? "Não Existe" : fatorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text"></span>

        <input
          type="number"
          className="input"
          value={parOuImpar}
          onChange={(e) => setParOuImpar(e.target.value)}
        />
        <span className="text red">
          {parOuImpar % 2 === 0 ? "Par" : "Ímpar"}
        </span>
      </div>
    </div>
  );
};

export default UseEffect;
