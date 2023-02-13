import { FC, useState } from 'react';
import { translate } from '@vitalets/google-translate-api';

const App: FC = () => {
    const [input, setInput] = useState('');

    const getAnswer = async (prompt: string) => {
        fetch(
            'https://api.openai.com/v1/engines/text-davinci-001/completions',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer ' + String(process.env.REACT_APP_GPT_KEY),
                },
                body: JSON.stringify({
                    prompt,
                    temperature: 0.3,
                    max_tokens: 1500,
                    top_p: 1,
                    frequency_penalty: -2.0,
                    presence_penalty: 2,
                    stream: false,
                }),
            },
        )
            .then((response) => response.json())
            .then((data) => {
                data?.choices?.length
                    ? toRussian(data.choices[0].text).then((answer) =>
                          console.log(answer),
                      )
                    : console.log(data.error.message);
            })
            .catch((err) => console.log(err));
    };

    const toEnglish = async (text: string) => {
        return await translate(text, { to: 'en' });
    };

    const toRussian = async (text: string) => {
        return await translate(text, { to: 'ru' });
    };

    return (
        <div className='App'>
            <textarea
                value={input}
                onChange={(evt) => setInput(evt.target.value)}
            />
            <button
                type='button'
                onClick={() => {
                    toEnglish(input).then((res) => getAnswer(res.text));
                }}
            >
                Send
            </button>
        </div>
    );
};

export { App };
