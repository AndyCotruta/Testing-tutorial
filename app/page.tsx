"use client";
import { isNumber, sum } from "@/utils/util";
import Image from "next/image";
import { ChangeEvent, HtmlHTMLAttributes, useState } from "react";

interface inputs {
  firstNumber: number;
  secondNumber: number;
}

export default function Home() {
  const [result, setResult] = useState<number>(0);
  const [inputs, setInputs] = useState<inputs>({
    firstNumber: 0,
    secondNumber: 0,
  });
  const [inputError, setInputError] = useState<boolean>(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNumber(Number(e.target.value))) {
      setInputError(false);
      setInputs({
        ...inputs,
        [e.target.name]: Number(e.target.value),
      });
    } else {
      setInputError(true);
    }
  };

  return (
    <main>
      <div className=" bg-red-100 p-4 flex flex-col gap-4">
        <p>Number 1</p>
        <input
          className="w-48 p-2 firstNumber"
          id="firstNumber"
          placeholder="Input number here"
          value={inputs.firstNumber === 0 ? "" : inputs.firstNumber}
          name="firstNumber"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <p>Number 2</p>
        <input
          className="w-48 p-2 secondNumber"
          id="secondNumber"
          placeholder="Input number here"
          value={inputs.secondNumber === 0 ? "" : inputs.secondNumber}
          name="secondNumber"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <div className="flex w-48 gap-2">
          <div
            className="bg-blue-400 w-1/2 rounded-lg p-2 text-center text-white cursor-pointer"
            id="addNumbers"
            onClick={() => {
              setResult(sum(inputs.firstNumber, inputs.secondNumber));
            }}
          >
            <p>Add numbers</p>
          </div>
          <div
            className="bg-red-400 w-1/2 rounded-lg p-2 text-white cursor-pointer flex items-center justify-center"
            onClick={() => {
              setResult(0);
              setInputs({ firstNumber: 0, secondNumber: 0 });
            }}
          >
            Clear
          </div>
        </div>
        {inputError && (
          <p className="text-red-700">Please input valid numbers!</p>
        )}
        <p>Sum</p>
        <p id="result">{result}</p>
      </div>
    </main>
  );
}
