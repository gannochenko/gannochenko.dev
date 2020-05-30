import React, { useState, useEffect } from 'react';
import { Input } from '../Input';
import { Color } from './Color';

const toDec = (color: string, offset: number) =>
    parseInt(color.substr(offset, 2), 16);
const calculate = (byte: number, opacity: number) =>
    Math.floor(byte * opacity + 255 * (1 - opacity));

export const Calculator = () => {
    const [color, setColor] = useState<string>('C31528');
    const [opacity, setOpacity] = useState<string>('0.3');
    const [result, setResult] = useState<string>('');

    useEffect(() => {
        if (!color.length && !opacity.length) {
            setResult('No input');
            return;
        }

        const opacitySafe = parseFloat(opacity);

        if (!color.match(/^[a-f0-9]{6}$/i) || Number.isNaN(opacitySafe)) {
            setResult('Invalid input');
            return;
        }

        const a = calculate(toDec(color, 0), opacitySafe).toString(16);
        const b = calculate(toDec(color, 2), opacitySafe).toString(16);
        const c = calculate(toDec(color, 4), opacitySafe).toString(16);

        setResult(`#${a}${b}${c}`.toUpperCase());
    }, [color, opacity]);

    return (
        <div>
            opacity(#{' '}
            <Input
                defaultValue={color}
                maxLength={6}
                width="6rem"
                onKeyUp={(e: any) => setColor(e.target.value)}
            />
            ,{' '}
            <Input
                defaultValue="0.3"
                width="4rem"
                onKeyUp={(e: any) => setOpacity(e.target.value)}
            />{' '}
            ) = {result} <Color color={result} />
        </div>
    );
};
