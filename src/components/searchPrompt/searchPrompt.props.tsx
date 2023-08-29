export type UseSearchPrompt = () => [
    status: string,
    inputRef: React.RefObject<HTMLInputElement>,
    handleInput: (value: string) => void,
];