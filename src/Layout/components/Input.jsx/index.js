import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { useState } from 'react';

function Input({ value, setValue, type }) {
    const handleOnChange = (e) => {
        setValue(e.target.value);
    };
    const [visible, setVisible] = useState(false);

    return (
        <div className="relative">
            <input
                className="bg-zinc-200 rounded px-4 py-3 text-zinc-900 w-full"
                type={visible ? 'text' : type}
                value={value}
                onChange={handleOnChange}
            />
            {type === 'password' && (
                <div
                    className="absolute right-3 top-1/3"
                    onClick={() => {
                        setVisible(!visible);
                    }}
                >
                    {visible ? <AiFillEye /> : <AiFillEyeInvisible />}
                </div>
            )}
        </div>
    );
}

export default Input;
