import React, { useState } from 'react';
import { Sum, Subtract, Divide } from '../js/funtions';
import { NumberInput, Result } from './NumberInput';
import {Button} from "./ButtonCalculator";

export const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sumResult, setSumResult] = useState('');
  const [subResult, setSubResult] = useState('');
  const [divResult, setDivResult] = useState('');

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    const sum = Sum(number1, number2);
    const sub = Subtract(number1, number2);
    const div = Divide(number1, number2);

    setSumResult(sum);
    setSubResult(sub);
    setDivResult(div);
  };

  return (
    <div id='container'>
      <h1>Calculator</h1>
      <NumberInput label="Num 1:" value={num1} onChange={setNum1} />
      <NumberInput label="Num 2:" value={num2} onChange={setNum2} />
      <Button label="Calcular" onClick={handleCalculate} />
      <Result label="addition:" value={sumResult} />
      <Result label="Subtraction:" value={subResult} />
      <Result label="Division:" value={divResult} />
    </div>
  );
};



