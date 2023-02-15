import { FC, useState, useEffect } from 'react';
import MDEditor from '@uiw/react-md-editor';

import styles from './MarkEditor.module.scss';

const MarkEditor: FC = () => {
    const [value, setValue] = useState<string | undefined>('');

    const saveToLS = (value?: string) =>
        value !== undefined && localStorage.setItem('mark', value);

    const getFromLS = () => {
        const textContent = localStorage.getItem('mark');
        return textContent ? textContent : '';
    };

    const cleanAll = () => setValue('');

    const copyAll = () => navigator.clipboard.writeText(String(value));

    useEffect(() => {
        const textContent = getFromLS();
        textContent && setValue(textContent);
    }, []);

    useEffect(() => {
        saveToLS(value);
    }, [value]);

    return (
        <div className={styles.editor_container}>
            <div className={styles.editor_btn_block}>
                <button
                    type='button'
                    className={styles.editor_copy}
                    onClick={copyAll}
                >
                    Copy All
                </button>
                <button
                    type='button'
                    className={styles.editor_clean}
                    onClick={cleanAll}
                >
                    Clean All
                </button>
            </div>
            <MDEditor
                value={value}
                onChange={setValue}
                style={{ minHeight: 'calc(100% - 56px)' }}
            />
        </div>
    );
};

export { MarkEditor };
