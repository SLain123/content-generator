export type GPTConfig = {
    prompt: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    stream: boolean;
};
