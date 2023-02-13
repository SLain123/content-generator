export const getConfigForMainContant = (prompt: string) => ({
    prompt,
    temperature: 0.3,
    max_tokens: 1500,
    top_p: 1,
    frequency_penalty: -2.0,
    presence_penalty: 2,
    stream: false,
});
