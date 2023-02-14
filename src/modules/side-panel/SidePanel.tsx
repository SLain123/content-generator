import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './SidePanel.module.scss';

const articlesData = [
    {
        id: 0,
        title: 'Идеи для статьи',
        to: '/ideas',
    },
    {
        id: 1,
        title: 'План статьи',
        to: '/plan',
    },
    {
        id: 2,
        title: 'Заголовок для статьи',
        to: '/header',
    },
    {
        id: 3,
        title: 'Кликбейт заголовок для статьи',
        to: '/clickbait',
    },
    {
        id: 4,
        title: 'Вводный абзац для статьи',
        to: '/start',
    },
    {
        id: 5,
        title: 'Несколько абзацев для статьи',
        to: '/paragraphs',
    },
    {
        id: 6,
        title: 'Развернутая статьи из плана',
        to: '/article-rom-plan',
    },
    {
        id: 7,
        title: 'Заключительный абзац для статьи',
        to: '/finish',
    },
    {
        id: 8,
        title: 'Ключевые слова/тэги для статьи',
        to: '/tags',
    },
    {
        id: 9,
        title: 'Коментарий для статьи',
        to: '/comments',
    },
    {
        id: 10,
        title: 'Свободный запрос текста',
        to: '/free',
    },
];

const SidePanel: FC = () => {
    return (
        <div className={styles.sp_container}>
            <p className={styles.sp_header}>Статья:</p>
            <ul className={styles.sp_list}>
                {articlesData.map(({ id, title, to }) => (
                    <li className={styles.sp_item} key={id}>
                        <Link className={styles.sp_link} to={to}>
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export { SidePanel };
