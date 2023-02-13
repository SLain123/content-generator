import { GPTConfig } from 'types/gptContentType';

export const getParagraph = async (config: GPTConfig) => {
    fetch('https://api.openai.com/v1/engines/text-davinci-001/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + String(process.env.REACT_APP_GPT_KEY),
        },
        body: JSON.stringify(config),
    })
        .then((response) => response.json())
        .then((data) =>
            data?.choices?.length ? data.choices[0].text : data.error.message,
        )
        .catch((err) => `${err} - глобально, совсем без ответа от сервера...`);
};
